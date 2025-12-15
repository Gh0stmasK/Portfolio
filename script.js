document.getElementById('mobile-menu').onclick = function () {
    document.querySelector('.mobile-menu-overlay').classList.add('active');
    document.querySelector('header').style.backdropFilter = 'none';
    document.querySelector('body,html').style.overflow = 'hidden';
}

document.getElementById('close-btn').onclick = function () {
    document.querySelector('.mobile-menu-overlay').classList.remove('active');
    document.querySelector('header').style.backdropFilter = 'blur(30px)';
    document.querySelector('body,html').style.overflow = 'auto';
}