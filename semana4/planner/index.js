// lembrar de colocar no html onclick antes de refazer tudo umas 5 vezes. exercicio para refazer final de semana
function adicionarTarefa(){

const novaTarefa = document.getElementById('tarefa')
const diasSemana = document.getElementById('dias-semana')

if(novaTarefa.value !== ""){
    
        switch(diasSemana.value) {
            case'domingo':
            const domingo = document.getElementById('domingo')
            domingo.innerHTML += `<p>${novaTarefa.value}</p>`
            break
            case'segunda':
            const segunda = document.getElementById('segunda')
            segunda.innerHTML += `<p>${novaTarefa.value}</p>`
            break
            case'terca':
            const terca = document.getElementById('terca')
            terca.innerHTML += `<p>${novaTarefa.value}</p>`
            break
            case'quarta':
            const quarta = document.getElementById('quarta')    
            quarta.innerHTML += `<p>${novaTarefa.value}</p>`
            break
            case'quinta':
            const quinta = document.getElementById('quinta')
            quinta.innerHTML += `<p>${novaTarefa.value}</p>`
            break
            case'sexta':
            const sexta = document.getElementById('sexta')
            sexta.innerHTML += `<p>${novaTarefa.value}</p>`
            break
            case'sabado':
            const sabado = document.getElementById('sabado')
            sabado.innerHTML += `<p>${novaTarefa.value}</p>`
            break
            default:
                


        }
    }novaTarefa.value =""
    
}
