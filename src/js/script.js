document.addEventListener("DOMContentLoaded", function() {
    var scrollLinks = document.querySelectorAll('.scroll-link');

    scrollLinks.forEach(function(scrollLink) {
        scrollLink.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = scrollLink.getAttribute('href');
            var targetPosition = document.querySelector(targetId).offsetTop;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});

function showMenu() {
    var div = document.getElementById('menu-items');

    if (div.classList.contains('animate-left')) {
        div.classList.remove('animate-left');
        document.body.style.overflow = 'auto';
        div.classList.add('animate-right');
    } else {
        div.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        div.classList.remove('animate-right');
        div.classList.add('animate-left');
    }
}

