import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'

const container = document.getElementById('root');
const rootElement = (
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
);

// Mute expected hydration errors caused by responsive window.innerWidth checks
const originalConsoleError = console.error;
console.error = (...args) => {
  const msg = typeof args[0] === 'string' ? args[0] : '';
  if (
    msg.includes('Hydration failed') ||
    msg.includes('error #418') ||
    msg.includes('error #423') ||
    msg.includes('There was an error while hydrating')
  ) {
    return; // Ignore these specific errors
  }
  originalConsoleError.apply(console, args);
};

if (container.hasChildNodes()) {
  hydrateRoot(container, rootElement, {
    onRecoverableError: (error) => {
      if (error.message && (error.message.includes('Hydration failed') || error.message.includes('418') || error.message.includes('423'))) return;
      originalConsoleError(error);
    }
  });
} else {
  createRoot(container).render(rootElement);
}
