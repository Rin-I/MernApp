import React from "react"
import { makeStyles } from "@mui/styles"
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material"
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined"
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import moment from "moment"
import * as Types from "../../Types"
import { useAppDispatch } from "../../app/hooks"
import { MoreHoriz } from "@mui/icons-material"
import "../../Global.css"
import { DeletePost } from "../../features/posts/postSlice"

const useStyles = makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px !important",
    height: 150,
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "#fff",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
})

type POST = {
  post: Types.POSTFETCHDATA
  setCurrentId: React.Dispatch<React.SetStateAction<string>>
}

const Post: React.FC<POST> = ({ post, setCurrentId }) => {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  return (
    <Card className={classes.card}>
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        {/* 日付後ほど追加 */}
        {/* <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography> */}
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "black" }}
          size="large"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="inherit" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags}
        </Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {post.title}
        </Typography>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(DeletePost(post._id))}
        >
          <DeleteOutlineOutlinedIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
