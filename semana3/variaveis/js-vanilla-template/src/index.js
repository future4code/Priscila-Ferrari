//Exercicio 1 - 
//R: 10

//Exercicio 2 -
//R: 10,20,10

// let nome = ""
// let idade = ""

console.log (typeof "nome") //1c
console.log (typeof "idade") //1c

//Apareceu um erro e nenhuma resposta. Se tento atribuir colocando o sinal de igual,
//eles se tornam strings porque acredito que mesmo o valor é vazio e isso já é uma atribuição.

let nome = prompt("Qual o seu nome?")
let idade = prompt ("Qual sua idade?")



let hobbie = prompt("Qual seu hobbie?")
let rua = prompt("Mora em rua ou avenida?")
let nomeRua = prompt("Qual o nome da sua rua?")
let numeroCasa = prompt("Qual o número da sua casa?")
let cor = prompt("Qual sua cor favorita")

console.log("1. Qual seu endereço?" )
console.log("Resposta: "+rua+" "+nomeRua+", " )+numeroCasa
console.log("2. Qual sua cor favorita?")
console.log("Resposta: "+cor)

let comidaFavorita = ["sopa", "pequi", "galinhada", "quibebe", "churrasco"]

console.log("Essas são as minhas comidas favoritas:")
console.log(" - " + comidaFavorita[0])
console.log(" - " + comidaFavorita[1])
console.log(" - " + comidaFavorita[2])
console.log(" - " + comidaFavorita[3])
console.log(" - " + comidaFavorita[4])

let comidaUsuario = prompt("Qual sua comida favorita?")

let comidaFavorita2 = ["sopa", comidaUsuario, "galinhada", "quibebe", "churrasco"]

console.log("Essas são as minhas comidas favoritas:")
console.log(" - " + comidaFavorita2[0])
console.log(" - " + comidaFavorita2[1])
console.log(" - " + comidaFavorita2[2])
console.log(" - " + comidaFavorita2[3])
console.log(" - " + comidaFavorita2[4])

let questao4a = [
    "Almoçou hoje?",
    "Adora coentro no feijão?",
    "Foi na fazenda esse ano?"
]

let questao4b = [
    false, 
    false, 
    true
]

console.log(
    questao4a[0],questao4b[0],
    questao4a[1],questao4b[1],
    questao4a[2],questao4b[2]
)
