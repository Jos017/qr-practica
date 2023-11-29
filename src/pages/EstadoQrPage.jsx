import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Sidemenu from '../components/Sidemenu';

const EstadoQrPage = () => {
  return (
    <Box width="100%" height="100vh" display="flex" flexDirection="row">
      <Sidemenu />
      <Box width="100%">
        <Typography>Estado QR</Typography>
      </Box>
    </Box>
  );
};

export default EstadoQrPage;
