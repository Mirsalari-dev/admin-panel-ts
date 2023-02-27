import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LangContextProvider } from './context/langContext';
import { SearchContextProvider } from './context/searchTerm';
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
          <SearchContextProvider>
            <App />

          </SearchContextProvider>
        </SidebarContextProvider>
      </ThemeContextProvider>
    </LangContextProvider>

  </React.StrictMode>
);
