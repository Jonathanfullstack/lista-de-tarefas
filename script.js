const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const listacompleta = document.querySelector('.list-task')

let minhslistadeitens = []
function adicionarNovaTarefa() {
    minhslistadeitens.push({
        tarefa: input.value,
        concluida: false
    })
    

    input.value = ''
    

    mostrarTarefas()
}
function mostrarTarefas(){
    let novaLi =  ''

    minhslistadeitens.forEach((item, posicao) => {
        novaLi = novaLi + `
        <li class="task ${item.concluida && "done"}">
            <img  src="img/checked.png" alt="check-na-tarefa" onclick= "concluirtarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="img/trash.png" alt="Tarefa-lixo" onclick= "deletarItem(${posicao})">
        </li>
        


        `
    })


    listacompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhslistadeitens))
}
function concluirtarefa(posicao){
    minhslistadeitens[posicao].concluida = !minhslistadeitens[posicao].concluida

    mostrarTarefas()

}
function deletarItem(posicao){
    minhslistadeitens.splice(posicao, 1)
    console.log(posicao)

    mostrarTarefas()

}
function recarregarTarefas(){

    

    const tarefasdolocal =  localStorage.getItem('lista')

    if(tarefasdolocal){
        minhslistadeitens= JSON.parse(tarefasdolocal)
    }

    mostrarTarefas()

}
recarregarTarefas()

button.addEventListener('click', adicionarNovaTarefa )