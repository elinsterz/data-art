document.addEventListener('load', init);

function init() {

}

function openMenu(x) {
    console.log('menu is clicked');
    x.classList.toggle("animate");

    let navbarHR = document.getElementById('navbar-hr');
    let logoMap = document.getElementById('nav-logo-map');
    let navMenu = document.getElementById('nav-menu');

    navMenu.classList.toggle("animateNav");//sliding option if we want
    navMenu.classList.toggle("animateHR");

    if (navMenu.style.display === 'block') {
        navMenu.style.display = 'none';
        document.body.style.backgroundColor = "#E9E9E9";
        navbarHR.style.borderColor = 'black';
        logoMap.src = 'assets/logo/trash_map_logo_black_2x.png';
    } else {
        navMenu.style.display = 'block';
        document.body.style.backgroundColor = "black";
        navbarHR.style.borderColor = 'white';
        logoMap.src = 'assets/logo/trash_map_logo_white_2x.png';
    }

}


