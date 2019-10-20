let data;
let word = 'die';
let kwic;
let beforeWordArr = []; //new array that the before words get pushed into in for loop
let afterWordArr = []; //new array that the after words get pushed into in for loop

function setup() {
    data = loadStrings('data/sexton_poems_all.txt', init);
    // loadJSON('data/sylviasdeath.json', init);
}


function init() {
    console.log('loaded data: ' + data);

    let bttnWord = document.getElementById('bttn-word');
    bttnWord.addEventListener('click', function () {
        findkwic(data, word);
        console.log('clicked!');
    });
}

/////** ADD RESULTS TO RESULTS DIV */
function appendDiv(arr) {

    // console.log("beforeWordArr[0]: "+ beforeWordArr[0]);
    // console.log("beforeWordArr[1]: "+ beforeWordArr[1]);
    // console.log("beforeWordArr[2]: "+ beforeWordArr[2]);
    console.log('kwic.length in appenddiv: ' + kwic.length);

    // for (let j = 0; j < kwic.length; j++) {
    //     console.log("arr[i]: " + arr[j]);
    //     document.getElementById('search-results-div').innerHTML = arr[j];
    // }


    for(let i = 0; i < kwic.length; i++){
        let node = document.createElement("p"); //create new node/element
        let textnode = document.createTextNode(arr[i]); //create text node
        console.log("arr[i]: "+ arr[i]);
        let newElement = node.appendChild(textnode); //append text node to node
        // document.getElementById("search-results-div").innerHTML = newElement;
        document.getElementById("search-results-div").appendChild(newElement); //append new div to div
    }
}


function findkwic(data, word) {
    kwic = RiTa.kwic(data.join('\n'), word, {
        // ignoreStopWords: true,
        ignoreCase: true,
        ignorePunctuation: true,
        wordCount: 3
    });

    console.log('data in function: ' + data);
    console.log('kwic.length: ' + kwic.length);
    console.log("beforeWordArr: " + beforeWordArr);
    console.log("afterWordArr: " + afterWordArr);

    console.log("beforeWordArr.length: " + beforeWordArr.length);

    beforeWordArr = [];
    //find the parts, pops the word, breaks down the array into 2 sections (before, after word)
    for (let i = 0; i < kwic.length; i++) {
        // console.log('kwic.length: ' + kwic.length);
        // console.log('kwic[i]: '+ kwic[i]);

        let parts = kwic[i].split(word); //parts is all the sentences that contain the word selected (doesn't include word)
        console.log('parts: ' + parts);

        let beforeWord = parts[0];
        // let afterWord = parts[1];
        console.log('before word:' + beforeWord);
        beforeWordArr.push(beforeWord); //push before words into array

        // for (let j = 0; j < kwic.length; j++) {
        //     console.log("arr[i]: " + arr[j]);
        //     document.getElementById('search-results-div').innerHTML = arr[j];
        // }
        // console.log('word:' + word);
        // console.log('after word:' + afterWord);

        //beforeWordArr.push(parts[0]); //push before words into array
        //afterWordArr.push(parts[1]);  //push after words into array
    }
    appendDiv(beforeWordArr);
    // document.getElementById('search-results-div').innerHTML = beforeWordArr;
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