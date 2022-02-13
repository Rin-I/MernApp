import React from "react"
import Post from "./Post/Post"
import { Grid, CircularProgress } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useAppSelector } from "../app/hooks"
import "../Global.css"

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
  container: {
    margin: "0 auto",
  },
})

type PROPS = {
  setCurrentId: React.Dispatch<React.SetStateAction<string>>
}

const Posts: React.FC<PROPS> = ({ setCurrentId }) => {
  const classes = useStyles()
  const posts = useAppSelector((store) => store.posts)

  console.log(posts)

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid className={classes.container} container spacing={3}>
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Posts
