import { createSlice } from '@reduxjs/toolkit';

//initail state
const initialState = {
    error : false,
    success: false

};
export const msgSlice = createSlice({
    name: "msg",
    initialState,

    reducers: {
      error: (state) => {
        state.error = !state.error;
      },
      success: (state) => {
        state.success = !state.success;
      },
    },
});
  
export const { error, success} = msgSlice.actions;

export const selectMsgError = (state) => state.msg.error;
export const selectMsgSuccess = (state) => state.msg.success;

export default msgSlice.reducer;
  