const express = require('express')
const app = express()

app.use('/opa', (req, res, next) => {
   console.log('Antes...')
   next()
})

app.get('/opa', (req, res, next) => {
   console.log('Durante...')
   res.json([
      {id: 7, name: 'Ana', position: 1},
      {id: 34, name: 'Bia', position: 2},
      {id: 73, name: 'Carlos', position: 3}
   ])
   next()
})

app.use('/opa', (req, res) => {
   console.log('Depois...')
})

app.listen(3000, () => {
   console.log('Backend executando...')
})