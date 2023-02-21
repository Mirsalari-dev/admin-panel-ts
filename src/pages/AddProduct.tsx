import React from 'react';
import { useTranslation } from "react-i18next";
import Product from '../components/addProduct/Product';


const AddProduct = () => {
    const { t } = useTranslation();

    return (
        <>
            <Product />
        </>
    );
};

export default AddProduct;