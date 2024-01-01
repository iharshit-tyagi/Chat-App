import { createSlice } from "@reduxjs/toolkit";
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatsList: [],
    chatInfo: [],
  },
  reducers: {
    addChatList: (state, action) => {
      state.chatsList = action.payload;
    },
    clearChatList: (state, action) => {
      state.chatsList.length = 0;
    },
    addChatInfo: (state, action) => {
      state.chatInfo = action.payload;
    },
    clearChatInfo: (state) => {
      state.chatInfo.length = 0;
    },
  },
});
export const { addChatInfo, clearChatInfo, addChatList, clearChatList } =
  chatSlice.actions;
export default chatSlice.reducer;
