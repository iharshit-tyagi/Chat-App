import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      state = action.payload;
    },
    removeUser: (state, action) => {
      state = null;
    },
  },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
