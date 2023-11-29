import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const LIST_VALUES = [
  'Mis productos',
  'Transacciones',
  'Pagar',
  'Solicitar',
  'Gestionar',
  'Consultar',
  'Administrar',
];

const Sidemenu = () => {
  return (
    <List
      sx={{ width: '100%', height: '100vh', maxWidth: 360, bgcolor: '#eee' }}
      component="nav"
    >
      {LIST_VALUES.map((item, index) => (
        <ListItemButton key={index}>
          <ListItemText primary={item} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default Sidemenu;
