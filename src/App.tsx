import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import Routes from './routes';

import AuthContext from './context/AuthContext';

import GlobalStyle from './styles/global';

export default function App() {
  return (
    <ToastProvider>
      <Router>
        <AuthContext.Provider value={{ name: 'Bruno' }}>
          <Routes />
        </AuthContext.Provider>
      </Router>
      <GlobalStyle />
    </ToastProvider>
  );
}
