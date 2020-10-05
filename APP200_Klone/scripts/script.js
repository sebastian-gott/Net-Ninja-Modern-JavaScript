const form = document.querySelector(".new-nom");
const list = document.querySelector(".ul-nom");
const listVote = document.querySelector(".vote");


//VIS NOMINASJONER

const addNom = (nominee, id) => {
    let time = nominee.nominated_at.toDate();
    let html = `
        <li data-id="${id}">
            <div>${nominee.navn}</div>
            <div><small>${time}</small></div>
            <button class="btn">Slett<button>
        </li>
    `;  

    list.innerHTML += html;
}


//VIS MULIGE KANDIDATER Å STEMME PÅ

const addVote = (nominee, id) => {
    let htmlVote = `
        <li data-id="${id}">
            <div>${nominee.navn}</div>
            <button class="btn">Stem på kanditat<button>
        </li>
    `;

    listVote.innerHTML += htmlVote;
}


//REALTIME LISTENER NOMINERINGS

const unsub = db.collection('nominerte').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        console.log(doc);
        if(change.type == 'added') {
            addNom(doc.data(), doc.id);
        }
    })
})

//REALTIME LISTENER VOTE

const unsub2 = db.collection('nominerte').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        console.log(doc);
        if(change.type == 'added') {
            addVote(doc.data(), doc.id);
        }
    })
})



//LEGG TIL EN NY NOMINASJON
form.addEventListener('submit', e =>{
    e.preventDefault();

    const now = new Date();
    const nominee = {
        navn: form.name.value,
        nominated_at: firebase.firestore.Timestamp.fromDate(now)
    };

    db.collection('nominerte').add(nominee).then(() =>{
        console.log('Nominee added');
    }).catch((err) =>{
        console.log(err);
    });
    form.reset();


});