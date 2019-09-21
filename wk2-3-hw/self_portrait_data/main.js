window.addEventListener('load', init);

//audio file
let myAudio = new Audio('assets/sound/placeholder_guitar.mp3');

function init() {
    //id for play button
    let audioButton = document.getElementById('pButton'); 

    //when play button is clicked, perform play function
    audioButton.addEventListener('click', playSorry);
}


function playSorry() {
    //id for play button
    let audioButton = document.getElementById('pButton'); 

    // if audio paused then play
    if(myAudio.paused){
        myAudio.play();
        //remove play button, add pause
        audioButton.className = '';
        audioButton.className = 'pause';
    } else {
        myAudio.pause();
        // remove pause button, add play
        audioButton.className = '';
        audioButton.className = 'play';
    }
}

