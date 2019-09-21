let sorryData = [];

let request = new XMLHttpRequest();

request.open('GET', 'sorry_data.json', true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        //Success!
        let data = JSON.parse(request.responseText);
        //console.log('data', data);
        //sorryData.concat(data);

        let sorryThu = [];

        data.forEach(function (key, index) {
            sorryData.push(key);

            // console.log(key.day); 
            // console.log(key.date); 

            //if key.day is Monday, push all keys into Monday array
            if(key.day === 'Thursday'){
                let sorryThu = [];
                sorryThu.push(key.day);
                console.log(sorryThu);
            }

        });
        //console.log(sorryData[0]);
    } else {
        // We reached our target server, but it returned an error
    }
};

request.onerror = function () {
    //connection error
};

request.send();
