import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"
import * as api from "../../api/index"
import { POSTDATA } from "../../Types"

type Post = {
  title: string
  message: string
  creator: string
  tags: [string]
  selectedFile: string
  likeCount: number
  createdAt: Date
}

export const FetchAllPosts = createAsyncThunk("posts/FetchAll", async () => {
  try {
    const { data } = await api.fetchPosts()
    return data
  } catch (error: any) {
    console.log(error.message)
  }
})

export const CreatePost = createAsyncThunk(
  "posts/Create",
  async (post: POSTDATA) => {
    try {
      console.log("post", post)
      const { data } = await api.createPosts(post)
      console.log(data)
      return data
    } catch (error: any) {
      console.log(error.message)
    }
  }
)

const postSlice = createSlice({
  name: "posts",
  initialState: [] as Post[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchAllPosts.fulfilled, (state, action) => {
        return action.payload
      })
      .addCase(CreatePost.fulfilled, (state, action) => {
        return [...state, action.payload]
      })
  },
})

export default postSlice.reducer
