//DOM QUERY
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMessage = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chat-rooms');

//ADD A NEW CHAT

newChatForm.addEventListener('submit', e =>{
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
     .then(() => newChatForm.reset())
     .catch((err)=> console.log('Failed to make message:', err));

});

//UPDATE USERNAME

newNameForm.addEventListener('submit', e =>{
    e.preventDefault();
    //UPDATE NAME FROM CHATROOM CLASS
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName)
      newNameForm.reset();
    //SHOW THEN HIDE UPDATED USERNAME MESSAGE
    updateMessage.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => updateMessage.innerText = '' , 3000)
});

//UPDATE CHAT ROOM

rooms.addEventListener('click', e => {
  //console.log(e);
  if(e.target.tagName === 'BUTTON'){
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute('id'));
    chatroom.getChats(chat => chatUI.render(chat));
  }
});


//CHECK LOCAL STORAGE FOR NAME

const username = localStorage.username ? localStorage.username : 'anon';


//CLASS INSTANCES
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming', username);

//GET CHATS AND RENDER
chatroom.getChats(data => chatUI.render(data));