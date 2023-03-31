import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import ContactManager from './components/ContactManager';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContactManager />
  </React.StrictMode>
);