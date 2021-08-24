import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import Routes from './routes';

import GlobalStyle from './styles/global';

export default function App() {
  return (
    <Router>
      <ToastProvider>
        <Routes />

        <GlobalStyle />
      </ToastProvider>
    </Router>
  );
}
