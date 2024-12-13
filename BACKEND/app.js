const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const http = require('http');
const { Server } = require('socket.io');
const ffmpeg = require('fluent-ffmpeg');
const ffmpegPath = require('ffmpeg-static');  // Requerir ffmpeg-static

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Configurar fluent-ffmpeg para usar la ruta de ffmpeg estático
ffmpeg.setFfmpegPath(ffmpegPath); // Usar la ruta de ffmpeg proporcionada por ffmpeg-static

// Configuración de multer para archivos subidos manualmente
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Máximo 10MB
  fileFilter: (req, file, cb) => {
    const filetypes = /audio\/(mpeg|wav|ogg|aac|mp3)/;
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype) {
      cb(null, true);
    } else {
      cb(new Error('El archivo no es un audio válido'));
    }
  }
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Subida manual de archivos
app.post('/upload', upload.single('audio'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No se subió ningún archivo' });
  }

  // Si el archivo es .wav, lo convertimos a .mp3
  if (path.extname(req.file.filename) === '.wav') {
    const inputFilePath = req.file.path;
    const outputFilePath = `./uploads/${Date.now()}.mp3`;

    // Convertir archivo a MP3
    ffmpeg(inputFilePath)
      .output(outputFilePath)
      .on('end', () => {
        console.log(`Archivo convertido a MP3 y guardado en ${outputFilePath}`);

        // Intentar eliminar el archivo original .wav
        fs.unlink(inputFilePath, (err) => {
          if (err) {
            console.error('Error al eliminar archivo original:', err);
            return res.status(500).json({ error: 'Error al eliminar el archivo .wav' });
          }
          console.log('Archivo .wav eliminado con éxito');
        });

        // Responder al cliente con la ruta del nuevo archivo MP3
        res.status(200).json({
          message: 'Archivo convertido y guardado con éxito',
          filename: path.basename(outputFilePath),
          path: outputFilePath
        });
      })
      .on('error', (err) => {
        console.error('Error al convertir archivo:', err);
        res.status(500).json({ error: 'Error al convertir el archivo a MP3' });
      })
      .run();
  } else {
    // Si el archivo no es .wav, lo dejamos como está
    res.status(200).json({
      message: 'Archivo guardado con éxito',
      filename: req.file.filename,
      path: req.file.path
    });
  }
});

// Streaming en tiempo real
io.on('connection', (socket) => {
  console.log('Cliente conectado para streaming de audio');

  // Crear un archivo temporal para cada cliente
  const filePath = `./uploads/${Date.now()}_streamed_audio.wav`;
  const writeStream = fs.createWriteStream(filePath);

  // Escuchar chunks de audio desde el cliente
  socket.on('audio_chunk', (chunk) => {
    writeStream.write(chunk); // Escribe cada chunk en el archivo
  });

  // Cuando termina la grabación
  socket.on('end_audio', () => {
    writeStream.end();
    console.log(`Audio guardado en ${filePath}`);
    socket.emit('audio_saved', { path: filePath });
  });

  // Manejo de desconexión
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
    writeStream.end(); // Asegurar que se cierre el archivo
  });
});

// Verificar que el servicio está activo
app.get('/', (req, res) => {
  res.send('Microservicio de almacenamiento de audios activo');
});

// Manejo de errores
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ error: err.message });
  }
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  next();
});

// Iniciar servidor
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Microservicio corriendo en http://localhost:${PORT}`);
});
