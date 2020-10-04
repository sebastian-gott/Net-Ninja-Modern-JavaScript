//ADDING NEW CHAT DOCUMENTS
//SETTING UP REALTIME LISTERENRS TO GET NEW CHATS
//UPDATING USERNAME
//UPDATING ROOM

class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }
    async addChat(message){
        // FORMAT A CHAT OBJECT
        const now = new Date();
        const chat = {
            message: message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        //SAVE DOCUMENT TO DB
        const response = await this.chats.add(chat);
        return response;
    }
    getChats(callback){
        this.unsub = this.chats
        //QUERY THE SNAPSHOT
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if(change.type === 'added'){
                        //UPDATE THE UI
                        callback(change.doc.data())
                    } else if (change.type === 'removed'){

                    }
                });
            });
    }
    updateName(username){
        this.username = username;
        localStorage.setItem('username', username);
    }
    updateRoom(room){
        this.room = room;
        console.log('Room updated');
        if(this.unsub){
           this.unsub();
        }
        
    }
}



