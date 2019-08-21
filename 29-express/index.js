const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const saudacao = require('./saudacaoMid')
const usuarioApi = require('./api/usuario')
// require('./api/produto')(app, 'com param!')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(bodyParser.json())
app.use(saudacao('Wellyson'))

app.use('/opa', (req, res, next) => {
   console.log('Antes...')
   next()
})

app.get('/cliente/relatorio', (req, res) => {
   res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
   // let corpo = ''
   // req.on('data', function(parte) {
   //    corpo += parte
   // })

   // req.on('end', function() {
   //    res.send(corpo)
   // })
   res.send(req.body)
})

app.get('/cliente/:id', (req, res) => {
   res.send(`Cliente ${req.params.id} selecionado!`)
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