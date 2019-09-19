let treedata;

function setup(){
    createCanvas(600,600);
    background(200);
    loadJSON('data/HemlockData.json', callback);    
}

function draw(){
    background(230);
    push();
    translate(40, height/2);
    drawMarkers();
    drawViz();
    pop();

    line(40,0,40,height/2+100);
}

function callback(data) {
    console.log('done loading data');
    // console.log(data);
//    treedata = data;

    if(treedata){
        for(let i = 0 ; i<treedata.length; i ++){
            // console.log(treedata[i]);
            let year= treedata[i].year;
            let rawRingWidth = treedata[i]['RawRingWidth_mm'];
            let growthIndex = treedata[i].GrowthIndex;
            // console.log(year, rawRingWidth, growthIndex);
        }
    }
    //drawViz();
}

function drawViz(){
        beginShape();
    for(let i = 0; i < treedata.length; i++){
        let nSize = map(treedata[i]['RawRingWidth_mm'], 0, 1.5, 0,100);
        //push();
        //translate(i,height/2);
        stroke(230,0,0,130);
        vertex(i, 100-nSize)
        noFill();
        //pop();
    }
        endShape();

        beginShape();
    for(let i = 0; i < treedata.length; i++){
        let nSize = map(treedata[i]['GrowthIndex'], 0, 1.5, 0,100);
        //push();
        //translate(i,height/2);
        stroke(0,0,230,130);
        vertex(i, 100-nSize)
        noFill();
        //pop();
    }
        endShape();
}

function drawMarkers(){
    line(0,100, width-100, 100);
    noStroke();
    fill(230,0,0);
    ellipse(0, 150, 10,10);
    fill(0,0,230);
    ellipse(0, 170, 10,10);

    strokeWeight(1);
    stroke(0);
    noFill();
    text('Raw Ring Width mm',20, 155);
    text('Growth Index',20, 175);

    
}
