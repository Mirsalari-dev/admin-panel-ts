import React, { Suspense } from 'react';
import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<MainLayout />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
