import { createSlice } from "@reduxjs/toolkit";
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatInfo: [],
  },
  reducers: {
    addChatInfo: (state, action) => {
      state.chatInfo = action.payload;
    },
    clearChatInfo: (state) => {
      state.chatInfo.length = 0;
    },
  },
});
export const { addChatInfo, clearChatInfo } = chatSlice.actions;
export default chatSlice.reducer;
