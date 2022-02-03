import React, { useEffect } from "react"
import "./App.css"
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material"
import memories from "./images/memories.png"
import Posts from "./Posts/Posts"
import Form from "./Form/Form"
import { makeStyles } from "@mui/styles"
import { useAppDispatch } from "./app/hooks"
import { getPosts } from "./features/counter/counterSlice"

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
  image: {
    marginLeft: "15px",
  },
})

const App: React.FC = () => {
  const classes = useStyles()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memory
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
