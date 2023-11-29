import { useState, useRef } from 'react';
import { QRCode } from 'react-qr-code';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Sidemenu from '../components/Sidemenu';

const GenerarQrPage = () => {
  const qrCodeRef = useRef(null);

  const [qr, setQr] = useState({
    glosa: '',
    moneda: '',
    monto: '',
  });
  const [qrData, setQrData] = useState({});

  const handleDownload = () => {
    console.log(qrCodeRef.current);
    const canvas = qrCodeRef.current.querySelector('canvas');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'QRCode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const data = {
      expirationDate: date,
      singleUser: true,
      additionalData: qr.glosa,
      destinationAccount: 1,
      amount: qr.monto,
      currency: qr.moneda,
    };
    console.log(data);
    setQrData({ ...data });
  };

  const handleInputChange = (e) => {
    setQrData('');
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setQr((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box width="100%" height="100vh" display="flex" flexDirection="row">
      <Sidemenu />
      <Box
        width="100%"
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        gap="1rem"
        padding="1rem"
      >
        <Typography variant="h2">Generar QR</Typography>
        <Box display="flex" flexDirection="row" gap="1rem">
          <TextField
            label="Glosa"
            variant="outlined"
            name="glosa"
            value={qr.glosa}
            onChange={handleInputChange}
          />
          <TextField
            label="Moneda"
            variant="outlined"
            name="moneda"
            type="moneda"
            value={qr.moneda}
            onChange={handleInputChange}
          />
          <TextField
            label="Monto"
            variant="outlined"
            name="monto"
            type="number"
            value={qr.monto}
            onChange={handleInputChange}
          />
        </Box>
        <Box>
          <Button variant="contained" color="error">
            Cancelar
          </Button>
          <Button variant="contained" type="submit">
            Generar QR
          </Button>
        </Box>

        {qrData.additionalData && (
          <QRCode value={JSON.stringify(qrData)} ref={qrCodeRef} />
        )}

        {qrData.additionalData && (
          <Box>
            <Button
              variant="contained"
              color="success"
              onClick={handleDownload}
            >
              Descargar
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default GenerarQrPage;
