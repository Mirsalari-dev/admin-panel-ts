import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LangContextProvider } from './context/langContext';
import { SidebarContextProvider } from './context/sidebarContext';
import { ThemeContextProvider } from './context/themeContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LangContextProvider>
      <ThemeContextProvider>
        <SidebarContextProvider>
          <App />
        </SidebarContextProvider>
      </ThemeContextProvider>
    </LangContextProvider>

  </React.StrictMode>
);
