import { Request, Response } from "express"
import PostMessage from "../models/postMessage"
import { POST } from "../types/post"
import mongoose from "mongoose"

export const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const postMessages: POST[] = await PostMessage.find()
    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({ message: error })
  }
}

export const createPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { title, message, selectedFile, creator, tags } = req.body as Pick<
    POST,
    | "title"
    | "message"
    | "creator"
    | "tags"
    | "selectedFile"
    | "likeCount"
    | "createdAt"
  >

  console.log(creator, title)

  const newPost = new PostMessage({
    title,
    message,
    selectedFile,
    creator,
    tags,
  })
  try {
    await newPost.save()
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error })
  }
}

export const updatePost = async (req: Request, res: Response) => {
  const { id: _id } = req.params
  const post = req.body

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that ID")

  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    {
      new: true,
    }
  )
  res.json(updatedPost)
}

export const deletePost = async (req: Request, res: Response) => {
  const { id: _id } = req.params

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that ID")

  await PostMessage.findByIdAndRemove(_id)
  res.json({ message: "Post deleted successfully" })
}
