import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material'; // Importamos el ícono de descarga

const PreviewArea: React.FC = () => {
  const handleDownloadPdf = () => {
    console.log('Descargar PDF');
  };

  return (
    <Box
      sx={{
        width: '30%', // Fija el ancho relativo al contenedor padre
        height: '300px', // Ajustamos la altura para que tenga el mismo tamaño que el área de grabación
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: 3, // Aumentamos el padding para mejorar el espaciado
        backgroundColor: '#f5f5f5', // Fondo ligeramente gris
        boxShadow: 2, // Agregamos una sombra para resaltar el área
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 4, // Esto baja la caja un poco (ajusta este valor a tu gusto)
      }}
    >
      <Box>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
          Previsualización del audio
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          Aquí se mostrará la información del audio procesado.
        </Typography>
      </Box>
      
      <Button
  variant="contained"
  color="primary"
  onClick={handleDownloadPdf}
  sx={{
    alignSelf: 'center',
    marginTop: 'auto',
    borderRadius: 2, // Esquinas redondeadas
    textTransform: 'none', // Evita que el texto se transforme a mayúsculas
    paddingX: 3, // Aumentamos el padding horizontal
    backgroundColor: '#121512', // Fondo verde (puedes cambiarlo al color que desees)
    color: '#ffffff', // Color del texto (blanco en este caso)
    '&:hover': {
      backgroundColor: '#2e2e2e', // Fondo más oscuro cuando se pasa el mouse sobre el botón
    },
  }}
  startIcon={<DownloadIcon />} // Ícono de descarga
>
  Descargar Excel
</Button>

    </Box>
  );
};

export default PreviewArea;
