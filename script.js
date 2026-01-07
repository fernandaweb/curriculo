function mudouTamanho() {
    console.log("A janela foi redimensionada para: " + window.innerWidth + "x" + window.innerHeight);
    

}

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        // Remove o estilo 'display: block/none' adicionado pelo JS
        document.querySelector('.menu').style.display = ''; 
    }
});



window.addEventListener('resize', mudouTamanho);
window.addEventListener('load', mudouTamanho);
window.addEventListener('scroll', mudouTamanho);
window.addEventListener('click', mudouTamanho);
window.addEventListener('mousemove', mudouTamanho);
window.addEventListener('keydown', mudouTamanho);
window.addEventListener('touchstart', mudouTamanho);
window.addEventListener('touchmove', mudouTamanho);
window.addEventListener('touchend', mudouTamanho);
window.addEventListener('focus', mudouTamanho);
window.addEventListener('blur', mudouTamanho);
window.addEventListener('orientationchange', mudouTamanho);
window.addEventListener('visibilitychange', mudouTamanho);
window.addEventListener('beforeunload', mudouTamanho);
window.addEventListener('unload', mudouTamanho);
window.addEventListener('hashchange', mudouTamanho);

