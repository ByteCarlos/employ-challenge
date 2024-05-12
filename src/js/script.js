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
