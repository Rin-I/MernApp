import axios from "axios"
import { POSTDATA } from "../Types"

const url = "http://localhost:5000/posts"

export const fetchPosts = () => axios.get(url)
export const createPosts = (newPost: POSTDATA) => axios.post(url, newPost) //axiosのデータの渡しかたに問題がある？？
export const updatePost = (id: string, updatedPost: POSTDATA) =>
  axios.patch(`${url}/${id}`, updatedPost)
export const deletePost = (id: string) => axios.delete(`${url}/${id}`)
