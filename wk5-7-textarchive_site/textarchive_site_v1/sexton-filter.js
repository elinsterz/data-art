let data;
let word = 'death';
let kwic;
let beforeWordArr = []; //new array that the before words get pushed into in for loop
let afterWordArr = []; //new array that the after words get pushed into in for loop

function setup() {
    data = loadStrings('data/sexton_poems_all.txt', init);
    // loadJSON('data/sylviasdeath.json', init);
}


function init() {
    console.log('loaded data: ' + data);

    // let bttnWord = document.getElementById('bttn-word');
    // bttnWord.addEventListener('click', function () {
    //     findkwic(data, word);
    //     console.log('clicked!');
    // });
}

/////////* FIND KWIC RITA FUNCTION *//////////
function findkwic(word) {
    kwic = RiTa.kwic(data.join('\n'), word, {
        ignoreStopWords: false,
        ignoreCase: false,
        ignorePunctuation: true,
        wordCount: 5
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

        console.log('word: '+ word);

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
    }
    //beforeWordArr = []
}

///////////* LOAD *////////////
window.addEventListener('load', init);







////////////* DUMPSTER BUT HESITANT TO DELETE *//////////

    // let paragraph = document.createElement('p');
    // paragraph.innerHTML = parts[0];
    // let resultsDiv = document.getElementById('search-results-div');

    // resultsDiv.innerHTML = beforeWord;



    // for (let i = 0; i < kwic.length; i++) {
    //     let newP = document.createElement('p'); //create p tag
    //     let resultsDiv = document.getElementById('search-results-div')
    //     resultsDiv.appendChild(newP);

    //     resultsDiv.innerHTML = beforeWordArr;

    //     console.log('newP: '+ newP);
    //     console.log("beforeWordArr[i]: " + beforeWordArr[i]);
    //     //document.getElementById('search-results-div').innerHTML = beforeWordArr[i];
    // }

        // console.log("beforeWordArr[0]: "+ beforeWordArr[0]);
    // console.log("beforeWordArr[1]: "+ beforeWordArr[1]);
    // console.log("beforeWordArr[2]: "+ beforeWordArr[2]);

    // for(let i = 0; i < kwic.length; i++){
    //     let node = document.createElement("div");
    //     let textnode = document.createTextNode(beforeWordArr[i]);
    //     node.appendChild(textnode);
    //     document.getElementById("search-results-div").appendChild(node);
    // }
/////** ADD RESULTS TO RESULTS DIV */
// function appendDiv(arr) {

//     // console.log("beforeWordArr[0]: "+ beforeWordArr[0]);
//     // console.log("beforeWordArr[1]: "+ beforeWordArr[1]);
//     // console.log("beforeWordArr[2]: "+ beforeWordArr[2]);
//     console.log('kwic.length in appenddiv: ' + kwic.length);

//     for (let j = 0; j < kwic.length; j++) {
//         console.log("arr[i]: " + arr[j]);
//         document.getElementById('search-results-div').innerHTML = arr[j];
//     }


//     // for(let i = 0; i < kwic.length; i++){
//     //     let node = document.createElement("p"); //create new node/element
//     //     let textnode = document.createTextNode(arr[i]); //create text node
//     //     console.log("arr[i]: "+ arr[i]);
//     //     let newElement = node.appendChild(textnode); //append text node to node
//     //     document.getElementById("search-results-div").innerHTML = newElement;
//     //     //document.getElementById("search-results-div").appendChild(node); //append new div to div
//     // }
// }
