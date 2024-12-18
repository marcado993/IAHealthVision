import React from 'react';
import { Box, Typography, Button, TextField, Grid, Paper } from '@mui/material';
import * as XLSX from 'xlsx';

// Enhanced and more specific type definitions
interface MedicalFormField {
  label: string;
  value: string;
}

interface PatientData {
  result: string[];
}

interface TranscriptionData {
  text: string;
}

interface ResponseHandlerProps {
  transcription: TranscriptionData | null;
  formData: PatientData | null;
  onClose: () => void;
}

const ResponseHandler: React.FC<ResponseHandlerProps> = ({ 
  transcription, 
  formData, 
  onClose 
}) => {
  // Define form fields with more structured approach
  const formFields: MedicalFormField[] = [
    { label: "Nombre", value: "" },
    { label: "Sexo", value: "" },
    { label: "Edad", value: "" },
    { label: "Motivo de la consulta", value: "" },
    { label: "Problema Actual", value: "" },
    { label: "Antecedentes Personales", value: "" },
    { label: "Antecedentes Familiares", value: "" },
    { label: "Vacunación", value: "" },
    { label: "Diagnóstico", value: "" },
    { label: "Observaciones", value: "" },
    { label: "Tratamiento", value: "" },
  ];

  // Improved data extraction with optional chaining and default values
  const formValues = formData?.result || [];

  // Type-safe Excel download function
  const handleDownloadExcel = () => {
    try {
      const excelData = formFields.map((field, index) => [
        field.label, 
        (formValues[index]?.trim() || '').toString()
      ]);

      const ws = XLSX.utils.aoa_to_sheet([['Campo', 'Valor'], ...excelData]);

      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Formulario Médico');
      XLSX.writeFile(wb, 'formulario_medico.xlsx');
    } catch (error) {
      console.error('Error downloading Excel:', error);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',  // Más ancho
        maxWidth: '1400px',  // Máximo ancho más grande
        padding: 4,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 2,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
        Formulario Médico
      </Typography>

      {transcription?.text && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Transcripción:
          </Typography>
          <TextField
            fullWidth
            multiline
            minRows={4}
            value={transcription.text}
            InputProps={{
              readOnly: true,
              sx: { fontFamily: 'monospace', fontSize: '1rem' },
            }}
            sx={{
              mt: 2,
              backgroundColor: '#f5f5f5',
              borderRadius: 2,
              maxHeight: 200,
              overflowY: 'auto',
            }}
          />
        </Box>
      )}

      {formData && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Datos del Paciente:
          </Typography>

          <Paper sx={{ p: 3, backgroundColor: '#fafafa', borderRadius: 2, boxShadow: 2 }}>
            <Grid container spacing={3}>
              {formFields.map((field, index) => (
                <Grid item xs={12} key={field.label}> {/* Cambiar xs={6} a xs={12} para que los campos se apilen */}
                  <TextField
                    fullWidth
                    multiline
                    minRows={3} // Establecer un mínimo de filas
                    maxRows={6} // Establecer un máximo de filas
                    label={field.label}
                    variant="outlined"
                    value={formValues[index]?.trim() || ''}
                    InputProps={{
                      readOnly: true,
                      sx: { backgroundColor: '#ffffff', borderRadius: 1, fontWeight: 'bold' },
                    }}
                    sx={{
                      mb: 2,
                      '& .MuiInputBase-root': {
                        backgroundColor: '#f5f5f5',
                      },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>
      )}

      <Button
        variant="contained"
        color="secondary"
        fullWidth
        sx={{ mt: 3, fontWeight: 'bold' }}
        onClick={handleDownloadExcel}
      >
        Descargar en Excel
      </Button>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2, fontWeight: 'bold' }}
        onClick={onClose}
      >
        Cerrar
      </Button>
    </Box>
  );
};

export default ResponseHandler;
