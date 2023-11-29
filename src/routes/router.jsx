import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Login</h1>,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/consolidado',
        element: <h1>Consolidado</h1>,
      },
    ],
  },
]);

export default router;
