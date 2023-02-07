const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Bienvenido!')
})

app.listen(port, () => {
  console.log(`Bienvenido port ${port}`)
})