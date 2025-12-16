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

const copyButton1 = document.getElementById('copy-btn-1');
const textToCopy1 = document.getElementById('email');

copyButton1.addEventListener('click', () => {
    const contentToCopy = textToCopy1.textContent || textToCopy1.innerText;
    navigator.clipboard.writeText(contentToCopy)
        .then(() => {
            console.log('Text successfully copied to clipboard');
            alert('Email copied!');
        })
        .catch(err => {
            console.error('Unable to copy text: ', err);
            alert('Failed to copy text. Please copy manually.');
        });
});

const copyButton2 = document.getElementById('copy-btn-2');
const textToCopy2 = document.getElementById('phone');

copyButton2.addEventListener('click', () => {
    const contentToCopy = textToCopy2.textContent || textToCopy2.innerText;
    navigator.clipboard.writeText(contentToCopy)
        .then(() => {
            console.log('Text successfully copied to clipboard');
            alert('Phone number copied!');
        })
        .catch(err => {
            console.error('Unable to copy text: ', err);
            alert('Failed to copy text. Please copy manually.');
        });
});



const themeIcon = document.querySelector('.theme-icon');
themeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.src = 'Assets/lightmodeIcon.svg';
        document.querySelectorAll('.svg-adjust').forEach((element) => {
            element.setAttribute('fill', 'white');
        });
    } else {
        themeIcon.src = 'Assets/DarkmodeIcon.svg';
        document.querySelectorAll('.svg-adjust').forEach((element) => {
            element.setAttribute('fill', 'black');
        });
    }
});


const themeIcon2 = document.querySelector('.theme-icon-2');
themeIcon2.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeIcon2.src = 'Assets/lightmodeIcon.svg';
        document.querySelectorAll('.svg-adjust').forEach((element) => {
            element.setAttribute('fill', 'white');
        });
    } else {
        themeIcon2.src = 'Assets/DarkmodeIcon.svg';
        document.querySelectorAll('.svg-adjust').forEach((element) => {
            element.setAttribute('fill', 'black');
        });
    }
});