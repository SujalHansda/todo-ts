import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes/router"


const app: Express = express()

const PORT: string | number = process.env.PORT || 4000
app.use(cors())
app.use(express.json())
app.use(todoRoutes)


const url: string = 'mongodb+srv://sujalhansdaph:HrbpMxzkGd40KCOi@cluster0.givmik4.mongodb.net/?retryWrites=true&w=majority'



mongoose
  .connect(url)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`==> Server running on http://localhost:${PORT} | MongoDb connected )`)
    )
  )
  .catch(error => {
    throw error
  })