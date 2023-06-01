import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../mock/tables";
import { TCoupons } from "../interfaces/Itable";

type InitialState = {
  discount: TCoupons[];
};

const initialState: InitialState = {
  discount: data.coupons.body,
};

const discountSlice = createSlice({
  name: "discount",
  initialState,
  reducers: {
    removeDiscount: (state, action: PayloadAction<any>) => {
      state.discount = state.discount.filter(
        (discount) => discount.ID != action.payload
      );
    },
  },
});

export default discountSlice.reducer;
export const { removeDiscount } = discountSlice.actions;
