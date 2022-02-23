import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"
import * as api from "../../api/index"
import { POSTDATA } from "../../Types"
import Posts from "../../Posts/Posts"

type Post = {
  _id: string
  title: string
  message: string
  creator: string
  tags: string
  selectedFile: string
  likeCount: number
  createdAt: Date
}

export const FetchAllPosts = createAsyncThunk("posts/FetchAll", async () => {
  try {
    const { data } = await api.fetchPosts()
    console.log(data)

    return data
  } catch (error: any) {
    console.log(error.message)
  }
})

export const CreatePost = createAsyncThunk(
  "posts/Create",
  async (post: POSTDATA) => {
    try {
      console.log(post)

      const { data } = await api.createPosts(post)
      console.log(data)

      return data
    } catch (error: any) {
      console.log(error.message)
    }
  }
)

type updatePost = {
  id: string
  post: POSTDATA
}

export const UpdatePost = createAsyncThunk(
  "posts/Update",
  async (updatedPost: updatePost) => {
    try {
      const { data } = await api.updatePost(updatedPost.id, updatedPost.post)
      return data
    } catch (error: any) {
      console.log(error.message)
    }
  }
)
export const DeletePost = createAsyncThunk(
  "posts/Delete",
  async (id: string) => {
    try {
      await api.deletePost(id)
      return id
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
      .addCase(UpdatePost.fulfilled, (state, action) => {
        return state.map((post) =>
          post._id === action.payload._id ? action.payload : post
        )
      })
      .addCase(DeletePost.fulfilled, (state, action) => {
        return state.filter((post) => post._id !== action.payload)
      })
  },
})

export default postSlice.reducer
