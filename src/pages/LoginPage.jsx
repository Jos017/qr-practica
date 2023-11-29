import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const LoginPage = () => {
  const { isAuth, authenticate } = useAuth();

  const [error, setError] = useState('');
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
    try {
      await authenticate(credentials.email, credentials.password);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInputChange = (e) => {
    setError('');
    console.log(credentials);
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  if (isAuth) {
    return <Navigate to="/consolidado" />;
  }

  return (
    <Container
      maxWidth="lg"
      sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}
    >
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: '300px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '2rem',
        }}
      >
        <Typography variant="h3">Bienvenido</Typography>
        <Typography variant="body1">Ingresa al banco de Alasitas</Typography>
        <TextField
          label="Usuario"
          variant="outlined"
          name="email"
          type="email"
          value={credentials.email}
          onChange={handleInputChange}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleInputChange}
        />
        <Button type="submit" variant="contained">
          Ingresa
        </Button>
        <Typography variant="body2">
          Olvidate tu contraseña o tu usuario? Contactanos
        </Typography>
        {error && <Typography sx={{ color: 'red' }}>{error}</Typography>}
        <Button type="button" variant="contained" color="success">
          Contactanos
        </Button>
      </Paper>
    </Container>
  );
};

export default LoginPage;
