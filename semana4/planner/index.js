function adicionaTarefa(){
const campoInserir = document.getElementById ('tarefa')
const listaTarefas = document.getElementById ('lista-tarefas')
const diasSemana = document.getElementById ('dias-semana')
const semanaInteira = document.getElementsById ('domingo')
const

if (campoInserir.value !== ""){
    listaTarefas.innerHTML += `<li>${campoInserir.value}</li>`
}

}


//se dia da semana selecionado é igual ao da coluna então o item da lista irá para ele