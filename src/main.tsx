import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';
import { reportWebVitals } from './utils/performance';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);

// Report web vitals in production
if (process.env.NODE_ENV === 'production') {
  reportWebVitals((metric) => {
    // Send to analytics service
    console.log(metric);
  });
}
