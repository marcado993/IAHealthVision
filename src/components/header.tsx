import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-scroll'; // Para navegación interna
import { useNavigate } from 'react-router-dom'; // React Router para redirección externa

const Header: React.FC = () => {
  const navigate = useNavigate(); // Hook para redirigir a otras rutas

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#ffffff', boxShadow: 'none' }}>
      <Toolbar>
        <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo a la izquierda */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src="/5de5e8d6-f67a-440b-9ca3-3509f6d96e0c-removebg-preview.png" // Reemplaza con la URL de tu imagen
              alt="Logo"
              style={{ width: 60, height: 60, marginRight: 10 }} // Estilos de la imagen
            />
            <Typography 
              variant="h6" 
              sx={{
                fontWeight: '600',
                fontFamily: '"Roboto", sans-serif',
                color: '#000000',
                letterSpacing: '1px',
                textTransform: 'none',
              }}
            >
              Spoken Healt
            </Typography>
          </Box>

          {/* Menú de navegación alineado a la izquierda */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              color="inherit"
              component={Link}
              to="HeroSection"
              smooth={true}
              offset={-70}
              sx={{
                marginRight: 2,
                fontFamily: '"Roboto", sans-serif',
                fontWeight: '500',
                letterSpacing: '0.5px',
                color : '#000000',
                '&:hover': {
                  color: '#ff4081',
                },
              }}
            >
              Inicio
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="FeaturesSection"
              smooth={true}
              offset={-70}
              sx={{
                marginRight: 2,
                fontFamily: '"Roboto", sans-serif',
                fontWeight: '500',
                letterSpacing: '0.5px',
                color : '#000000',
                '&:hover': {
                  color: '#000000',
                },
              }}
            >
              Features
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="PricingSection"
              smooth={true}
              offset={-70}
              sx={{
                marginRight: 2,
                fontFamily: '"Roboto", sans-serif',
                fontWeight: '500',
                letterSpacing: '0.5px',
                color: '#000000',
                '&:hover': {
                  color: '#ff4081',
                },
              }}
            >
              Precios
            </Button>
            <Button
              color="inherit"
              component={Link}
              to="footerLand"
              smooth={true}
              offset={-70}
              sx={{
                fontFamily: '"Roboto", sans-serif',
                fontWeight: '500',
                letterSpacing: '0.5px',
                color: '#000000',
                '&:hover': {
                  color: '#000000',
                },
              }}
            >
              Contacto
            </Button>
          </Box>

          {/* Botón "Registrar" redirecciona a la página de login */}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/login')} // Redirección a /login
            sx={{
              fontFamily: '"Roboto", sans-serif',
              fontWeight: '600',
            }}
          >
            Registrar
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
