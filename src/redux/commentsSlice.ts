import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../mock/tables";
import { IcommentsTable } from "../interfaces/Itable";

type InitialState = {
  comments: IcommentsTable[];
};

const initialState: InitialState = {
  comments: data.comments,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    removeComments: (state, action: PayloadAction<any>) => {
      state.comments = state.comments.filter(
        (comment) => comment.ID != action.payload
      );
    },
    updateComments: (state, action: PayloadAction<any>) => {
      let updated = [...state.comments];
      const updatedItemIndex = updated.findIndex(
        (item) => item.ID === action.payload.id
      );
      if (updatedItemIndex < 0) {
        updated = [...state.comments];
      } else {
        let updatedItem = { ...updated[updatedItemIndex] };
        updatedItem.userName = action.payload.userName
        updatedItem.email = action.payload.email
        updatedItem.status = action.payload.status
        updatedItem.avatar = action.payload.avatar
        updatedItem.date = action.payload.date
        updatedItem.text = action.payload.text

        updated[updatedItemIndex] = updatedItem;
      }
      return {
        ...state,
        comments: updated,
      };
    },
  },
});

export default commentsSlice.reducer;
export const { removeComments, updateComments } = commentsSlice.actions;
