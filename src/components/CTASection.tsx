import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { keyframes } from '@mui/system';

// Animación para el botón
const hoverAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const CTASection: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        background: 'linear-gradient(135deg, #424242, #212121)', // Degradado en tonos grises oscuros
        color: '#fff',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          sx={{
            marginBottom: 3,
            fontWeight: 'bold',
            fontSize: '2.5rem',
            letterSpacing: '1.5px',
            lineHeight: 1.2,
          }}
        >
          ¿Listo para comenzar tu viaje?
        </Typography>
        <Typography
          variant="h6"
          sx={{
            marginBottom: 4,
            fontWeight: 300,
            fontSize: '1.25rem',
            opacity: 0.8,
          }}
        >
          Únete a nosotros y empieza a disfrutar de todos los beneficios.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            padding: '15px 40px',
            fontSize: '1rem',
            fontWeight: '600',
            borderRadius: '30px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.4)',
            backgroundColor: '#616161', // Un gris oscuro para el fondo del botón
            '&:hover': {
              backgroundColor: '#757575', // Gris más claro al pasar el cursor
              animation: `${hoverAnimation} 0.3s ease-in-out`,
            },
          }}
        >
          Regístrate Ahora
        </Button>
      </Container>
    </Box>
  );
};

export default CTASection;
