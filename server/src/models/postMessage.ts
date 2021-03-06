import { POST } from "../types/post"
import { model, Schema } from "mongoose"

const postSchema: Schema = new Schema({
  creator: String,
  title: String,
  message: String,
  tags: String,
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const PostMessage = model<POST>("PostMessage", postSchema)

export default PostMessage
