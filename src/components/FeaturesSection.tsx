import React from 'react';
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion'; // Importamos framer-motion
import { Speed, AutoGraph, AccessTime } from '@mui/icons-material'; // Importamos iconos

const FeaturesSection: React.FC = () => {
  return (
    <Box id= 'FeaturesSection'sx={{ padding: 5, backgroundColor: '#e7e2e2' }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          marginBottom: 4,
          fontWeight: 600,
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        Características Destacadas
      </Typography>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        <Grid item xs={12} sm={4}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card
              sx={{
                textAlign: 'center',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                backgroundColor: '#fff',
                padding: 3,
                height: '350px', // Altura fija para todas las tarjetas
              }}
            >
              <CardContent>
                <Speed sx={{ fontSize: 50, color: '#1976d2' }} />
                <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 600 }}>
                Transcripción Automática de Audio a Texto
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                El sistema procesa la transcripción y extrae información relevante, como síntomas, antecedentes y diagnósticos, para llenar automáticamente los formularios médicos.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} sm={4}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card
              sx={{
                textAlign: 'center',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                backgroundColor: '#fff',
                padding: 3,
                height: '350px', // Altura fija para todas las tarjetas
              }}
            >
              <CardContent>
                <AutoGraph sx={{ fontSize: 50, color: '#1976d2' }} />
                <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 600 }}>
                  Inteligencia Artificial
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                Utiliza tecnología avanzada de reconocimiento de voz para transcribir automáticamente las conversaciones entre el médico y el paciente, convirtiendo el audio en texto en tiempo real.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        <Grid item xs={12} sm={4}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card
              sx={{
                textAlign: 'center',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                borderRadius: '10px',
                backgroundColor: '#fff',
                padding: 3,
                height: '350px', // Altura fija para todas las tarjetas
              }}
            >
              <CardContent>
                <AccessTime sx={{ fontSize: 50, color: '#1976d2' }} />
                <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 600 }}>
                Generación de Diagnósticos y Reportes Personalizados:
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>
                Los profesionales pueden revisar, ajustar y validar las sugerencias, mejorando la precisión y reduciendo el margen de error.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturesSection;
