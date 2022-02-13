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
    <Container maxWidth="lg">
      <Typography className={classes.caution} variant="h3" align="center">
        ※まだ制作途中です
      </Typography>

      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          僕の家計簿アプリ
        </Typography>
        <img className={classes.image} src={icon} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7} md={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4} md={5}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
