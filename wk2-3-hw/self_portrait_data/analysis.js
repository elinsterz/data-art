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
let sorryAll = [];

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
            // console.log(key);

            // expected output: true

            console.log('sorryAll: ' + sorryAll);

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


        //gets me the why of index 0 of Friday
        console.log("why: " + sorryFri[0].why);

        //1. find how many 'am' in day.time, 2. find how many 'pm' in day.time

        for (let i = 0; i < sorryFri.length; i++) {
            console.log("time: " + sorryFri[i].time);
        }

        


    } else {
        // We reached our target server, but it returned an error
    }
};

request.onerror = function () {
    //connection error
};

request.send();
