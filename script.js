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

window.onload = function () {
    const footerElement = document.createElement("footer");
    footerElement.innerHTML = `<p>&copy; ${new Date().getFullYear()} <u>Designed</u> and <u>Coded</u> with ❤️ by Sourav Chakraborty</p>`;
    document.body.appendChild(footerElement);
}