import React, { useState, useEffect } from "react"
import { TextField, Button, Typography, Paper } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { POSTDATA } from "../Types"
import { useAppDispatch } from "../app/hooks"
import { useAppSelector } from "../app/hooks"
import { CreatePost, UpdatePost } from "../features/posts/postSlice"
import "../Global.css"

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

type PROPS = {
  currentId: string
  setCurrentId: React.Dispatch<React.SetStateAction<string>>
}

const Form: React.FC<PROPS> = ({ currentId, setCurrentId }) => {
  const classNamees = useStyles()
  const dispatch = useAppDispatch()
  const post = useAppSelector((store) =>
    currentId ? store.posts.find((p) => p._id === currentId) : null
  )
  const [postData, setPostData] = useState<POSTDATA>({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  })

  useEffect(() => {
    if (post) setPostData(post)
  }, [post])

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (currentId !== "") {
      const updatepostData = { id: currentId, post: postData }
      dispatch(UpdatePost(updatepostData))
    } else {
      dispatch(CreatePost(postData))
    }
    clear()
  }

  const clear = () => {
    setCurrentId("")
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    })
  }

  return (
    <div className="register bg-white rounded-lg p-3">
      <h2 className="text-2xl mb-6">
        家計簿を{currentId ? "編集する" : "追加する"}
      </h2>
      <div className="display_name flex border rounded text-gray-500 mb-4">
        <input
          className="outline-none px-4 h-full py-2 text-lg"
          type="text"
          placeholder="投稿者"
          name="creator"
          value={postData.creator}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => setPostData({ ...postData, creator: e.target.value })}
        />
      </div>

      <div className="username flex border rounded text-gray-500 mb-4">
        <input
          className="outline-none px-4 h-full py-2 text-lg"
          type="text"
          placeholder="カテゴリ"
          name="title"
          value={postData.title}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => setPostData({ ...postData, title: e.target.value })}
        />
      </div>

      <div className="password flex border rounded text-gray-500 mb-4">
        <input
          className="outline-none px-4 h-full py-2 text-lg"
          type="password"
          placeholder="料金"
          name="message"
          value={postData.message}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => setPostData({ ...postData, message: e.target.value })}
        />
      </div>

      <div className="password flex border rounded text-gray-500 mb-4">
        <input
          className="outline-none px-4 h-full py-2 text-lg"
          type="password"
          placeholder="分類"
          name="tags"
          value={postData.tags}
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => setPostData({ ...postData, tags: e.target.value })}
        />
      </div>
      <div className="submit border rounded mb-4 bg-blue-600 text-white cursor-pointer">
        <div className="wrapper flex w-max mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 my-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
          <input
            className="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-transparent"
            type="button"
            value="新規追加"
          />
        </div>
      </div>
      <div className="submit border rounded mb-4 bg-red-400 text-white cursor-pointer">
        <div className="wrapper flex w-max mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 my-auto"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
          <input
            className="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-transparent"
            type="button"
            value="Clear"
          />
        </div>
      </div>
    </div>
    // <Paper classNameName={classNamees.paper}>
    //   <form
    //     autoComplete="off"
    //     noValidate
    //     classNameName={classNamees.form}
    //     onSubmit={handleSubmit}
    //   >
    //     <Typography variant="h6">
    //       家計簿を{currentId ? "編集する" : "追加する"}
    //     </Typography>
    //     <TextField
    //       name="creator"
    //       variant="outlined"
    //       label="Creator"
    //       fullWidth
    //       value={postData.creator}
    //       onChange={(
    //         e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    //       ) => setPostData({ ...postData, creator: e.target.value })}
    //     />
    //     <TextField
    //       name="title"
    //       variant="outlined"
    //       label="Title"
    //       fullWidth
    //       value={postData.title}
    //       onChange={(
    //         e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    //       ) => setPostData({ ...postData, title: e.target.value })}
    //     />
    //     <TextField
    //       name="message"
    //       variant="outlined"
    //       label="Message"
    //       fullWidth
    //       value={postData.message}
    //       onChange={(
    //         e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    //       ) => setPostData({ ...postData, message: e.target.value })}
    //     />
    //     <TextField
    //       name="tags"
    //       variant="outlined"
    //       label="Tags"
    //       fullWidth
    //       value={postData.tags}
    //       onChange={(
    //         e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    //       ) => setPostData({ ...postData, tags: e.target.value })}
    //     />
    //     {/* <div classNameName={classNamees.fileInput}>
    //     <FileBase
    //       type="file"
    //       multiple={false}
    //       onDone={({ base64: any }) =>
    //         setPostData({ ...postData, selectedFile: base64 })
    //       }
    //     />
    //   </div> */}
    //     <Button
    //       classNameName={classNamees.buttonSubmit}
    //       variant="contained"
    //       color="primary"
    //       size="large"
    //       type="submit"
    //       fullWidth
    //       onClick={handleSubmit}
    //     >
    //       Submit
    //     </Button>
    //     <Button
    //       variant="contained"
    //       color="secondary"
    //       size="small"
    //       onClick={clear}
    //       fullWidth
    //     >
    //       Clear
    //     </Button>
    //   </form>
    // </Paper>
  )
}

export default Form
