function toggleMode() {
    var circle = document.querySelector('.circle');
    var sunIcon = document.querySelector('.sun-icon');
    var moonIcon = document.querySelector('.moon-icon');
    var slideContainer = document.querySelector('.slide-container');

    document.body.classList.toggle('dark-mode');

    var isDarkMode = document.body.classList.contains('dark-mode');
    circle.style.transform = isDarkMode ? 'translateX(30px)' : 'translateX(0)';
    slideContainer.style.backgroundColor = isDarkMode ? '#333' : '#ddd';

    sunIcon.style.opacity = isDarkMode ? 0 : 1;
    moonIcon.style.opacity = isDarkMode ? 1 : 0;
}