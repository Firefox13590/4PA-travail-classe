import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Appli from './components/Appli.tsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Appli />
    </BrowserRouter>
  </StrictMode>,
)
