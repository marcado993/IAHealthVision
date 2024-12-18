import React from 'react';
import { Box, Typography, Container, Grid, Paper, Avatar } from '@mui/material';

const TestimonialSection: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f4f4f4', padding: 5 }}>
      <Container>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4 }}>
          Opiniones de nuestros usuarios
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Testimonio 1 */}
          <Grid item xs={12} sm={4}>
            <Paper
              sx={{
                padding: 3,
                textAlign: 'center',
                borderRadius: '16px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Avatar
                alt="Juan Pérez"
                src="https://randomuser.me/api/portraits/men/45.jpg" // Puedes reemplazar esta URL por una imagen real
                sx={{ width: 80, height: 80, margin: '0 auto 15px' }}
              />
              <Typography variant="h6" sx={{ fontStyle: 'italic', marginBottom: 2 }}>
                "¡Una herramienta increíble! Transcribí horas de grabaciones en minutos."
              </Typography>
              <Typography>- Juan Pérez</Typography>
            </Paper>
          </Grid>

          {/* Testimonio 2 */}
          <Grid item xs={12} sm={4}>
            <Paper
              sx={{
                padding: 3,
                textAlign: 'center',
                borderRadius: '16px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Avatar
                alt="Ana Gómez"
                src="https://randomuser.me/api/portraits/women/75.jpg" // Puedes reemplazar esta URL por una imagen real
                sx={{ width: 80, height: 80, margin: '0 auto 15px' }}
              />
              <Typography variant="h6" sx={{ fontStyle: 'italic', marginBottom: 2 }}>
                "La mejor opción para ahorrar tiempo y esfuerzo en el trabajo."
              </Typography>
              <Typography>- Ana Gómez</Typography>
            </Paper>
          </Grid>

          {/* Testimonio 3 */}
          <Grid item xs={12} sm={4}>
            <Paper
              sx={{
                padding: 3,
                textAlign: 'center',
                borderRadius: '16px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Avatar
                alt="Carlos López"
                src="https://randomuser.me/api/portraits/men/65.jpg" // Puedes reemplazar esta URL por una imagen real
                sx={{ width: 80, height: 80, margin: '0 auto 15px' }}
              />
              <Typography variant="h6" sx={{ fontStyle: 'italic', marginBottom: 2 }}>
                "Una transcripción precisa y rápida. ¡No puedo vivir sin ella!"
              </Typography>
              <Typography>- Carlos López</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
