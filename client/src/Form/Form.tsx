import React, { useState, useEffect } from "react"
import { POSTDATA } from "../Types"
import { useAppDispatch } from "../app/hooks"
import { useAppSelector } from "../app/hooks"
import { CreatePost, UpdatePost } from "../features/posts/postSlice"

type PROPS = {
  currentId: string
  setCurrentId: React.Dispatch<React.SetStateAction<string>>
}

const Form: React.FC<PROPS> = ({ currentId, setCurrentId }) => {
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
      console.log(updatepostData)

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
      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
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
            type="text"
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
            type="text"
            placeholder="分類"
            name="tags"
            value={postData.tags}
            onChange={(
              e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
            ) => setPostData({ ...postData, tags: e.target.value })}
          />
        </div>
        <div className="submit border rounded mb-4 bg-blue-600 text-white cursor-pointer">
          <button className="wrapper flex w-max mx-auto" type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>{" "}
            <input
              className="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-transparent"
              type="button"
              value="新規追加"
            />
          </button>
        </div>
        <div className="submit border rounded mb-4 bg-red-400 text-white cursor-pointer">
          <div className="wrapper flex w-max mx-auto" onClick={() => clear()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 my-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>{" "}
            <input
              className="outline-none px-2 h-full cursor-pointer py-2 text-lg bg-transparent"
              type="button"
              value="Clear"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form
