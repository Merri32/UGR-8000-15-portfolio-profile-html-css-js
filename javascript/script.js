const nav = document.querySelector('nav');
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');

for (let i = 0; i < 3; i++) {
    const line = document.createElement('div');
    hamburger.appendChild(line);
}

nav.insertBefore(hamburger, nav.firstChild);

hamburger.addEventListener('click', () => {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('active');
});