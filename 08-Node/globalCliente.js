require('./global')

console.log(MinhaApp.saudacao())
console.log(MinhaAppFreeze.saudacao())

MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)

MinhaAppFreeze.nome = 'Mudar nome!'
console.log(MinhaAppFreeze.nome)