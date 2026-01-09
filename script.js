function mudouTamanho() {
    console.log("A janela foi redimensionada para: " + window.innerWidth + "x" + window.innerHeight);
    

}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        // Remove o estilo 'display: block/none' adicionado pelo JS
        document.querySelector('.menu').style.display = ''; 
    }
});



