import userRouter from "./routes/router.js"
import adminRouter from "./routes/adminRoute.js"
import connectDB from "./config/config.js"
import express,{json} from "express"
import cors from "cors"

const app = express()
const port = 8000

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/manager", userRouter)
app.use("/api/team", userRouter)
app.use("/api/player", userRouter)

app.use("/api/admin", adminRouter)

app.listen(port, () => {
    console.log(`Server is running at port:${port}`)
})