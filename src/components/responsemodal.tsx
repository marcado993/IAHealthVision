import React from 'react';
import { Box, Modal, Typography, Button } from '@mui/material';

interface ResponseModalProps {
  open: boolean;
  onClose: () => void;
  transcription: string | null;
  formData: any | null;
}

const ResponseModal: React.FC<ResponseModalProps> = ({ open, onClose, transcription, formData }) => {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="response-modal">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: 500,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography id="response-modal" variant="h6" gutterBottom>
          Resultado de la Transcripción
        </Typography>
        {transcription && (
          <>
            <Typography variant="subtitle1">Transcripción:</Typography>
            <Typography variant="body1">{transcription}</Typography>
          </>
        )}
        {formData && (
          <>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Datos del Formulario:
            </Typography>
            <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(formData, null, 2)}</pre>
          </>
        )}
        <Button
          onClick={onClose}
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Cerrar
        </Button>
      </Box>
    </Modal>
  );
};

export default ResponseModal;
