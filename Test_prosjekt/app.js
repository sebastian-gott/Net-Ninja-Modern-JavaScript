const addPost = document.querySelector('.add');
const list = document.querySelector('.posts');
const error = document.querySelector('.error');
const searchTodos = document.querySelector('.search input');


const generateTemplate = (post) =>{
    const html = `
    <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <span>${post}</span>
        </div>
    </div>
    `
    list.innerHTML+= html;
}

addPost.addEventListener('submit', (e) =>{
    e.preventDefault();

    const post = addPost.add.value.trim();
    if(post.length){
        generateTemplate(post);
        addPost.reset();
    }
      
});









