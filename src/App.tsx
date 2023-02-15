import React, { Suspense } from 'react';
import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import NotFound from './pages/NotFound';


const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Customers = React.lazy(() => import("./pages/Customers"));
const CustomerEdit = React.lazy(() => import("./pages/CustomerEdit"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductEdit = React.lazy(() => import("./pages/ProductEdit"));
const Transactions = React.lazy(() => import("./pages/Transactions"));


function App() {


  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/:customerId" element={<CustomerEdit />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductEdit />} />
          <Route path="/transactions" element={<Transactions />} />
          </Route>
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
