import { createSlice } from "@reduxjs/toolkit";
import { statusReducer } from "./status";

const initialState = {
  status: "void",
  data: [],
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    ...statusReducer,
  },
});

const { actions, reducer } = userSlice;

export const { pending, rejected, resolved } = actions;

export default reducer;
