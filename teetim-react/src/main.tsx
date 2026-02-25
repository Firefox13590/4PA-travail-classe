import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Appli from './components/Appli.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Appli />
  </StrictMode>,
)
