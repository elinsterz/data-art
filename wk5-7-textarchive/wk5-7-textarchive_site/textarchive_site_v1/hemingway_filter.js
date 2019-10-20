let data;
let word = 'death';
let kwic;
let beforeWordArr = []; //new array that the before words get pushed into in for loop
let afterWordArr = []; //new array that the after words get pushed into in for loop

function setup() {
    data = loadStrings('data/hemingway_all.txt', init);
}

function init() {
    console.log('loaded data: ' + data);
}

/////////////////* FIND KWIC RITA FUNCTION *//////////////////
function findkwic(word) {
    kwic = RiTa.kwic(data.join('\n'), word, {
        ignoreStopWords: false,
        ignoreCase: false,
        ignorePunctuation: false,
        wordCount: 4
    });

    console.log('data in function: ' + data);
    console.log('kwic.length: ' + kwic.length);
    console.log("beforeWordArr: " + beforeWordArr);
    console.log("afterWordArr: " + afterWordArr);
    console.log("beforeWordArr.length: " + beforeWordArr.length);

    //clear is necessary to not have it duplicate the array each time it goes through function
    beforeWordArr = [];
    afterWordArr = [];

    //find the parts, pops the word, breaks down the array into 2 sections (before, after word)
    for (let i = 0; i < kwic.length; i++) {
        // console.log(display[i]);
        let parts = kwic[i].split(word); //parts is all the sentences that contain the word selected
        console.log('parts: ' + parts);

        //push before words into array before words
        console.log('parts[0]: ' + parts[0]);
        beforeWordArr.push(parts[0]);

        console.log('word: ' + word);

        //push after words into array after words
        console.log('parts[1]: ' + parts[1]);
        afterWordArr.push(parts[1]);
    }

    console.log('beforeWordArr[]: ' + beforeWordArr);
    console.log('afterWordArr[]: ' + afterWordArr);

    //HACK ALERT! THE BELOW CODE IS TO COMBAT WEIRD RITA GLITCH OF DUPLICATING THE PARTS[0] WHEN APPENDING CHILD
    document.getElementById('search-results-div').innerHTML = "";

    //append child and make a div for each element in the before word array 
    for (let j = 0; j < kwic.length; j++) {

        let node = document.createElement("p");
        var textnode = document.createTextNode(beforeWordArr[j] + " " + word + afterWordArr[j]);
        node.appendChild(textnode);
        let appendText = document.getElementById("search-results-div").appendChild(node);
        appendText.className = "found-kwic"; //add class style to this newly appended text

        let divnode = document.createElement("div");
        let appendDiv = appendText.appendChild(divnode);
        appendDiv.className = 'divnode';
        // document.getElementById("search-results-div").innerHTML = beforeWordArr;

        console.log("kwic.length: " + kwic.length);
        let searchResults = document.getElementById("search-results-h3");
        searchResults.innerHTML = word + "  |  " + kwic.length;
    }
    //beforeWordArr = []
}


///////////////////* LOAD *////////////////////
window.addEventListener('load', init);




/////////////////////* DUMPSTER /////////////////
//supposed to change color of the search word
// let foundWord = word;
// for (let k = 0; k < kwic.length; k++) {
//     console.log("foundword: " + foundWord);
//     foundWord.classList.remove('divnode');
//     foundWord.className = "found-word";
// }
// */

//    // buttons for test code
    // let bttnWord = document.getElementById('bttn-word'); 
    // bttnWord.addEventListener('click', function () {
    //     findkwic(data, word);
    //     console.log('clicked!');
    // });