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
    addDiscount: (state, action: PayloadAction<any>) => {
      state.discount.push(action.payload);
    },
    updateDiscount: (state, action: PayloadAction<any>) => {
      let updated = [...state.discount];
      const updatedItemIndex = updated.findIndex(
        (item) => item.ID === action.payload.id
      );
      if (updatedItemIndex < 0) {
        updated = [...state.discount];
      } else {
        let updatedItem = { ...updated[updatedItemIndex] };
        updatedItem.discount = action.payload.discount;
        updatedItem.percent = action.payload.percent;
        updatedItem.status = action.payload.status;
        updatedItem.expireDate = action.payload.expireDate;
        updatedItem.createdDate = action.payload.createdDate;

        updated[updatedItemIndex] = updatedItem;
      }
      return {
        ...state,
        discount: updated,
      };
    },
  },
});

export default discountSlice.reducer;
export const { removeDiscount, addDiscount, updateDiscount } =
  discountSlice.actions;
