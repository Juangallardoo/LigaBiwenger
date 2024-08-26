document.addEventListener('DOMContentLoaded', function() {
    let newsItems = document.querySelectorAll('.news-item');
    let currentIndex = 0;

    function showNextNews() {
        // Ocultar todas las noticias
        newsItems.forEach(item => item.style.display = 'none');
        
        // Mostrar la siguiente noticia
        newsItems[currentIndex].style.display = 'block';
        
        // Actualizar el índice para la siguiente iteración
        currentIndex = (currentIndex + 1) % newsItems.length;
    }

    // Inicializa mostrando la primera noticia
    showNextNews();

    // Cambia de noticia cada 3 segundos
    setInterval(showNextNews, 3000);
});
