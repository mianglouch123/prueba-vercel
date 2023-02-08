const express = require('express')
const app = express()
const port = 1000;

app.get('/', (req, res) => {
  res.send('Bienvenido!')
})


app.get('/calculate',(req,res)=>{
  const firstValue = req.query.f;
  const secondValue = req.query.s;

  res.send(`values` + firstValue + "" + secondValue);
})

app.listen(port, () => {
  console.log(`Bienvenido port ${port}`)
})