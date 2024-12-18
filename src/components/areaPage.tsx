// components/AreaWork.tsx
import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './sidebar';
import RecordArea from './recordArea';
import PreviewArea from './previewArea';
import Topbar from './topbar';
import Ap from './ap.tsx';

const AreaWork: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden', background: '#ececec' }}>
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
            gap: 3, // Añadir separación entre la caja central y la derecha
            padding: 2,
            overflow: 'hidden',
          }}
        >
          {/* Record Area */}
        </Box>
      </Box>
    </Box>
  );
};

export default AreaWork;
