import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Sidemenu from '../components/Sidemenu';

const ConsolidadoPage = () => {
  const navigate = useNavigate();

  return (
    <Box width="100%" height="100vh" display="flex" flexDirection="row">
      <Sidemenu />
      <Box width="100%">
        <Box display="flex" flexDirection="row" width="100%">
          <Box width="30%">
            <Typography>Bienvenido, Juan Perez</Typography>
            <Typography>Ultima visita: 31/03/22 02:00PM</Typography>
            <Typography>Nombre del equipo: Laptop</Typography>
            <Typography>Duración últmia sesión: 30 min</Typography>
          </Box>
          <Box display="flex" bgcolor="#ccc" flex={1}>
            <Typography>Banner</Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="row" gap="1rem">
          <Button variant="contained">Cajas de ahorros</Button>
          <Button variant="contained">Creditos</Button>
          <Button variant="contained">Tarjetas de Credito</Button>
          <Button variant="contained">DPFs</Button>
        </Box>
        <Box>
          <Box>
            <Typography>Caja de ahorros</Typography>
          </Box>
          <Button onClick={() => navigate('/generar-qr')}>Generar QR</Button>
          <Button onClick={() => navigate('/estado-qr')}>
            Obtener estado de qr
          </Button>
        </Box>
        <Box>
          <Typography>Ultimas transferencias</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ConsolidadoPage;
