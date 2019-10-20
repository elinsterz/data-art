let txt;
let counts = {};
let keys = [];
let allwords = [];

let files = ['wantingtodie.txt', 'allmyprettyones.txt', 'herkind.txt', 'snowwhiteandthesevendwarfs.txt', 'sylviasdeath.txt', 'thetruththedeadknow.txt', 'wintercolony.txt'];

function preload() {
    for (let i = 0; i<files.length; i++){
        txt[i] = loadStrings('files/' + files[i]);
    }

    // txt = loadStrings('wantingtodie.txt');
}

function setup() {
    //let allwords = txt.join("\n");
    
    for(let i = 0; i< txt.length; i++){
        allwords[i] = txt[i].join("\n");
    } 



    let tokens = allwords[0].split(/\W+/);

    for (let i = 0; i < tokens.length; i++) {
        let word = tokens[i].toLowerCase();

        if (!/\d+/.test(word)) {
            if (counts[word] === undefined) {
                counts[word] = 1;
                keys.push(word);
            } else {
                counts[word] = counts[word] + 1;
            }
        }
    }

    keys.sort(compare); //sorts that array alphabetically //pass in function

    function compare(a,b){
        let countA = counts[a];
        let countB = counts[b];
        return countB - countA;
    }

    for (let i = 0; i< keys.length; i++){
       let key = keys[i]; //i is looking up the count of that 
       createDiv(key + " " + counts[key]); 
    }

    // console.log(word);

    noCanvas();
}