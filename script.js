document.getElementById('mobile-menu').onclick = function () {
    document.querySelector('.mobile-menu-overlay').classList.add('active');
}

document.getElementById('close-btn').onclick = function () {
    document.querySelector('.mobile-menu-overlay').classList.remove('active');
}