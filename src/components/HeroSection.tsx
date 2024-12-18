import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const HeroSection: React.FC = () => {
  return (
    <Box
      id="HeroSection" // Agregamos el ID aquí
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#01BA8F', // Fondo de color azul (puedes cambiarlo según desees)
        color: '#ffffff', // Texto blanco
        textAlign: 'center',
        padding: 3,
      }}
    >
      <Container>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 'bold',
            marginBottom: 2,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Añade un sombreado al texto
          }}
        >
          Transcribe tus consultas con un solo ¡CLICK!
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginBottom: 3,
            fontWeight: '400',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)', // Sombreado más ligero para el subtítulo
          }}
        >
          En el ámbito de la medicina, los profesionales de la salud dedican una gran cantidad de tiempo a tareas administrativas como el llenado de formularios médicos y la documentación de consultas.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            padding: '10px 20px',
            fontSize: '1.2rem',
            fontWeight: '600',
          }}
        >
          Comienza Ahora
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
