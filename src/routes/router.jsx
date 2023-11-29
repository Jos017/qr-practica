import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import LoginPage from '../pages/LoginPage';
import MainLayout from '../layouts/MainLayout';
import ConsolidadoPage from '../pages/ConsolidadoPage';
import EstadoQrPage from '../pages/EstadoQrPage';
import GenerarQrPage from '../pages/GenerarQrPage';
import UltimasTransferenciasPage from '../pages/UltimasTransferenciasPage';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/consolidado',
            element: <ConsolidadoPage />,
          },
          {
            path: '/estado-qr',
            element: <EstadoQrPage />,
          },
          {
            path: '/generar-qr',
            element: <GenerarQrPage />,
          },
          {
            path: '/transferencias',
            element: <UltimasTransferenciasPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
