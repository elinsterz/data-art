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


let request = new XMLHttpRequest();

request.open('GET', 'sorry_data.json', true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        //Success!
        let data = JSON.parse(request.responseText);
        //console.log('data', data);
        //sorryData.concat(data);

        ////////// FUNCTION: MAKE AN ARRAY FOR EACH DAY ///////
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

        friAddDiv();

        let dateP = document.getElementById("date-holder");
        dateP.addEventListener('click', () => {
            clearDiv();
            satAddDiv();    
        });


    } else {
        // We reached our target server, but it returned an error
    }
};

request.onerror = function () {
    //connection error
};

request.send();


//CLEAR SORRY'S OF THAT DIV
function clearDiv(){
    let sorryCountIndexDiv = document.getElementById("sorry-count-index");
    document.getElementById(sorryCountIndexDiv.innerHTML = "");
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
        h2.innerHTML = 'sorry. ';
        console.log(h2);
        sorryCountIndexDiv.appendChild(h2);
    }
}

//ADD SAT DIV BASED OF ARR LENGTH
function satAddDiv() {

    //put sorrySat data into satArray
    let satArr = sorrySat;
    console.log('satArr:' + satArr);
    console.log(satArr.length);

    let sorryCountIndexDiv = document.getElementById("sorry-count-index");
    let sorryCountHolder = document.getElementById("sorry-count-holder");
    //for loop to add a div with sorry for each sat array
    for (let i = 0; i < satArr.length; i++) {
        let h2 = document.createElement("h2");
        h2.innerHTML = 'sorry. ';
        console.log(h2);
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