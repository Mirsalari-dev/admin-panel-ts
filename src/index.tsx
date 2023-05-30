import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LangContextProvider } from "./context/langContext";
import { SearchContextProvider } from "./context/searchTerm";
import { SidebarContextProvider } from "./context/sidebarContext";
import { ThemeContextProvider } from "./context/themeContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <LangContextProvider>
      <ThemeContextProvider>
        <SidebarContextProvider>
          <SearchContextProvider>
            <Provider store={store}>
              <PersistGate persistor={persistor} loading={null}>
                <App />
              </PersistGate>
            </Provider>
          </SearchContextProvider>
        </SidebarContextProvider>
      </ThemeContextProvider>
    </LangContextProvider>
  </React.StrictMode>
);
