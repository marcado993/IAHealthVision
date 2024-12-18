import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#333', color: '#fff', padding: 3 }}>
      <Container>
        <Typography variant="body1" align="center">
          © 2024 Transcripto. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
