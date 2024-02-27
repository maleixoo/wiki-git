import React from 'react';
import ReactDOM from 'react-dom/client';
import Wiki from './pages/App';
import GlobalStyles from './styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Wiki />
  </React.StrictMode>
);
