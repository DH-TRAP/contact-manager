import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import AddContact from './components/AddContact/AddContact';
import DisplayContact from './components/DisplayContact/DisplayContact';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <AddContact />
    <DisplayContact />
  </React.StrictMode>
);