import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SidebarContextProvider } from './context/sidebarContext';
import { ThemeContextProvider } from './context/themeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>

      <SidebarContextProvider>
        <App />
      </SidebarContextProvider>
    </ThemeContextProvider>

  </React.StrictMode>
);
