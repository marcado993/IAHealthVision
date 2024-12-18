import React, { useState } from 'react';

const AudioUploadTest: React.FC = () => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false); // Para mostrar el estado de carga

  // Maneja el cambio de archivo
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setAudioFile(event.target.files[0]);
    }
  };

  // Enviar el archivo de audio al servidor
  const handleUpload = async () => {
    if (!audioFile) {
      console.log('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', audioFile);

    setLoading(true); // Activamos el estado de carga

    try {
      const res = await fetch('http://26.143.63.250:5002/process_audio?file', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json().catch((error) => {
        console.error('Error parsing JSON:', error);
        return null;
      });

      if (result) {
        setResponse(result); // Guardamos la respuesta del servidor en el estado
      }
    } catch (error) {
      console.error('Error uploading the file:', error);
    } finally {
      setLoading(false); // Desactivamos el estado de carga después de la respuesta
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Upload Audio File</h1>
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        style={{ marginBottom: '20px' }}
      />
      <br />
      <button
        onClick={handleUpload}
        disabled={loading}
        style={{
          padding: '10px 20px',
          backgroundColor: loading ? '#ddd' : '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Uploading...' : 'Upload Audio'}
      </button>

      <div style={{ marginTop: '20px' }}>
        {response && (
          <div>
            <h2>Server Response:</h2>
            <textarea
              value={response ? JSON.stringify(response, null, 2) : ''}
              readOnly
              style={{
                width: '100%',
                height: '200px',
                marginTop: '10px',
                padding: '10px',
                fontFamily: 'monospace',
                fontSize: '14px',
                borderRadius: '5px',
                borderColor: '#ddd',
                backgroundColor: '#f9f9f9',
                overflowY: 'scroll', // Para hacer scroll si la respuesta es muy larga
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AudioUploadTest;
