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
      // Los valores de los campos estarán en la primera fila
      const excelData = formFields.map((field, index) => [
        (formValues[index]?.trim() || '').toString() // los valores en la primera fila
      ]);

      // Crear la hoja de trabajo con los datos, los valores estarán en la primera fila
      const ws = XLSX.utils.aoa_to_sheet([ // Los valores en la primera fila
        ...excelData
      ]);

      // Crear el libro de trabajo y añadir la hoja
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Formulario Médico');

      // Descargar el archivo Excel
      XLSX.writeFile(wb, 'formulario_medico.xlsx');
    } catch (error) {
      console.error('Error descargando el Excel:', error);
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
            rows={4}
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
              overflowY: 'auto', // Permite desplazarse si el texto es muy largo
              wordWrap: 'break-word', // Rompe palabras largas para ajustarse
              whiteSpace: 'pre-wrap', // Mantiene los saltos de línea
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
                <Grid item xs={12} key={field.label}> 
                  <TextField
                    fullWidth
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
