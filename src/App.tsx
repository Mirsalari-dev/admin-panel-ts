import React, { Suspense, useEffect } from 'react';
import "./scss/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import NotFound from './pages/notFound';
import NProgress from 'nprogress';



const Dashboard = React.lazy(() => import("./pages/dashboard"));
const Customers = React.lazy(() => import("./pages/customers"));
const CustomerEdit = React.lazy(() => import("./pages/customerEdit"));
const Products = React.lazy(() => import("./pages/products"));
const ProductEdit = React.lazy(() => import("./pages/productEdit"));
const Transactions = React.lazy(() => import("./pages/transactions"));
const Coupons = React.lazy(() => import("./pages/coupons"));
const CouponsEdit = React.lazy(() => import("./pages/couponsEdit"));
const CreateCoupons = React.lazy(() => import("./pages/createCoupons"));
const Comments = React.lazy(() => import("./pages/comments"));
const CommentsEdit = React.lazy(() => import("./pages/commentsEdit"));
const AddProduct = React.lazy(() => import("./pages/addProduct"));



function App() {

  const LazyLoad:any = () => {
    useEffect(() => {
        NProgress.start();

        return () => {
            NProgress.done();
        };
    });

    return '';
};

  return (
    <BrowserRouter>
      <Suspense fallback={<LazyLoad />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/:customerId" element={<CustomerEdit />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductEdit />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/discount" element={<Coupons />} />
            <Route path="/discount/:couponsCode" element={<CouponsEdit />} />
            <Route path="/discount/createCoupons" element={<CreateCoupons />} />
            <Route path="/comments" element={<Comments />} />
            <Route path="/comments/:commentsId" element={<CommentsEdit />} />
            <Route path="/addproduct" element={<AddProduct />} />

          </Route>
          <Route path="*" element={<NotFound />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
