import { Outlet } from 'react-router-dom';

import Box from '@mui/material/Box';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Box component="main" minHeight="100%">
        <Outlet />
      </Box>
    </>
  );
};

export default MainLayout;
