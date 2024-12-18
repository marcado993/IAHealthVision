import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Definir el tema con la fuente personalizada
const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif', // Fuente personalizada
  },
  palette: {
    primary: {
      main: '#2A527A', // Color primario
    },
  },
});

const Topbar: React.FC = () => {
  return (
    <ThemeProvider theme={theme}> {/* Aplicar el tema a la AppBar */}
      <AppBar
        position="static"
        sx={{
          width: '100%', // Asegura que ocupe todo el ancho
          backgroundColor: '#171717', // Color atractivo para el fondo
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Sombra sutil para resaltar
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Imagen o Logo a la izquierda */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src='/Healt__1_-removebg-preview.png' // Reemplaza con la URL de tu imagen
              alt="Logo"
              style={{ width: 60, height: 60, marginRight: 10 }} // Estilos de la imagen
            />
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: '"Poppins", sans-serif', // Fuente personalizada
                fontWeight: 'normal', // Normal para "Healt"
                letterSpacing: '0.10px', // Espaciado de letras para un toque moderno
              }}
            >
              Health 
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontFamily: '"Poppins", sans-serif', // Fuente personalizada
                fontWeight: 'bold', // Bold para "Care"
                letterSpacing: '0.10px', // Espaciado de letras para un toque moderno
              }}
            >
             Vision
            </Typography>
          </Box>
          
          {/* Nombre y Imagen de perfil a la derecha */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="body1"
              sx={{
                color: 'white', // Color del texto
                marginRight: 1, // Espacio entre el nombre y la imagen
              }}
            >
              John Doe {/* Nombre de usuario o cualquier texto */}
            </Typography>
            <IconButton>
              <img
                src='/png-transparent-man-s-face-avatar-computer-icons-user-profile-business-user-avatar-blue-face-heroes-thumbnail.png' // Asegúrate de que sea el path correcto
                alt="Perfil"
                style={{
                  width: 40, // Tamaño de la imagen
                  height: 40,
                  borderRadius: '50%', // Redondea la imagen
                  border: '2px solid white', // Borde blanco para destacarla
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Topbar;
