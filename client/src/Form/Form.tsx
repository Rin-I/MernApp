import React, { useState } from "react"
import { TextField, Button, Typography, Paper } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { POSTDATA } from "../Types"
import { useAppDispatch } from "../app/hooks"
import { CreatePost } from "../features/posts/postSlice"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: "8px",
    },
  },
  paper: {
    padding: "16px",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}))

const Form: React.FC = () => {
  const classes = useStyles()
  const dispatch = useAppDispatch()
  const [postData, setPostData] = useState<POSTDATA>({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  })

  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(CreatePost(postData))
    console.log(postData)
  }

  const clear = () => {
    console.log("clear")
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Createring a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => setPostData({ ...postData, creator: e.target.value })}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => setPostData({ ...postData, message: e.target.value })}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => setPostData({ ...postData, tags: e.target.value })}
        />
        {/* <div className={classes.fileInput}>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64: any }) =>
            setPostData({ ...postData, selectedFile: base64 })
          }
        />
      </div> */}
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  )
}

export default Form
