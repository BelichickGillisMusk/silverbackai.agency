import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import BlueCollarHome from './BlueCollarHome.tsx';
import './index.css';

const params = new URLSearchParams(window.location.search);
const showLegacyApp = params.has('appParams') || params.get('app') === '1' || window.location.pathname.startsWith('/app');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {showLegacyApp ? <App /> : <BlueCollarHome />}
  </StrictMode>,
);
