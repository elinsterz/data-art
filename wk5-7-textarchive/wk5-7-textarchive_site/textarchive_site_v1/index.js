let aboutBar;
let sideMenu;
let titelContainer;


function init() {
    aboutBar = document.getElementById("about-container");
    aboutBar.addEventListener('click', toggleMenu);
    console.log('about bar clicked!');
}


function toggleMenu() {
    aboutBar = document.getElementById("about-container");
    sideMenu = document.getElementById("side-menu-container");
    titleContainer = document.getElementById("title-container");

    if (sideMenu.style.visibility === "hidden") {
        sideMenu.style.visibility = "visible";
        aboutBar.style.backgroundColor = '#2e2e2e';
        console.log('show menu');
    } else {
        sideMenu.style.visibility = "hidden";
        console.log('hide menu');
        aboutBar.style.backgroundColor = 'black';
    }

    if (titleContainer.style.display === 'block') {
        titleContainer.style.display = 'none';
    } else {
        titleContainer.style.display = 'block';
    }
}





////LOAD////
window.addEventListener('load', init);