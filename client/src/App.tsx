import React, { useState, useEffect } from "react"
import "./App.css"
import icon from "./images/icon.png"
import Posts from "./Posts/Posts"
import Form from "./Form/Form"
import { useAppDispatch } from "./app/hooks"
import { FetchAllPosts } from "./features/posts/postSlice"

const App: React.FC = () => {
  const [currentId, setCurrentId] = useState("")
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(FetchAllPosts())
  }, [currentId, dispatch])

  return (
    <div className="p-5">
      <p className="text-center text-lg">※制作途中です</p>

      <header className="bg-white p-4 flex justify-center rounded-full w-3/4 mx-auto my-4">
        <h1 className="text-center text-5xl text-blue-600 font-bold">
          僕の家計簿アプリ
        </h1>
        <img className="h-12" src={icon} alt="memories" height="60" />
      </header>
      <div className="p-5">
        <div className="flex justify-between px-10">
          <div className="w-3/4">
            <Posts setCurrentId={setCurrentId} />
          </div>
          <div className="w-1/4">
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
