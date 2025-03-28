import React from 'react';
import ReactDOM from 'react-dom/client';  // Se estiver usando React 18 ou superior
import App from './views/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
