import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

export default function App() {
  return (
    <Router>
      <Routes />

      <GlobalStyle />
    </Router>
  );
}
