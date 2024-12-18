import React from 'react';
import { Box, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landingPage'; // Importa LandingPage
import LoginPage from './components/loginPage'; // Importa LoginPage
import AreaWork from './components/areaPage';

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Ruta para la Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Ruta para el Login Page */}
          <Route path="/login" element={<LoginPage />} />

          {/* Ruta para la app principal */}
          <Route path="/home" element={<AreaWork />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
