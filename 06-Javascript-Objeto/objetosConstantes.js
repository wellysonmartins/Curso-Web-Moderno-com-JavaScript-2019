// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

// Congelar o objeto
Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)

// Congelar na criação
const pessoaConstante = Object.freeze({ nome: 'Joao '})
console.log(pessoaConstante)