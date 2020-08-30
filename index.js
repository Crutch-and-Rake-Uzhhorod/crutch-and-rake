const express = require('express')

const app = express()
const PORT = process.env.PORT || 8181

app.use(express.json({ extended: true }))

app.listen(PORT, () => {
    console.log(`Server has been started on localhost:${PORT}...`)
})