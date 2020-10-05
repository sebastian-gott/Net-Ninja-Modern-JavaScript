//QUERIES
const nav = document.querySelector(".navigasjon");



const generateNav = () => {
    const menu = `
    <h1 class="my-4 text-center">Valget 2020</h1>
    
    <!-- buttons for chatrooms -->
    <div class="mb-3 text-center">
        <li class="btn"><a href="index.html">HJEM</a></li>
        <li class="btn"><a href="nominer.html">NOMINERING</a></li>
        <li class="btn"><a href="registrering.html">REGISTRERING</a></li>
        <li class="btn"><a href="stem.html">Stem</a></li>
        <li class="btn"><a href="logginn.html">LOGG INN</a></li>
    </div>
    `;

    nav.innerHTML += menu;
};

generateNav();