//array for full sorry data
let sorryData = [];

//array per day
let sorryFri = [];
let sorrySat = [];
let sorrySun = [];
let sorryMon = [];
let sorryTue = [];
let sorryWed = [];
let sorryThu = [];

let friArr = [];

//get dom elements
let dateP;
let sorryCountIndexDiv;
let sorryCountHolder;
let dateArrow;
let randomAudio;


let request = new XMLHttpRequest();

request.open('GET', 'sorry_data.json', true);

//RUN CODE 
request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        //Success!
        let data = JSON.parse(request.responseText);
        //console.log('data', data);
        //sorryData.concat(data);

        // FUNCTION: MAKE AN ARRAY FOR EACH DAY
        data.forEach(function (key, index) {
            // sorryData.push(key);

            //if key.day is x day, push all keys into x day's array
            if (key.day === 'Friday') {
                sorryFri.push(key);
            }

            if (key.day === 'Saturday') {
                sorrySat.push(key);
            }

            if (key.day === 'Sunday') {
                sorrySun.push(key);
            }

            if (key.day === 'Monday') {
                sorryMon.push(key);
            }

            if (key.day === 'Tuesday') {
                sorryTue.push(key);
            }

            if (key.day === 'Wednesday') {
                sorryWed.push(key);
            }

            if (key.day === 'Thursday') {
                sorryThu.push(key);
            }

        });
        // console.log(sorryFri);
        // console.log(sorrySat);
        // console.log(sorrySun);
        // console.log(sorryMon);
        // console.log(sorryTue);
        // console.log(sorryWed);
        // console.log(sorryThu);

        //gets me the why of index 0 of Friday
        console.log("why: " + sorryFri[0].why);

        backwardDates();
        forwardDates();

    } else {
        // We reached our target server, but it returned an error
    }
};

request.onerror = function () {
    //connection error
};

request.send();

////////////////////////*  FUNCTIONS *////////////////////////

//GOING FORWARD IN DATES 
function forwardDates() {

    //gives you day of week
    console.log(sorryFri[0].day);

    clearDiv(sorryFri);
    addDivDays(sorryFri);

    let dateRightArrow = document.getElementById("date-right-arrow");

    //compare json index with inner html, if same do function
    //if key.date is x day then perform addDivDays(xday)

    //friday switch to sat
    let sep13JSON = sorryFri[0].date;
    let sep13HTML = document.getElementById("date").innerHTML;
    console.log('date: ' + sep13JSON);
    console.log('sep13: ' + sep13HTML);

    if (sep13JSON === sep13HTML) {
        dateRightArrow.addEventListener('click', () => {
            clearDiv();
            addDivDays(sorrySat);

            //sat switch to sun
            let sep14JSON = sorrySat[0].date;
            let sep14HTML = document.getElementById("date").innerHTML;
            if (sep14JSON === sep14HTML) {
                dateRightArrow.addEventListener('click', () => {
                    clearDiv();
                    addDivDays(sorrySun);

                    //sun switch to mon
                    let sep15JSON = sorrySun[0].date;
                    let sep15HTML = document.getElementById("date").innerHTML;
                    if (sep15JSON === sep15HTML) {
                        dateRightArrow.addEventListener('click', () => {
                            clearDiv();
                            addDivDays(sorryMon);

                            //mon switch to tues
                            let sep16JSON = sorryMon[0].date;
                            let sep16HTML = document.getElementById("date").innerHTML;
                            if (sep16JSON === sep16HTML) {
                                dateRightArrow.addEventListener('click', () => {
                                    clearDiv();
                                    addDivDays(sorryTue);

                                    //tue switch to wed
                                    let sep17JSON = sorryTue[0].date;
                                    let sep17HTML = document.getElementById("date").innerHTML;
                                    if (sep17JSON === sep17HTML) {
                                        dateRightArrow.addEventListener('click', () => {
                                            clearDiv();
                                            addDivDays(sorryWed);

                                            //wed switch to thu
                                            let sep18JSON = sorryWed[0].date;
                                            let sep18HTML = document.getElementById("date").innerHTML;
                                            if (sep18JSON === sep18HTML) {
                                                dateRightArrow.addEventListener('click', () => {
                                                    clearDiv();
                                                    addDivDays(sorryThu);
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
}

// GOING BACKWARD IN DATES 
function backwardDates() {

    //gives you day of week
    console.log(sorryThu[0].day);

    addDivDays(sorryThu);

    let dateLeftArrow = document.getElementById("date-left-arrow");

    //compare json index with inner html, if same do function
    //if key.date is x day then perform addDivDays(xday)

    //thu switch to wed
    let sep19JSON = sorryThu[0].date;
    let sep19HTML = document.getElementById("date").innerHTML;
    console.log('date: ' + sep19JSON);
    console.log('sep19: ' + sep19HTML);

    if (sep19JSON === sep19HTML) {
        dateLeftArrow.addEventListener('click', () => {
            clearDiv();
            addDivDays(sorryWed);

            //wed switch to tues
            let sep18JSON = sorryWed[0].date;
            let sep18HTML = document.getElementById("date").innerHTML;
            if (sep18JSON === sep18HTML) {
                dateLeftArrow.addEventListener('click', () => {
                    clearDiv();
                    addDivDays(sorryTue);

                    //tues switch to mon
                    let sep17JSON = sorryTue[0].date;
                    let sep17HTML = document.getElementById("date").innerHTML;
                    if (sep17JSON === sep17HTML) {
                        dateLeftArrow.addEventListener('click', () => {
                            clearDiv();
                            addDivDays(sorryMon);

                            //mon switch to sun
                            let sep16JSON = sorryMon[0].date;
                            let sep16HTML = document.getElementById("date").innerHTML;
                            if (sep16JSON === sep16HTML) {
                                dateLeftArrow.addEventListener('click', () => {
                                    clearDiv();
                                    addDivDays(sorrySun);

                                    //sun switch to sat
                                    let sep15JSON = sorrySun[0].date;
                                    let sep15HTML = document.getElementById("date").innerHTML;
                                    if (sep15JSON === sep15HTML) {
                                        dateLeftArrow.addEventListener('click', () => {
                                            clearDiv();
                                            addDivDays(sorrySat);

                                            //sat switch to fri
                                            let sep14JSON = sorrySat[0].date;
                                            let sep14HTML = document.getElementById("date").innerHTML;
                                            if (sep14JSON === sep14HTML) {
                                                dateLeftArrow.addEventListener('click', () => {
                                                    clearDiv();
                                                    addDivDays(sorryFri);
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
}


//CLEAR SORRY'S OF THE PREVIOUS DIV
function clearDiv() {
    let sorryDateDiv = document.getElementById("date");
    document.getElementById(sorryDateDiv.innerHTML = "");

    let sorryCountIndexDiv = document.getElementById("sorry-count-index");
    document.getElementById(sorryCountIndexDiv.innerHTML = "");
}


//TEMPLATE FUNCTION FOR ALL DAYS: ADD DIV BASED OF ARR LENGTH
function addDivDays(day) {

    //put sorryFri data into friArray
    let dayArr = day;
    let sorryDate = (dayArr[0].date);

    // console.log('day:' + day);
    // console.log('sorryDate: ' + sorryDate);
    // console.log(day.length);

    //get date html, add friday date to html
    let sorryDateDiv = document.getElementById("date");
    sorryDateDiv.innerHTML = sorryDate;

    //get length of array for that day
    let sorryLength = (dayArr.length);
    //console.log('sorry length: ' + sorryLength);

    //var for all the getElements
    let sorryCountIndexDiv = document.getElementById("sorry-count-index");
    let sorryInfoIndex = document.getElementById('sorry-info-index');
    let sorryInfoP = document.getElementById('sorry-info-p');

    //put the total amount of sorry in "sorry-info-p" div
    sorryInfoIndex.innerHTML = "I said sorry " + sorryLength + " times today";

    //hide sorry info p and hr
    sorryInfoP.style.visibility = "hidden";

    let sorryInfoLoc = document.getElementById('sorry-info-location');
    sorryInfoLoc.style.visibility = "hidden";

    //for loop to add a div with sorry for each friday array
    for (let i = 0; i < day.length; i++) {

        //example stack overflow of how to set attribute to element created
        // g = document.createElement('div');
        // g.setAttribute("id", "Div1");

        let h2 = document.createElement("h2");
        h2.innerHTML = 'sorry';

        h2.setAttribute("id", "head" + i)
        sorryCountIndexDiv.appendChild(h2);
        //console.log(h2);

        //get why
        //console.log("why:" + day[i].why);
        //get time 
        //console.log("time:" + day[i].time);

        //assign sorryH2 as attribute for each h2 
        let sorryH2 = document.getElementById('head' + i);
        //console.log('head' + i);
        //console.log(sorryH2);

        //event listeners for mouse over + out
        sorryH2.addEventListener('mouseover', hoverShowInfo);
        sorryH2.addEventListener('mouseout', hideInfo)

        //events when mouse over a sorry
        function hoverShowInfo() {
            let sorryInfoP = document.getElementById('sorry-info-p');
            let sorryInfoIndex = document.getElementById('sorry-info-index');
            let sorryInfoLoc = document.getElementById('sorry-info-location');

            // console.log(h2Index);
            //console.log('mouseon working!');

            //show visibility, show why data
            sorryInfoP.style.visibility = "visible";
            sorryInfoP.innerHTML = day[i].why;

            //show visibility, show location data
            sorryInfoLoc.style.visibility = "visible";
            sorryInfoLoc.innerHTML = day[i].where;

            //show, show why data
            sorryInfoP.style.visibility = "visible";

            //change color of sorry to be blue
            sorryH2.style.color = "#002B9C";

            //change time
            sorryInfoIndex.innerHTML = day[i].time;

            //play audio
            var audio_files = [
                    "assets/sound/Sorry1.mp3",
                    "assets/sound/Sorry2.mp3",
                    "assets/sound/Sorry3.mp3",
                    "assets/sound/Sorry4.mp3",
                    "assets/sound/Sorry5.mp3",
                    "assets/sound/Sorry6.mp3",
                    "assets/sound/Sorry7.mp3"
            ]

            var random_file = audio_files[Math.floor(Math.random() * audio_files.length)];

            var audio = new Audio(random_file);

            audio.play();
        }

        //event when mouse off a sorry
        function hideInfo() {
            //change color of sorry to be gray again
            sorryH2.style.color = "#818181";
            sorryInfoP.style.visibility = "hidden";
            sorryInfoLoc.style.visibility = "hidden";

            //put the total amount of sorry in "sorry-info-p" div
            sorryInfoIndex.innerHTML = "I said sorry " + sorryLength + " times today";
        }
    }
}


///////* DUMPSTER CODE *////////
// //play audio 
// let audio1 = document.getElementById("audio1");
// let audio2 = document.getElementById("audio2");
// let audio3 = document.getElementById("audio3");
// let audio4 = document.getElementById("audio4");
// let audio5 = document.getElementById("audio5");
// let audio6 = document.getElementById("audio6");
// let audio7 = document.getElementById("audio7");
// let audio8 = document.getElementById("audio8");

// let audioArray = [ 
//      audio1, audio2,audio3, audio4, audio5, audio6, audio7, audio8
// ];

// //console.log(audio0);

// let randomAudio = audioArray[Math.floor(Math.random()*audioArray.length)];
// console.log(randomAudio);
// randomAudio.play();

//play audio
// var audio_files = [
//     document.getElementById("audio1"),
//     document.getElementById("audio2"),
//     document.getElementById("audio3"),
//     document.getElementById("audio4"),
//     document.getElementById("audio5"),
//     document.getElementById("audio6"),
//     document.getElementById("audio7")
// ]

//play audio
// var audio_files = [
//     "assets/sound/Sorry1.mp3",
//     "assets/sound/Sorry2.mp3",
//     "assets/sound/Sorry3.mp3",
//     "assets/sound/Sorry4.mp3",
//     "assets/sound/Sorry5.mp3",
//     "assets/sound/Sorry6.mp3",
//     "assets/sound/Sorry7.mp3"
// ]