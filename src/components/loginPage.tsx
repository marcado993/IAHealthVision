import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  TextField, 
  Fade, 
  Grid, 
  Divider,
  useMediaQuery,
  Theme
} from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

interface AuthFormProps {
  isLoginForm: boolean;
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLoginForm, email, password, setEmail, setPassword, handleSubmit }) => (
  <form onSubmit={handleSubmit} noValidate>
    <TextField
      label="Correo electrónico"
      type="email"
      fullWidth
      variant="filled"
      inputProps={{ style: { color: '#000' } }}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      sx={{
        mb: 2,
        borderRadius: 2,
        input: { color: '#000' },
        backgroundColor: '#fff',
      }}
    />
    <TextField
      label="Contraseña"
      type="password"
      fullWidth
      variant="filled"
      inputProps={{ style: { color: '#000' } }}
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      sx={{
        mb: 2,
        borderRadius: 2,
        input: { color: '#000' },
        backgroundColor: '#fff',
      }}
    />
    <Button
      variant="contained"
      color="primary"
      fullWidth
      type="submit"
      sx={{
        mt: 2,
        py: 1.5,
        fontWeight: 'bold',
        background: 'linear-gradient(45deg, #1db954, #1db9d4)',
        borderRadius: 2,
      }}
    >
      {isLoginForm ? 'Iniciar sesión' : 'Crear cuenta'}
    </Button>
  </form>
);

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const navigate = useNavigate(); // Inicializar useNavigate

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verificar el correo electrónico y la contraseña
    if (email === 'tester12@gmail.com' && password === '12345678') {
      // Si son correctos, redirigir a la página deseada
      navigate('/home'); // Aquí puedes cambiar '/home' por la ruta que desees
    } else {
      alert('Correo electrónico o contraseña incorrectos');
    }
  };

  // Función para manejar errores de carga de imagen
  const handleImageError = (e: React.SyntheticEvent<HTMLDivElement, Event>) => {
    const target = e.target as HTMLDivElement;
    target.style.backgroundImage = 'linear-gradient(135deg, #1db954, #1db9d4)';
  };

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundImage: 'url(/peakpx.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: { xs: '95%', md: '80%' },
          height: { xs: '95%', md: '80%' },
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: 4,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden',
          backgroundImage: 'url(/Avances-tecnologicos-en-la-medicina-v001.jpg)'
        }}
      >
        <Grid container spacing={0} sx={{ width: '100%', height: '100%' }}>
          {/* Formulario */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderRadius: { xs: 0, md: '4px 0 0 4px' },
              padding: 3,
            }}
          >
            <Container maxWidth="xs">
              <Typography variant="h4" sx={{ mb: 3, fontWeight: 700, color: '#333' }}>
                {isLogin ? 'Iniciar sesión' : 'Crear cuenta'}
              </Typography>

              <Fade in={true} timeout={600}>
                <Box width="100%">
                  <AuthForm
                    isLoginForm={isLogin}
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                  />
                </Box>
              </Fade>

              <Button
                variant="text"
                fullWidth
                sx={{ mt: 2, color: '#333' }}
                onClick={() => setIsLogin((prev) => !prev)}
              >
                {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
              </Button>
            </Container>
          </Grid>

          {/* Solo mostrar la imagen en pantallas medianas y grandes */}
          {!isSmallScreen && (
            <>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  borderColor: 'rgba(0, 0, 0, 0.2)',
                  height: '100%',
                }}
              />

              <Grid
                item
                md={6}
                sx={{
                  backgroundImage: 'url(/Healt__1_-removebg-preview.png)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  borderRadius: '0 4px 4px 0',
                  backgroundColor: '#f0f0f0', // Fondo de respaldo
                  minHeight: '100%',
                }}
                onError={handleImageError} // Añadir manejador de errores
              />
            </>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default LoginPage;
