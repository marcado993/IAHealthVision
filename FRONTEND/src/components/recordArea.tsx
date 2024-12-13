import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, Snackbar, IconButton } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';  // Importamos el ícono de verificación
import { keyframes } from '@emotion/react';
import { io, Socket } from 'socket.io-client';

const ENDPOINT = 'http://localhost:3000';  // Cambia esta URL si es necesario

const scaleUp = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const RecordArea: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false); // Estado para Snackbar
  const socketRef = useRef<Socket | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    socketRef.current = io(ENDPOINT);

    return () => {
      socketRef.current?.disconnect();
      // Detener cualquier stream activo al desmontar el componente
      stopRecording();
    };
  }, []);

  const stopRecording = () => {
    // Detener la grabación y el stream
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => track.stop());
    }
  };

  const handleMicClick = () => {
    if (isRecording) {
      // Detener la grabación y el micrófono
      stopRecording();
    } else {
      // Iniciar la grabación
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        audioChunksRef.current = [];
        setMediaStream(stream);

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data); // Almacena chunks para la subida posterior
            if (socketRef.current) {
              socketRef.current.emit('audio_chunk', event.data);
            }
          }
        };

        mediaRecorder.onstop = () => {
          if (socketRef.current) {
            socketRef.current.emit('end_audio');
          }

          // Combina los chunks en un Blob, entonces súbelo
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
          uploadAudioFile(audioBlob);
        };

        mediaRecorder.start();  // Inicia la grabación
      });
    }

    setIsRecording(!isRecording);
  };

  const uploadAudioFile = (audioBlob: Blob) => {
    const formData = new FormData();
    formData.append('audio', audioBlob, 'recorded_audio.wav');

    fetch(ENDPOINT + '/upload', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Archivo subido:', data);
        setOpenSnackbar(true); // Mostrar Snackbar al subir con éxito
      })
      .catch(error => {
        console.error('Error al subir el archivo:', error);
      });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Archivo seleccionado: ", file.name);
      const formData = new FormData();
      formData.append('audio', file);

      fetch(ENDPOINT + '/upload', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log('Archivo subido:', data);
          setOpenSnackbar(true); // Mostrar Snackbar al subir con éxito
        })
        .catch(error => {
          console.error('Error al subir el archivo:', error);
        });
    }
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false); // Cerrar Snackbar
  };

  return (
    <Box
      sx={{
        width: '70%',
        height: '300px',
        border: '2px dashed #ccc',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 4,
        paddingX: 4,
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Subir o cargar audio
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#e0e0e0',
          marginTop: 2,
          boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
        }}
        onClick={handleMicClick}
      >
        <MicIcon
          sx={{
            fontSize: 40,
            color: isRecording ? 'red' : 'black',
            animation: isRecording ? `${scaleUp} 1s infinite` : 'none',
          }}
        />
      </Box>

      <Button
        variant="contained"
        component="label"
        sx={{
          marginTop: 2,
          backgroundColor: '#3f51b5',
          '&:hover': {
            backgroundColor: '#303f9f',
          },
          borderRadius: '8px',
        }}
      >
        Subir Archivo de Audio
        <input
          type="file"
          accept="audio/*"
          hidden
          onChange={handleFileUpload}
        />
      </Button>

      {/* Snackbar con ícono y mensaje de éxito */}
      <Snackbar
        open={openSnackbar}
        onClose={handleSnackbarClose}
        autoHideDuration={3000} // Se cierra automáticamente después de 3 segundos
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#4caf50',  // Fondo verde de éxito
            color: 'white',
            borderRadius: '8px',
            padding: '8px 16px',
          }}
        >
          <CheckCircleIcon sx={{ marginRight: 2 }} />
          <Typography variant="body1">Archivo subido con éxito</Typography>
        </Box>
      </Snackbar>
    </Box>
  );
};

export default RecordArea;
