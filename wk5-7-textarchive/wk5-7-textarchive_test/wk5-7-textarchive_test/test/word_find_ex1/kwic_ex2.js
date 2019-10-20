var txt = [];

function preload() {

    var files = ['allmyprettyones.txt', 'herkind.txt'];
    for (var i = 0; i < files.length; i++) {
        txt[i] = loadStrings('data/' + files[i]);
    }
}

function setup() {

    createCanvas(600, 600);

    var alltext = '';
    for (var i = 0; i < txt.length; i++) {
        alltext += txt[i].join('\n');
    }

    // var lines = RiTa.kwic(alltext, word, {
    //     ignoreStopWords: false,
    //     ignoreCase: false,
    //     ignorePunctuation: false,
    //     wordCount: 5
    // });

    let die = document.getElementById('die-word');

    var lines = RiTa.kwic(alltext, word, {
        ignorePunctuation: true,
        ignoreStopWords: true,
        wordCount: 6
    });

    for (var i = 0; i < lines.length; i++) {
        text(i + ") " + lines[i], 20, 20 + i * 20);
    }
}