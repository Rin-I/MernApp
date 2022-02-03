import { Request, Response } from "express"
import PostMessage from "../models/postMessage"
import { POST } from "../types/post"

export const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const postMessages: POST[] = await PostMessage.find()

    console.log(postMessages)

    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({ message: error })
  }
}

export const createPost = async (
  req: Request,
  res: Response
): Promise<void> => {
  const post = req.body as Pick<
    POST,
    | "title"
    | "message"
    | "creator"
    | "tags"
    | "selectedFile"
    | "likeCount"
    | "createdAt"
  >

  const newPost = new PostMessage(post)

  try {
    await newPost.save()

    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error })
  }
}
