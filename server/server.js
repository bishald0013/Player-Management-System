const express = require('express')
const app = express()
const port = 8000

app.get("/", (req, res) => {
    res.status(200).send({status: "success", msg: "This is get route"})
})

app.listen(port, () => {
    console.log(`Server is running at port:${port}`)
})