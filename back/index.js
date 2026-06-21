
import express from 'express'

import DB from './db.js'

DB.connect().then(() => {
    console.log('Database connected successfully')
}).catch((err) => {
    console.error('Failed to connect to the database:', err)
    process.exit(1)
})

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})



