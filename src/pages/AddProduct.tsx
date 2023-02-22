import React from 'react';
import { useTranslation } from "react-i18next";
import Product from '../components/addProduct/Product';
import useTitle from '../helper/useTitle';


const AddProduct = () => {
    const { t } = useTranslation();
    useTitle(t("addproduct"))


    return (
        <>
            <Product />
        </>
    );
};

export default AddProduct;