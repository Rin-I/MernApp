import { Document } from "mongoose"
export interface POST extends Document {
  creator: string
  title: string
  message: string
  tags: string
  selectedFile: string
  likeCount: number
  createdAt: Date
}
