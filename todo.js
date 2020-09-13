
/*Coletar dados html*/
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');
/*End Coletar dados html*/

/*Guardar os todos digitados*/
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
/*End Guardar os todos digitados*/

/*função para renderizar Todos*/
function renderTodos(){

    listElement.innerHTML = ''; /*remove todo conteudo que tem no listElement - 
    Para não repetir quando adiciona mais todo*/ 

    for(todo of todos){
        var todoElement = document.createElement('li'); //cria elemento no texto
        var todoText = document.createTextNode(todo); //cria elemento da lista

        var linkElement = document.createElement('a'); //adiciona o excluir 

        linkElement.setAttribute('href', '#'); // adiciona o href ao elemento 'a    '

        var pos = todos.indexOf(todo); //INDEXOF retorna em qual posição do ARRAY o elemento está
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');

        var linkText = document.createTextNode(' - Deletar'); //texto dentro elemento 'a' 

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText); // adiciona o texto digitado
        todoElement.appendChild(linkElement); // adiciona o excluir ao lado do texto 

        listElement.appendChild(todoElement); //
    }
}
renderTodos();
/* End função para renderizar Todos*/

/*função AddTodo*/
function addTodo(){
    var todoText = inputElement.value;
    
    todos.push(todoText); // PUSH função do ARRAY para adicionar um novo item no final dele
    inputElement.value = ''; // apagar o texto atual do INPUT
    renderTodos();
    saveToStorage();
}
buttonElement.onclick = addTodo; // chamar a função com o click do botão
/*End função AddTodo*/

/*Excluir Todo*/
function deleteTodo(pos){
    todos.splice(pos, 1); /*SPLICE remove uma quantidade de item do ARRAY, baseado
                            na posição que for passada*/

    renderTodos();
    saveToStorage();

}

/*End - Excluir Todo*/

/*Salvar no Storage*/

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

/*End - Salvar no Storage*/