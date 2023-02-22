import React from 'react';
import Editors from '../editor/Editors';
import Input from '../UI/input/Input';
import classes from "./Product.module.scss";


const Product = () => {
    return (
        <div>
            <div>
                <label htmlFor="product-title" className={classes.title}>عنوان محصول</label>
                <input id="product-title" type='text' className={classes.input_title} />
            </div>
            <Editors />
        </div>
    );
};

export default Product;