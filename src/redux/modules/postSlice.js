// src/redux/modules/counterSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLists = createAsyncThunk(
  "getLists",
  async (payload, ThunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3004/lists");

      return ThunkAPI.fulfillWithValue(data.data);
      // Promise가 resolve 됬을 경우
    } catch (error) {
      console.log(error);
      return ThunkAPI.rejectWithValue(error);
      /* ThunkAPI. */
    }
  }
);

export const getComm = createAsyncThunk(
  "getComm",
  async (payload, ThunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3004/comm");

      return ThunkAPI.fulfillWithValue(data.data);
      // Promise가 resolve 됬을 경우
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
      /* ThunkAPI. */
    }
  }
);

export const postComm = createAsyncThunk(
  "postComm",
  async (payload, ThunkAPI) => {
    try {
      console.log(payload);
      const data = await axios.post("http://localhost:3004/comm", payload);
      return ThunkAPI.fulfillWithValue(data.data);

      // Promise가 resolve 됬을 경우
    } catch (error) {
      console.log(error);
      return ThunkAPI.rejectWithValue(error);
      /* ThunkAPI. */
    }
  }
);

const initialState = {
  lists: [],
  comm: [],
  set: {},
  isLoading: false,
  error: null,
};

export const postSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setComm(state, action) {
      state.comm = action.payload;
    },
  },
  extraReducers: {
    [getLists.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [getLists.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.lists = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [getLists.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [getComm.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comm = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
/* export const {} = todoslice.actions; */
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export const { setComm } = postSlice.actions;
export default postSlice.reducer;
