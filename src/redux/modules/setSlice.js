import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* export const setComm = createAsyncThunk(
  "getComm",
   (payload, ThunkAPI) => {
    
  }
);
 */
const initialState = {
  comm: [],
};

export const setSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: {
    [setComm.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comm = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
/* export const {} = todoslice.actions; */
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default setSlice.reducer;
