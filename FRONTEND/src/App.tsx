import React from 'react';
import { Box, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Sidebar from './components/sidebar';
import RecordArea from './components/recordArea';
import PreviewArea from './components/previewArea';
import Topbar from './components/topbar';

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',  // Aquí se aplica la fuente Poppins
  },
  palette: {
    primary: {
      main: '#1976d2', // Color principal
    },
    secondary: {
      main: '#dc004e', // Color secundario
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>  {/* Aplicar el tema a toda la app */}
      <CssBaseline />  {/* Reseteo de CSS para que las fuentes se apliquen correctamente */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          background: '#ececec',
        }}
      >
        {/* Topbar */}
        <Topbar />
        <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          {/* Sidebar */}
          <Sidebar />
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'row',
              gap: 3,  // Añadir separación entre la caja central y la derecha
              padding: 2,
              overflow: 'hidden',
            }}
          >
            {/* Record Area */}
            <RecordArea />
            {/* Preview Area */}
            <PreviewArea />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
