import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../mock/tables";
import { IProductsTable } from "../interfaces/Itable";

type InitialState = {
  products: IProductsTable[];
};

const initialState: InitialState = {
  products: data.products,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    removeProduct: (state, action: PayloadAction<any>) => {
      state.products = state.products.filter(
        (product) => product.ID != action.payload
      );
    },
  },
});

export default productsSlice.reducer;
export const { removeProduct } = productsSlice.actions;
