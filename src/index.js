const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// makes req.body already have the JSON parsed
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.get('/test', (req, res) => {
    res.send({ message: 'Site up and running.' })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

console.log(process.env.JWT_SECRET)