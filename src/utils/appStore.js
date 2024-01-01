import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import chatSlice from "./chatSlice";
export const appStore = configureStore({
  reducer: {
    user: userSlice,
    chat: chatSlice,
  },
});
