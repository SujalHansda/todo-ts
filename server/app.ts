import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes/router"
import swaggerUI from "swagger-ui-express"
import fs from "fs"
import Yaml from "js-yaml"
// ./ doesn't seems to work, 
//yaml to json object
const s: any = Yaml.load(fs.readFileSync(`${__dirname}/swagger.yaml`, "utf-8"))


const app: Express = express()

const PORT: string | number = process.env.PORT || 4000
app.use(cors({ origin: '*' }));
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


app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(s))