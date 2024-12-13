import React, { useState } from 'react';
import { Box, Typography, Button, Paper, Icon } from '@mui/material';
import { VoiceChat } from '@mui/icons-material'; // Importamos el ícono VoiceChat

const Sidebar: React.FC = () => {
  // Estado para manejar las conversaciones
  const [conversations, setConversations] = useState<string[]>([]);

  // Función para agregar una nueva conversación
  const addConversation = () => {
    setConversations((prev) => [...prev, `Conversación ${prev.length + 1}`]);
  };

  return (
    <Box
      sx={{
        width: '240px',
        height: '100%', // Asegúrate de que ocupe todo el alto disponible
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
      <Button
  variant="contained"
  fullWidth
  sx={{
    marginBottom: 2,
    backgroundColor: '#121512', // Color de fondo
    '&:hover': {
      backgroundColor: '#2e2e2e', // Color de fondo cuando el botón está en hover
    },
    color: '#ffffff', // Color del texto
    borderRadius: '8px', // Opcional: Bordes redondeados para un estilo más suave
    textTransform: 'none', // Evitar que el texto se ponga en mayúsculas
  }}
  onClick={addConversation}
>
  + Nuevo Paciente
</Button>


      {/* Contenedor de conversaciones con scroll */}
      <Box
        sx={{
          flexGrow: 1, // Ocupa el espacio restante
          overflowY: 'auto', // Permite el desplazamiento vertical
          maxHeight: '200px', // Limita la altura de las conversaciones
        }}
      >
        {conversations.map((conversation, index) => (
          <Paper
            key={index}
            sx={{
              marginBottom: 1,
              padding: 1,
              backgroundColor: '#333',
              color: 'white',
              display: 'flex',
              alignItems: 'center', // Para alinear los íconos y texto
            }}
          >
            {/* Ícono de VoiceChat al inicio */}
            <Icon sx={{ marginRight: 1, color: 'white' }}>
              <VoiceChat />
            </Icon>
            {conversation}
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
