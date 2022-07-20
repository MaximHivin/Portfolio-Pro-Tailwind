// On selectionne le menu à cacher
const menuResponsive = document.querySelector('.toggle-menu');

// On selectionne le bouton pour cacher le menu
const iconeToggle = document.querySelector('.icone-toggle');

// On déclare un événement au 'click' en utilisant notre fonction 'handleclick'
iconeToggle.addEventListener('click', handleclick);

// On crée la fonction 'handleclick'
function handleclick() {

    menuResponsive.classList.toggle('hidden');

};







