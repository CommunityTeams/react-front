import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  lists: [],
  comm: [],
  isLoading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get("http://localhost:3004/lists");
  return response.data;
});

// eslint-disable-next-line no-underscore-dangle
export const __updatePost = createAsyncThunk(
  "posts/updatePost",
  async (payload, ThunkAPI) => {
    try {
      const data = await axios.put("http://localhost:3004/lists");
      console.log(data);
      return ThunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      // return err.message;
      console.log(error);
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

// eslint-disable-next-line no-underscore-dangle
export const __addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (payload, ThunkAPI) => {
    try {
      await axios.post("http://localhost:3004/lists", payload);
      return "게시글 작성 완료";
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

// eslint-disable-next-line no-underscore-dangle
export const __deletePost = createAsyncThunk(
  "posts/deletePost",
  async (payload, ThunkAPI) => {
    try {
      await axios.delete(`http://localhost:3004/lists/${payload}`);
      return "삭제 완료";
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [__addNewPost.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__addNewPost.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = action.payload; // Store에 있는 posts에 서버에서 가져온 posts를 넣습니다.
    },
    [__addNewPost.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__deletePost.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = action.payload; // Store에 있는 posts에 서버에서 가져온 posts를 넣습니다.
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__updatePost.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__updatePost.fulfilled]: (state) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      // state.todos = action.payload;
    },
    [__updatePost.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export default postsSlice.reducer;
