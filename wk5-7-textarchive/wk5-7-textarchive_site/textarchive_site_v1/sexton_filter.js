let data;
let word;
let kwic;
let beforeWordArr = []; //new array that the before words get pushed into in for loop
let afterWordArr = []; //new array that the after words get pushed into in for loop

function setup() {
    data = loadStrings('data/sexton_poems_all_no_title.txt', init);
    // loadJSON('data/sylviasdeath.json', init);
}

function init() {
    console.log('loaded data: ' + data);
}

/////////////////* FIND KWIC RITA FUNCTION *//////////////////
function findkwic(word) {

    kwic = RiTa.kwic(data.join('\n'), word, {
        ignoreStopWords: false,
        ignoreCase: true,
        ignorePunctuation: true,
        wordCount: 7
    });

    //if word not found, append text "word not found"
    if (kwic.length == 0) {

        //HACK ALERT! THE BELOW CODE IS TO COMBAT WEIRD RITA GLITCH OF DUPLICATING THE PARTS[0] WHEN APPENDING CHILD
        document.getElementById('search-results-div').innerHTML = "";

        //clear is necessary to not have it duplicate the array each time it goes through function
        beforeWordArr = [];
        afterWordArr = [];
        console.log("word not found");

        let pnode = document.createElement("p");
        var ptextnode = document.createTextNode("Word not found");
        pnode.appendChild(ptextnode);
        let appendNotFound = document.getElementById("search-results-div").appendChild(pnode);
        appendNotFound.className = "found-kwic"; //add class style to this newly appended text

        console.log("kwic.length: " + kwic.length);
        let searchResults = document.getElementById("search-results-h3");
        searchResults.innerHTML = word + "  |  " + kwic.length;

    } else {

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

        //FUNCTION TO CHANGE LINE HEIGHT IF THE RESULT MAKES THE DIV OVER 1024PX///
        let searchResDiv = document.getElementById("search-results-div");
        let foundHeight = searchResDiv.clientHeight;
        console.log('height of search result div: ' + foundHeight);

        if (foundHeight > 0 && foundHeight < 1000) {
            newLineHeight(foundHeight);
        } else if (foundHeight >= 1000) {
            veryHighLineHeight(foundHeight);
        } else {
            setLineHeight();
        }
    }
}

// FUNCTIONS TO CHANGE VERTICAL LINE HEIGHT //

function newLineHeight(foundHeight) {
    let vLineDiv = document.getElementById("bio-div");
    // foundHeight = vLineDiv.offsetHeight;
    let newFoundHeight = foundHeight + 2400;
    vLineDiv.style.height = newFoundHeight + 'px';
    console.log("newFoundHeight: " + newFoundHeight);
}

function veryHighLineHeight(foundHeight) {
    let vLineDiv = document.getElementById("bio-div");
    let highLineHeight = foundHeight + 1200;
    vLineDiv.style.height = highLineHeight + 'px';
    console.log("veryhigLineHeight: " + highLineHeight);
}

function setLineHeight() {
    let vLineDiv = document.getElementById("bio-div");
    vLineDiv.style.height = 2500 + 'px';
    console.log("setLineHeight: " + vLineDiv.style.height);
}