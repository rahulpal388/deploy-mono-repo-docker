import express, { application } from "express"
import { client } from "@repo/db/client"

const app = express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("http get endpoint")
})

app.post("/signup", async (req, res) => {
    const body = req.body

    try {
        await client.user.create({
            data: {
                username: body.username,
                password: body.password
            }
        })
        res.status(200).json({
            message: "user created"
        })
    } catch (error) {
        res.status(500).json({
            message: "error while addding user to db"
        })
    }
})



app.get("/users", async (req, res) => {
    const users = await client.user.findMany()
    res.status(200).json({
        users
    })

})


app.listen(8080, () => {
    console.log("listening on port 8080............")
})