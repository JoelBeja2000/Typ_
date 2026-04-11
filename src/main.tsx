import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import '../styles/main.css'; 

console.log('OveTyp_ entry point loaded');

const rootElement = document.getElementById('root');
console.log('Root element found:', !!rootElement);
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);