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


let request = new XMLHttpRequest();

request.open('GET', 'sorry_data.json', true);

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
        console.log(sorryFri);
        console.log(sorrySat);
        console.log(sorrySun);
        console.log(sorryMon);
        console.log(sorryTue);
        console.log(sorryWed);
        console.log(sorryThu);

        //gives you day of week
        console.log(sorryFri[0].day);

        addDivDays(sorryFri);

        //when mouse is on the date or arrow, change hover colors
        // dateArrow = document.getElementById("date-arrow");
        // dateArrow.addEventListener("mouseover", hoverColor);


        // dateArrow.addEventListener('click', () => {
        //     clearDiv();
        //     addDivDays(sorrySat);
        // });

        let dateArrow = document.getElementById("date-arrow");


        //compare json index with inner html, if same do function
        //if key.date is x day then perform addDivDays(xday)

        //friday switch to sat
        let sep13JSON = sorryFri[0].date;
        let sep13HTML = document.getElementById("date").innerHTML;
        console.log('date: ' + sep13JSON);
        console.log('sep13: ' + sep13HTML);

        if (sep13JSON === sep13HTML) {
            dateArrow.addEventListener('click', () => {
                clearDiv();
                addDivDays(sorrySat);

                //sat switch to sun
                let sep14JSON = sorrySat[0].date;
                let sep14HTML = document.getElementById("date").innerHTML;
                console.log('date: ' + sep14JSON);
                console.log('sep14: ' + sep14HTML);
                if (sep14JSON === sep14HTML) {
                    dateArrow.addEventListener('click', () => {
                        clearDiv();
                        addDivDays(sorrySun);
                    });
                }
            });
        }



    } else {
        // We reached our target server, but it returned an error
    }
};

request.onerror = function () {
    //connection error
};

request.send();





////////////////*  FUNCTIONS *////////////////


//CLEAR SORRY'S OF THAT DIV
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

    let sorryCountIndexDiv = document.getElementById("sorry-count-index");

    //for loop to add a div with sorry for each friday array
    for (let i = 0; i < day.length; i++) {
        let h2 = document.createElement("h2");
        h2.innerHTML = 'sorry';
        // console.log(h2);
        sorryCountIndexDiv.appendChild(h2);
    }
}


//ADD FRI DIV BASED OF ARR LENGTH
function friAddDiv() {

    //put sorryFri data into friArray
    let friArr = sorryFri;
    let friDate = (friArr[0].date);
    console.log('friArr:' + friArr);
    console.log(friArr.length);
    console.log(friDate);

    //get date html, add friday date to html
    let sorryDateDiv = document.getElementById("date");
    sorryDateDiv.innerHTML = friDate;

    let sorryCountIndexDiv = document.getElementById("sorry-count-index");
    let sorryCountHolder = document.getElementById("sorry-count-holder");
    //for loop to add a div with sorry for each friday array
    for (let i = 0; i < friArr.length; i++) {
        let h2 = document.createElement("h2");
        h2.innerHTML = 'sorry';
        // console.log(h2);
        sorryCountIndexDiv.appendChild(h2);
    }
}






/* /////////////////// DUMPSTER CODE *///////////////////////

        // ////////// FUNCTION: ADD # OF SORRY H2 BASED ON LENGTH OF ARRAY///////

        // //put sorryFri data into friArray
        // let friArr = sorryFri;
        // console.log('friArr:' + friArr);
        // console.log(friArr.length);

        // let sorryCountIndexDiv = document.getElementById("sorry-count-index");
        // let sorryCountHolder = document.getElementById("sorry-count-holder");
        // //for loop to add a div with sorry for each friday array
        // for(let i = 0; i < friArr.length; i++){
        //     let h2 = document.createElement("h2");
        //     h2.innerHTML = 'sorry. ';
        //     console.log(h2);
        //     sorryCountIndexDiv.appendChild(h2);
        // }


// ON MOUSE OVER CHANGES COLOR TO HOVER COLOR
// function hoverColor(){
//     dateArrow = document.getElementById("date-arrow");

//     dateArrow.style.backgroundImage = "url('assets/hover_right_date_arrow.svg')";
// }

//ADD SAT DIV BASED OF ARR LENGTH
// function satAddDiv() {

//     //put sorrySat data into satArray
//     let satArr = sorrySat;
//     let satDate = (satArr[0].date);
//     console.log('satArr:' + satArr);
//     console.log(satArr.length);

//     //get date html, add friday date to html
//     let sorryDateDiv = document.getElementById("date");
//     sorryDateDiv.innerHTML = satDate;


//     let sorryCountIndexDiv = document.getElementById("sorry-count-index");
//     let sorryCountHolder = document.getElementById("sorry-count-holder");
//     //for loop to add a div with sorry for each sat array
//     for (let i = 0; i < satArr.length; i++) {
//         let h2 = document.createElement("h2");
//         h2.innerHTML = 'sorry';
//         // console.log(h2);
//         sorryCountIndexDiv.appendChild(h2);
//     }

//     //when click on arrow in sat, clear div and go to sunday
//     let dateArrow = document.getElementById("date-arrow");
//     dateArrow.addEventListener('click', () => {
//         clearDiv();
//         sunAddDiv();
//     });
// }

// //ADD SAT DIV BASED OF ARR LENGTH
// function sunAddDiv() {

//     //put sorrySat data into satArray
//     let sunArr = sorrySun;
//     let sunDate = (sunArr[0].date);
//     console.log('sunArr:' + sunArr);
//     console.log(sunArr.length);

//     //get date html, add friday date to html
//     let sorryDateDiv = document.getElementById("date");
//     sorryDateDiv.innerHTML = sunDate;


//     let sorryCountIndexDiv = document.getElementById("sorry-count-index");
//     let sorryCountHolder = document.getElementById("sorry-count-holder");
//     //for loop to add a div with sorry for each sat array
//     for (let i = 0; i < sunArr.length; i++) {
//         let h2 = document.createElement("h2");
//         h2.innerHTML = 'sorry';
//         // console.log(h2);
//         sorryCountIndexDiv.appendChild(h2);
//     }

//     //when click on arrow in sat, clear div and go to sunday
//     let dateArrow = document.getElementById("date-arrow");
//     dateArrow.addEventListener('click', () => {
//         clearDiv();
//         friAddDiv();
//     });
// }
