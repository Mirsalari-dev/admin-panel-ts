import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import data from "../mock/tables";
import {IcustomersTable} from "../interfaces/Itable"

type InitialState =  {
  customers : IcustomersTable[]
}

const initialState : InitialState = {
  customers: data.customers,
};

const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    removeCustomer : (state , action: PayloadAction<any>)=>{
        state.customers = state.customers.filter(customer => customer.ID != action.payload)
        
        
    }
  },
});

export default customersSlice.reducer;
export const { removeCustomer } = customersSlice.actions

