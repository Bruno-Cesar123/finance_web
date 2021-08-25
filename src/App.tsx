import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import Routes from './routes';

import { AuthProvider } from './hooks/AuthContext';

import GlobalStyle from './styles/global';

export default function App() {
  return (
    <ToastProvider>
      <Router>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Router>
      <GlobalStyle />
    </ToastProvider>
  );
}
