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
    updateProduct: (state, action: PayloadAction<any>) => {
      let updated = [...state.products];
      const updatedItemIndex = updated.findIndex(
        (item) => item.ID === action.payload.id
      );
      if (updatedItemIndex < 0) {
        updated = [...state.products];
      } else {
        let updatedItem = { ...updated[updatedItemIndex] };
        updatedItem.category = action.payload.category;
        updatedItem.inventory = action.payload.inventory;
        updatedItem.price = action.payload.price;
        updatedItem.product = action.payload.product;
        updatedItem.pic = action.payload.pic;

        updated[updatedItemIndex] = updatedItem;
      }
      return {
        ...state,
        products: updated,
      };
    },
    addProduct: (state, action: PayloadAction<any>) => {
      state.products.push(action.payload);
    },
  },
});

export default productsSlice.reducer;
export const { removeProduct,updateProduct,addProduct } = productsSlice.actions;
