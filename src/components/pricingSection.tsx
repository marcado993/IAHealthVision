import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardActions, List, ListItem, ListItemIcon } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { keyframes } from '@mui/system';

// Animación para el icono
const bounce = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

const PricingSection: React.FC = () => {
  return (
    <Box
      id='PricingSection'
      sx={{
        backgroundColor: '#121212', // Fondo oscuro y elegante
        padding: '60px 0',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: '600',
          fontFamily: '"Roboto", sans-serif',
          marginBottom: '40px',
          fontSize: '2.5rem',
          color: '#fff', // Texto en blanco para buen contraste
        }}
      >
        Nuestros Planes
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Plan Básico */}
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', // Sombra sutil
              borderRadius: '30px',
              backgroundColor: '#ffffff', // Fondo más oscuro y sofisticado
              textAlign: 'center',
              height: '500px',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #2c2c2c', // Gris más suave para el borde
              position: 'relative',
              margin: '0 auto',
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: '500',
                    color: '#262948',
                    fontSize: '1.5rem',
                    marginRight: '10px',
                  }}
                >
                  Free
                </Typography>
                <CheckIcon
                  sx={{
                    color: '#00E676', // Color verde brillante para el icono
                    animation: `${bounce} 0.5s infinite`,
                  }}
                />
              </Box>
              <Typography variant="h6" sx={{ margin: '20px 0', fontSize: '32px', fontWeight: '600', color: '#262948' }}>
                2 consultas de diarias 
              </Typography>
              <List sx={{ padding: 0 }}>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#00ff3c' }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: '#262948' }}>
                    2 consultas gratis por diarias
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ClearIcon sx={{ color: '#FF5252' }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: '#262948' }}>
                    Soporte 24/7
                  </Typography>
                </ListItem>
              </List>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: '150px',
                  backgroundColor: '#ff4081', // Botón vibrante
                  '&:hover': {
                    backgroundColor: '#f50057', // Hover más brillante
                  },
                }}
              >
                Registrar
              </Button>
            </CardActions>
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '5px',
                backgroundColor: '#2E2E2E', // Gris oscuro en la base
                borderRadius: '0 0 30px 30px',
              }}
            />
          </Card>
        </Grid>

        {/* Plan Profesional */}
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)', // Sombra sutil
              borderRadius: '30px',
              backgroundColor: '#ffffff', // Fondo gris oscuro
              textAlign: 'center',
              height: '500px',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #444444', // Gris más suave para el borde
              position: 'relative',
              margin: '0 auto',
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: '500',
                    color: '#262948',
                    fontSize: '1.5rem',
                    marginRight: '10px',
                  }}
                >
                  Premium
                </Typography>
                <CheckIcon
                  sx={{
                    color: '#00E676',
                    animation: `${bounce} 0.5s infinite`,
                  }}
                />
              </Box>
              <Typography variant="h6" sx={{ margin: '20px 0', fontSize: '32px', fontWeight: '600', color: '#262948' }}>
                $80.00
              </Typography>
              <List sx={{ padding: 0 }}>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#00E676' }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: '#262948' }}>
                    Transcribe hasta 20 audios por mes
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#00E676' }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: '#262948' }}>
                    Soporte prioritario
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ClearIcon sx={{ color: '#FF5252' }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: '#262948' }}>
                    Acceso a funciones avanzadas
                  </Typography>
                </ListItem>
              </List>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: '150px',
                  backgroundColor: '#ff4081', // Color vibrante
                  '&:hover': {
                    backgroundColor: '#f50057', // Hover más brillante
                  },
                }}
              >
                Registrar
              </Button>
            </CardActions>
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '5px',
                backgroundColor: '#3C3C3C', // Gris suave para la base
                borderRadius: '0 0 30px 30px',
              }}
            />
          </Card>
        </Grid>

        {/* Plan Empresarial */}
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
              borderRadius: '30px',
              backgroundColor: '#ffffff', // Fondo gris más oscuro
              textAlign: 'center',
              height: '500px',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #c0bcbc',
              position: 'relative',
              margin: '0 auto',
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: '500',
                    color: '#262948',
                    fontSize: '1.5rem',
                    marginRight: '10px',
                  }}
                >
                  Liberty 
                </Typography>
                <CheckIcon
                  sx={{
                    color: '#FFD700', // Color dorado
                    animation: `${bounce} 0.5s infinite`,
                  }}
                />
              </Box>
              <Typography variant="h6" sx={{ margin: '20px 0', fontSize: '32px', fontWeight: '600', color: '#262948' }}>
                Paga por lo que consumes
              </Typography>
              <List sx={{ padding: 0 }}>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#FFD700' }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: '#262948' }}>
                    Transcribe hasta 50 audios por mes
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#FFD700' }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: '#262948' }}>
                    Acceso a funciones avanzadas
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon sx={{ color: '#FFD700' }} />
                  </ListItemIcon>
                  <Typography variant="body2" sx={{ color: '#262948' }}>
                    Soporte dedicado
                  </Typography>
                </ListItem>
              </List>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  width: '150px',
                  backgroundColor: '#ff4081', // Color vibrante
                  '&:hover': {
                    backgroundColor: '#f50057', // Hover más brillante
                  },
                }}
              >
                Registrar
              </Button>
            </CardActions>
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '5px',
                backgroundColor: '#2A2A2A', // Gris oscuro en la base
                borderRadius: '0 0 30px 30px',
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PricingSection;
