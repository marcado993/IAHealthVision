import React from 'react';
import { Box, Typography, Container, Grid, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box
      id='footerLand'
      sx={{
        backgroundColor: '#0D0F2C', // Fondo negro
        color: '#fff', // Texto blanco
        padding: '40px 0',
        marginTop: 'auto', // Para que quede al final de la página
      }}
    >
      <Container>
        <Grid container spacing={4}>
          {/* Columna 1: Información de contacto */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
              Información de Contacto
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '8px' }}>
              Teléfono: +1 800-123-4567
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '8px' }}>
              Email: contacto@transcripto.com
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '8px' }}>
              Dirección: Calle Ficticia 123, Ciudad Imaginaria, País
            </Typography>
          </Grid>

          {/* Columna 2: Enlaces rápidos */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
              Enlaces Rápidos
            </Typography>
            <Box>
              <Link href="#hero" sx={{ color: '#fff', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>
                Inicio
              </Link>
              <Link href="#features" sx={{ color: '#fff', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>
                Características
              </Link>
              <Link href="#contact" sx={{ color: '#fff', textDecoration: 'none', display: 'block', marginBottom: '8px' }}>
                Contacto
              </Link>
            </Box>
          </Grid>

          {/* Columna 3: Redes sociales */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
              Síguenos
            </Typography>
            <Box>
              <IconButton
                color="inherit"
                href="https://facebook.com"
                target="_blank"
                sx={{ marginRight: '10px' }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://twitter.com"
                target="_blank"
                sx={{ marginRight: '10px' }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://instagram.com"
                target="_blank"
                sx={{ marginRight: '10px' }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://linkedin.com"
                target="_blank"
                sx={{ marginRight: '10px' }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Derechos de autor */}
        <Box sx={{ textAlign: 'center', marginTop: '30px' }}>
          <Typography variant="body2" sx={{ color: '#ccc' }}>
            &copy; {new Date().getFullYear()} Transcripto. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
