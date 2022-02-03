import { Document } from "mongoose"

type LIKECOUNT = {
  type: number
}
export interface POST extends Document {
  title: string
  message: string
  creator: string
  tags: [string]
  selectedFile: string
  likeCount: number
  createdAt: Date
}
