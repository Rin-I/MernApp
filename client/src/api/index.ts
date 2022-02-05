import axios from "axios"
import { POSTDATA } from "../Types"

const url = "http://localhost:5000/posts"

export const fetchPosts = () => axios.get(url)
export const createPosts = (newPost: POSTDATA) => axios.post(url, newPost)
