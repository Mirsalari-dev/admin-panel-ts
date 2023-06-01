import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../mock/tables";
import { IcustomersTable } from "../interfaces/Itable";

type InitialState = {
  customers: IcustomersTable[];
};

const initialState: InitialState = {
  customers: data.customers,
};

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    removeCustomer: (state, action: PayloadAction<any>) => {
      state.customers = state.customers.filter(
        (customer) => customer.ID != action.payload
      );
    },
    updateCustomer: (state, action: PayloadAction<any>) => {
      let updated = [...state.customers];
      const updatedItemIndex = updated.findIndex(
        (item) => item.ID === action.payload.id
      );
      if (updatedItemIndex < 0) {
        updated = [...state.customers];
      } else {
        let updatedItem = { ...updated[updatedItemIndex] };
        updatedItem.userName = action.payload.userName
        updatedItem.phoneNumber = action.payload.phoneNumber
        updatedItem.email = action.payload.email
        updatedItem.location = action.payload.location
        updatedItem.avatar = action.payload.avatar
        updated[updatedItemIndex] = updatedItem;
      }
      return {
        ...state,
        customers: updated,
      };
    },
  },
});

export default customersSlice.reducer;
export const { removeCustomer, updateCustomer } = customersSlice.actions;
