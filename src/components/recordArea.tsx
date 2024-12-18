import React, { useState, useRef } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Paper,
  Alert,
  CircularProgress,
  LinearProgress,
  Collapse,
} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { keyframes } from '@emotion/react';
import ResponseHandler from '../components/ResponseHandler';

// Animación para el micrófono
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
`;

interface Conversation {
  id: number;
  message: string;
  isSaved: boolean;
  audioFile: File | null;
  transcription: string | null;
}

interface RecordAreaProps {
  conversation: Conversation;
  updateConversationData: (id: number, data: Partial<Conversation>) => void;
}

const RecordArea: React.FC<RecordAreaProps> = ({ conversation, updateConversationData }) => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [transcription, setTranscription] = useState<string | null>(null);
  const [formData, setFormData] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isResponseHandlerVisible, setIsResponseHandlerVisible] = useState<boolean>(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        audioChunksRef.current = [];

        mediaRecorder.ondataavailable = (event) => audioChunksRef.current.push(event.data);
        mediaRecorder.onstop = saveRecording;
        mediaRecorder.start();
        setIsRecording(true);
        setErrorMessage(null);
      })
      .catch(() => setErrorMessage('Error al acceder al micrófono.'));
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  const saveRecording = () => {
    const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
    const file = new File([audioBlob], 'grabacion.mp3');
    setAudioFile(file);
    setFileName(file.name);
    updateConversationData(conversation.id, { audioFile: file });
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAudioFile(file);
      setFileName(file.name);
      updateConversationData(conversation.id, { audioFile: file });
    }
  };

  const handleUpload = async () => {
    if (!audioFile) {
      setErrorMessage('No hay archivo de audio para enviar.');
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      const formData = new FormData();
      formData.append('file', audioFile);

      const response = await fetch('http://26.164.147.61:8000/process_audio', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        setErrorMessage(errorResponse.error || 'Error desconocido');
        return;
      }

      const data = await response.json();
      setTranscription(data.transcription);
      setFormData(data.form_data);

      setIsResponseHandlerVisible(true);
      updateConversationData(conversation.id, { transcription: data.transcription });
    } catch (error) {
      setErrorMessage('Error al enviar el archivo a la API.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: '600px',
        width: '90%',
        margin: 'auto',
        padding: 5,
        borderRadius: 4,
        backgroundColor: '#202124',
        textAlign: 'center',
        border: '2px dashed rgba(144, 202, 249, 0.6)',
        boxShadow: '0 12px 32px rgba(0,0,0,0.4)',
        overflowY: 'auto',  // Agregado para habilitar scroll si es necesario
        maxHeight: '80vh',  // Altura máxima del contenedor
      }}
    >
      <Typography variant="h6" sx={{ color: '#E0E0E0', fontWeight: 500, marginBottom: 3 }}>
        Graba tu audio o sube un archivo
      </Typography>

      <Collapse in={!isResponseHandlerVisible} timeout={500}>
        {/* Formulario de grabación y carga */}
        <MicIcon
          onClick={toggleRecording}
          sx={{
            fontSize: 90,
            color: isRecording ? '#FF5252' : '#64B5F6',
            cursor: 'pointer',
            animation: isRecording ? `${pulse} 1.2s infinite` : 'none',
          }}
        />
        <Paper
          elevation={0}
          sx={{
            marginTop: 3,
            display: 'flex',
            alignItems: 'center',
            padding: 1.5,
            backgroundColor: '#ffffff',
            border: '1px solid #424242',
            borderRadius: 3,
          }}
        >
          <Button
            variant="outlined"
            component="label"
            startIcon={<FolderOpenIcon />}
            sx={{
              color: '#ffffff',
              backgroundColor: '#151111',
              textTransform: 'lowercase',
              fontWeight: 'bold',
              borderColor: '#ffffff',
              '&:hover': {
                backgroundColor: '#333333',
                borderColor: '#ffffff',
              },
            }}
          >
            Subir archivo
            <input type="file" accept="audio/*" hidden onChange={handleFileSelect} />
          </Button>
          <TextField
            fullWidth
            variant="standard"
            value={fileName || 'ningún archivo seleccionado'}
            InputProps={{ disableUnderline: true, readOnly: true, sx: { marginLeft: 2 } }}
          />
        </Paper>
        <Button
          variant="contained"
          color="success"
          fullWidth
          startIcon={<UploadFileIcon />}
          sx={{ marginTop: 2, padding: 1.5, fontWeight: 'bold' }}
          onClick={handleUpload}
          disabled={loading || !audioFile}
        >
          {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Enviar Archivo'}
        </Button>
        {loading && <LinearProgress sx={{ marginTop: 2, width: '100%' }} />}
        {errorMessage && <Alert severity="error" sx={{ marginTop: 2 }}>{errorMessage}</Alert>}
      </Collapse>

      {/* Componente ResponseHandler */}
      {isResponseHandlerVisible && (
        <ResponseHandler
          transcription={transcription}
          formData={formData}
          onClose={() => setIsResponseHandlerVisible(false)}
        />
      )}
    </Box>
  );
};

export default RecordArea;
