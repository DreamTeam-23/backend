
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import users from "./routes/users"
import user from "./routes/user"

dotenv.config()
const app = express()
const port = process.env.PORT || 3333

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("welcome")
})

app.use("/api/users", users)
app.use("/api/user", user)

async function start() {
    try {
        app.listen(port, () => console.log(`Server listening on port: ${port}`));
    }
    catch (err) {
        console.log(err)
    }
}

start()