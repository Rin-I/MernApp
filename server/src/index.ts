import express, { Express, Request, Response } from "express"
import mongoose, { ConnectOptions } from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"
import postRoutes from "./routes/posts"

const app: Express = express()

app.use(bodyParser.json({ limit: "30mb" }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))

app.use(cors())

app.use("/posts", postRoutes)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello HouseHold App")
})

const CONNECTION_URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.97ocy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))
  )
  .catch((error) => console.log(error.message))
