import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import BlueCollarHome from './BlueCollarHome.tsx';
import SilverbackFront from './SilverbackFront.tsx';
import './index.css';

const params = new URLSearchParams(window.location.search);
const path = window.location.pathname.replace(/\/+$/, '') || '/';

const showLegacyApp =
  params.has('appParams') ||
  params.get('app') === '1' ||
  path.startsWith('/app') ||
  path === '/resources' ||
  path === '/legacy';

let page;
if (showLegacyApp) {
  page = <App />;
} else if (path === '/blue-collar') {
  page = <BlueCollarHome />;
} else if (path === '/counsel') {
  page = <SilverbackFront page="counsel" />;
} else if (path === '/compliant') {
  page = <SilverbackFront page="compliant" />;
} else {
  page = <SilverbackFront page="home" />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {page}
  </StrictMode>,
);
