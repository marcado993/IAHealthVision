import React, { useState } from 'react';
import { Box, Typography, Button, Paper, Icon, Tooltip, Link } from '@mui/material';
import { VoiceChat } from '@mui/icons-material';
import RecordArea from './recordArea';

interface Conversation {
  id: number;
  title: string;
  audioFile?: File | null;
  transcription?: string | null;
  fileName?: string | null;
  isRecording: boolean;
  isSaved: boolean;  // Estado para saber si la conversación ya está guardada
}

const Sidebar: React.FC = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConversation, setActiveConversation] = useState<number | null>(null);

  // Función para añadir una nueva conversación
  const addConversation = () => {
    const newConversation: Conversation = {
      id: conversations.length,
      title: `Paciente ${conversations.length + 1}`,
      audioFile: null,
      transcription: null,
      fileName: null,
      isRecording: false,
      isSaved: false,  // Inicialmente la conversación no está guardada
    };
    setConversations((prev) => [...prev, newConversation]);
    setActiveConversation(newConversation.id);  // Establece la nueva conversación como activa
  };

  // Función para actualizar los datos de la conversación
  const updateConversationData = (id: number, data: Partial<Conversation>) => {
    setConversations((prev) =>
      prev.map((conv) => (conv.id === id ? { ...conv, ...data } : conv))
    );
  };

  // Función para marcar la conversación como guardada
  const saveConversation = (id: number) => {
    setConversations((prev) =>
      prev.map((conv) =>
        conv.id === id ? { ...conv, isSaved: true } : conv
      )
    );
  };

  // Obtener la conversación activa
  const currentConversation = conversations.find((conv) => conv.id === activeConversation);

  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100%' }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: '240px',
          backgroundColor: '#212121',
          padding: 2,
          boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h6" gutterBottom color="white">
          Conversaciones
        </Typography>
        <Tooltip title="Pulsa aquí para iniciar una nueva conversación" arrow>
          <Button
            variant="contained"
            fullWidth
            sx={{
              marginBottom: 2,
              backgroundColor: '#121512',
              '&:hover': { backgroundColor: '#2e2e2e' },
              color: '#ffffff',
              borderRadius: '8px',
              textTransform: 'none',
            }}
            onClick={addConversation}
          >
            + Nuevo Paciente
          </Button>
        </Tooltip>

        {/* Lista de conversaciones con altura fija */}
        <Box sx={{ height: 'calc(100vh - 240px - 40px)', overflowY: 'auto', marginTop: 1 }}>
          {conversations.map((conversation) => (
            <Paper
              key={conversation.id}
              onClick={() => setActiveConversation(conversation.id)}
              sx={{
                marginBottom: 1,
                padding: 1,
                backgroundColor: activeConversation === conversation.id ? '#555' : '#333',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
              }}
            >
              <Icon sx={{ marginRight: 1, color: 'white' }}>
                <VoiceChat />
              </Icon>
              {conversation.title}
            </Paper>
          ))}
        </Box>

        {/* Versión y etiqueta abajo de la lista de conversaciones */}
        <Box sx={{ paddingTop: 2, textAlign: 'center' }}>
          <Typography color="white" variant="body2">
            v1.0.0 - @spokenHealth
          </Typography>
        </Box>
      </Box>

      {/* Área de grabación centrada y ocupando todo el espacio restante */}
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
        {/* Si no hay una conversación activa, mostrar mensaje de inicio */}
        {currentConversation ? (
          <>
            <RecordArea
              conversation={currentConversation}
              updateConversationData={updateConversationData}
            />

            {/* Botón para guardar la conversación */}
            {!currentConversation.isSaved && (
              <Button
                variant="contained"
                color="primary"
                onClick={() => saveConversation(currentConversation.id)}
                sx={{ marginTop: 2 }}
              >
                Guardar Conversación
              </Button>
            )}

            {/* Mensaje si la conversación ya está guardada */}
            {currentConversation.isSaved && (
              <Typography color="green" sx={{ marginTop: 2 }}>
                Conversación guardada. Ya no puedes editarla.
              </Typography>
            )}
          </>
        ) : (
          <Box sx={{ textAlign: 'center' }}>
            <Typography color="textSecondary" variant="h6">
              Haz clic en el botón de Nueva Conversación o{' '}
              <Button
                variant="contained"
                onClick={addConversation}
                sx={{
                  textDecoration: 'none',
                  cursor: 'pointer',
                  backgroundColor: 'primary.main',
                  color: 'white',
                  borderRadius: '50px',
                  padding: '10px 20px',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                  '&:active': {
                    backgroundColor: 'primary.light',
                  },
                }}
              >
                haz clic aquí
              </Button>
              {' '}para empezar.
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Sidebar;
