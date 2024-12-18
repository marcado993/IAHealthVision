import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { keyframes } from '@mui/system';
import { useNavigate } from 'react-router-dom'; // Importar hook de redirección

// Animación para el botón
const hoverAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const CTASection: React.FC = () => {
  const navigate = useNavigate(); // Hook para navegar

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        background: 'linear-gradient(135deg, #4c6046, #62836f)', // Degradado en tonos grises oscuros
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
          ¿Listo para utilizar la IA en tu día a día?
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
          Únete a nosotros y empieza a atender mas rápido tus pacientes.
        </Typography>
        
        {/* Botón de redirección a login */}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate('/login')} // Redirección a /login
          sx={{
            fontFamily: '"Roboto", sans-serif',
            fontWeight: '600',
            marginTop: 2, // Un poco de espacio entre los botones
            padding: '10px 30px',
            borderRadius: '30px',
            backgroundColor: '#757575', // Gris claro para el fondo del botón
            '&:hover': {
              backgroundColor: '#9e9e9e', // Gris aún más claro al pasar el cursor
            },
          }}
        >
          Registrar
        </Button>
      </Container>
    </Box>
  );
};

export default CTASection;
