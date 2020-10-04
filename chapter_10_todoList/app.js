const addTodo = document.querySelector('.add');
const list = document.querySelector('.todos');
const error = document.querySelector('.error');
const searchTodos = document.querySelector('.search input');


const generateTemplate = (todo) =>{
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
    `;
    list.innerHTML+= html;
}

addTodo.addEventListener('submit', (e) =>{
    e.preventDefault();
    const todo = addTodo.add.value.trim();
    if(todo.length){
        generateTemplate(todo); 
        addTodo.reset();
    }else {
        error.style.color = 'red';
        error.textContent = 'Felt må ha en verdi';
    }    
});

//DELETE TODOS. KLIKK PÅ SØPPELBØTTE FOR Å SLETTE. KILL PÅ TEKST FOR Å MARKERE

list.addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }else if(e.target.classList.contains('list-group-item')){
        e.target.style.textDecoration = 'line-through';
    }
});




const filterTodos = (term) =>{
    Array.from(list.children)
        .filter((todo) =>!todo.textContent.toLowerCase().includes(term))
            .forEach((todo) =>todo.classList.add('filtered'));
    
    Array.from(list.children)
        .filter((todo) =>todo.textContent.toLowerCase().includes(term))
            .forEach((todo) =>todo.classList.remove('filtered'));
};


//KEYUP EVENT

searchTodos.addEventListener('keyup', () =>{
   const term = searchTodos.value.trim().toLowerCase(); 
   filterTodos(term);
})








