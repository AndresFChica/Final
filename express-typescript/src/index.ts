import express from 'express'
import animatronicRoute from './routes/animatronics'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
    console.log('Someone pinged here')
    res.send('pong')
})

app.use('/api/animatronics', animatronicRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})