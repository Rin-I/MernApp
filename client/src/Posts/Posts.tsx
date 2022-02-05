import React from "react"
import Post from "./Post/Post"
import { makeStyles } from "@mui/styles"
import { useAppSelector } from "../app/hooks"

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  mainContainer: {
    display: "flex",
    alignItems: "center",
  },
  smMargin: {
    margin: 8,
  },
  actionDiv: {
    textAlign: "center",
  },
})

const Posts: React.FC = () => {
  const classes = useStyles()
  const posts = useAppSelector((store) => store.posts)

  console.log(posts)

  return (
    <div>
      POSTS
      <Post />
    </div>
  )
}

export default Posts
