const express = require('express')
const userRouter = require('./routes/users')

const app = express()
const PORT = process.env.PORT || 8181

app.use(express.json({ extended: true }))

app.use('/api/users', userRouter)

app.listen(PORT, () => {
    console.log(`Server has been started on localhost:${PORT}...`)
})