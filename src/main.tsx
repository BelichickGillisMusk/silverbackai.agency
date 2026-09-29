import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import BlueCollarHome from './BlueCollarHome.tsx';
import DocumentSeo from './components/DocumentSeo.tsx';
import SilverbackFront from './SilverbackFront.tsx';
import ContactPage from './pages/ContactPage.tsx';
import LegalPage from './pages/LegalPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import ProofPage from './pages/ProofPage.tsx';
import ServicesPage from './pages/ServicesPage.tsx';
import SoftOpenPage from './pages/SoftOpenPage.tsx';
import { type PageId } from './config/site.ts';
import { resolvePage } from './lib/router.ts';
import './index.css';

const search = window.location.search;
const path = window.location.pathname.replace(/\/+$/, '') || '/';
const page = resolvePage(path, search);

function renderPage(pageId: PageId) {
  switch (pageId) {
    case 'home':
      return <SilverbackFront page="home" />;
    case 'counsel':
      return <SilverbackFront page="counsel" />;
    case 'compliant':
      return <SilverbackFront page="compliant" />;
    case 'blue-collar':
      return <BlueCollarHome />;
    case 'services':
      return <ServicesPage />;
    case 'proof':
      return <ProofPage />;
    case 'contact':
      return <ContactPage />;
    case 'privacy':
      return <LegalPage kind="privacy" />;
    case 'terms':
      return <LegalPage kind="terms" />;
    case 'soft-open':
      return <SoftOpenPage />;
    case 'legacy':
      return <App />;
    case 'not-found':
      return <NotFoundPage />;
    default: {
      const unreachable: never = pageId;
      return unreachable;
    }
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DocumentSeo pathname={path} search={search} />
    {renderPage(page)}
  </StrictMode>,
);
