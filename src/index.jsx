import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/App/index';
import { GlobalStyle } from './styles/global.js';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes/theme.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
);
