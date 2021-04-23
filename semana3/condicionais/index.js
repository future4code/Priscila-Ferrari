// Exercicio 1: O código ele lê e armazena a resposta do usuario
// e usuario a variavel de divisão para ver se sobra resto.
// No caso de sobrar, que é diferente de 0, o numero é impar e ele não passa no teste.
// Se não sobrar, o número é par e ele passa no teste.


// Exercício 2: 
// a) Serve para dar o preço das frutas.
// b) O preço da fruta é R$ 2.25
// c) O preço da fruta é R$ 5 // Porque o valor foi redefinido por ter continuado a rodar

// Exercício 3:
// a) A primeira linha está pedindo para o usuário digitar um numero no prompt
// b) Para o número 10 mensagem seria: Esse número passou no teste. Para o -10, irá aparecer um erro 
// c) Porque a opção de menor que 0 não foi considerada no código
// 
// Exercício 4:
// let idade = Number(prompt('Qual a sua idade?'))
// console.log (idade)

// if(idade >= 18) {console.log('Você pode dirigir')} else {
//     console.log('Você não pode dirigir')
// }

// Exercício 5:
// let turno = prompt('Qual o turno que você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)')

// console.log (turno)

// if(turno === 'M'){
//     console.log('Bom dia!')
// } else if (turno === 'V') {
//     console.log('Boa tarde!')
// } else {
//     console.log('Boa noite!')
// }

// Exercício 6:

// let turno = prompt('Qual o turno que você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)')
// console.log (turno)

// switch (turno){
//     case'M':
//     console.log('Bom dia!')
//     break

//     case'V':
//     console.log('Boa tarde!')
//     break

//     case'N':
//     console.log('Boa noite!')
    
// }

// Exercício 7:

let genero = prompt('Qual o genero do filme?')
let valor = prompt('Qual o valor do ingresso?')

console.log (genero)
console.log (valor)

switch(genero){
    case (genero !=='fantasia'):
        console.log("Escolha outro filme")
        break
    case 'fantasia':
        switch(valor){
            case (valor > '15'):
            console.log("Escolha outro filme")
            break
            
            case (valor <='15'):
            console.log('Bom filme')
            break
            
            default:
                console.log('Desculpe, não entendi! Repita a operação')
        }

}

