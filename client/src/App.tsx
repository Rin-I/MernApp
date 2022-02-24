import React, { useState, useEffect } from "react"
import "./App.css"
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material"
import icon from "./images/icon.png"
import Posts from "./Posts/Posts"
import Form from "./Form/Form"
import { makeStyles } from "@mui/styles"
import { useAppDispatch } from "./app/hooks"
import { FetchAllPosts } from "./features/posts/postSlice"

const useStyles = makeStyles({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  caution: {
    color: "#000",
    fontSize: "1rem",
  },
  image: {
    marginLeft: "15px",
  },
})

const App: React.FC = () => {
  const [currentId, setCurrentId] = useState("")
  const classes = useStyles()
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
      <Grow in>
        <div className="p-5">
          <div className="grid grid-cols-2">
            <div className="col-start-1 col-end-3">
              <Posts setCurrentId={setCurrentId} />
            </div>
            <div className="">
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </div>
          </div>
        </div>
      </Grow>
    </div>
  )
}

export default App
