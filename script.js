const images = [
    {src: "images/dessin1.png", caption: "Infos : Thunder Angel, date : Le 30 Juillet 2025 ; il est sympa."},
    {src: "images/dessin2.png", caption: "Infos : Skull of the life, date Le 16 Août 2025 ; Une futur pochette, pour un album futur ?"},
    {src: "images/dessin3.png", caption: "Infos : LOGOKOGË, date : Le 28 Janvier 2026 ; C'est mon logo de pseudo."},
    {src: "images/dessin4.png", caption: "Infos : Pixel cars, date : Le 7 Mars 2026 ; Une lamborghini pixelisé et pleine de couleur."},
    {src: "images/dessin4-BIS.png", caption: "Infos : Pixel cars, date : Le 7 Mars 2026 ; Une lamborghini pixelisé et pleine de couleur."},
    {src: "images/dessin5.png", caption: "Infos : Henri Matisse et ses couleurs, date : Le 7 Mars 2026 ; Seconde Oeuvre de l'ère Photo et Peinture numérique de mon art."},
    {src: "images/dessin6.png", caption: "Infos : Froid, date : Le 8 Mars 2026 ; Un regard froid et plein de haine de Luffy, (One piece)couvert de sang."},
    {src: "images/dessin6-BIS.png", caption: "Infos : Froid, date : Le 8 Mars 2026 ; Un regard froid et plein de haine de Luffy, (One piece)couvert de sang."},
    {src: "images/dessin7.png", caption: "Infos : Fantomania, date : Le 26 Octobre 2025 ; Les fantômes, qui certes n'existent pas, sont quand même fascinant."},
    {src: "images/dessin8.png", caption: "Infos : Cool Flower!, date : Le 1er Janvier 2026 ; Une fleur en couleur tiré d'idée de Remy Demestre et de Henri Matisse."},
    {src: "images/dessin9.png", caption: "Infos : Planoe, date : Le 9 Février 2026 ; Une bande de p'tit gars minuscule qui vivent dans le CAPITALISME !(#Macron)"}
];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox").style.display = "block";
    showSlide(currentIndex);
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeSlide(n) {
    currentIndex += n;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    showSlide(currentIndex);
}

function showSlide(index) {
    const img = document.getElementById("lightbox-img");
    img.src = images[index].src;
    document.getElementById("caption").innerText = images[index].caption;
}