import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    searchResults: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state, action) => {
      state.user = null;
    },
    addSearchResult: (state, action) => {
      state.searchResults = action.payload;
    },
    clearSearchResults: (state) => {
      state.searchResults.length = 0;
    },
  },
});
export const { addUser, removeUser, addSearchResult, clearSearchResults } =
  userSlice.actions;
export default userSlice.reducer;
