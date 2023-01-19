const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

app.get("/", (req,res) => {
    res.status(200).send({status: "Success", msg: "Welcome to server"})
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})