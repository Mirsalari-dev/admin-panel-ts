import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SidebarContextProvider } from './context/sidebarContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SidebarContextProvider>
      <App />
    </SidebarContextProvider>
  </React.StrictMode>
);
