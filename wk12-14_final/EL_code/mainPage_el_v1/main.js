// when the page first loads
window.addEventListener("load", init);
function init() {

    // initiate voice 
    // var myVoice = new p5.Speech(); // new P5.Speech object

    // store API info
    var complaintURL = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough="
    var openDataToken = "" // * INSERT API TOKEN * //

    // variables
    var borough = "BRONX" // set defailt borough to brooklyn
    var boroughChoices = ["BRONX", "BROOKLYN", "QUEENS", "MANHATTAN", "STATEN%20ISLAND"]

    // create API url
    var dataURL = complaintURL + borough + "&$$app_token=" + openDataToken;
    //console.log(dataURL)

    // show default complaints when the page loads
    updateComplaints()

    // access dropdown and add a event listener to it
    var boroughDropdown = document.getElementById("boroughOption");
    boroughDropdown.addEventListener("change", changeBorough);
    //when you select a new borough, update the complaints
    function changeBorough() {
        // stop reading
        //myVoice.stop();

        //remove existing complaints
        for (let i = 0; i < 1000; i++) {
            //console.log("removing")
            var oldComplaint = document.getElementById("theComplaints")
            // document.body.removeChild(oldComplaint);
            oldComplaint.remove();
        }

        // change borough value
        var index = boroughDropdown.value;
        borough = boroughChoices[index];
        // console.log(borough)

        //get documents for dom
        let complaintDiv = document.getElementById('complaintDiv');
        let complaintNav = document.getElementById('complaintNav');
        let injuryDiv = document.getElementById('injuryDiv');
        let injuryNav = document.getElementById('injuryNav');

        //when borough changes, change style + map data
        if (borough === 'BRONX') {
            console.log('bronx')
            bronxMapData();

        } else if (borough === 'MANHATTAN') {
            // for (let el of document.querySelectorAll('.hover-bronx-div')) el.style.visibility = 'hidden';
            console.log('manhattan')
            complaintDiv.style.backgroundColor = "#D4C0B4";
            complaintNav.style.backgroundColor = "#D4C0B4";
            injuryNav.style.backgroundColor = "#F1E9E4";
            injuryDiv.style.backgroundColor = "#F1E9E4";
            mapImg.src = "/assets/maps/191204_Manhanttan_Injuries_v1.png"

        } else if (borough === 'BROOKLYN') {
            console.log('brookyln')

            for (let el of document.querySelectorAll('.hover-bronx-div')) el.style.block = 'none';
            for (let el of document.querySelectorAll('.hover-brooklyn-div')) el.style.visibility = 'visible';

            brooklynMapData();
        } else if (borough === 'QUEENS') {
            console.log('queens')
            complaintDiv.style.backgroundColor = "#E7DB75";
            complaintNav.style.backgroundColor = "#E7DB75";
            injuryNav.style.backgroundColor = "#F2F1D9";
            injuryDiv.style.backgroundColor = "#F2F1D9";
            mapImg.src = "/assets/maps/191204_Queen_Injuries_v2.png"
        } else if (borough === 'STATEN%20ISLAND') {
            console.log('staten island')
            complaintDiv.style.backgroundColor = "#D0B4C0";
            complaintNav.style.backgroundColor = "#D0B4C0";
            injuryNav.style.backgroundColor = "#E4D9DE";
            injuryDiv.style.backgroundColor = "#E4D9DE";
            mapImg.src = "/assets/maps/191204_StatenIsland_Injuries_v3.png"
        }

        //add new complaints
        updateComplaints();
    }


    // load complaint data 
    function updateComplaints() {
        dataURL = complaintURL + borough + "&$$app_token=" + openDataToken;
        (d3.json(dataURL)).then(data => {
            // place raw data into object (we only want to use, date, agency, type, descriptor)
            const complaints = data;

            // for each complain, create string to print and add it to a concatinated string
            var totalComplaints = ""
            complaints.forEach(complaint => {
                var date = complaint.created_date;
                var agency = complaint.agency; // or agency_name
                var type = complaint.complaint_type;
                var descriptor = complaint.descriptor;
                // var sent = "On " + date + " a complaint was made to the " + agency + " regarding " + type + " - " + descriptor;
                var sent = agency + " received a complaint regarding " + type + " - " + descriptor + ".  ";
                //var sent = agency + ": " + type + " - " + descriptor + ".  ";
                //complaint.toPrint = sent;
                totalComplaints += sent + ".  ";

                // create a new paragraph for each complaint
                var complaintDiv = document.getElementById("complaintDiv")
                var newComplaint = document.createElement('p');
                newComplaint.innerHTML = sent;
                newComplaint.id = "theComplaints";
                if (agency === "DSNY") {
                    newComplaint.style.color = "black";
                }
                complaintDiv.appendChild(newComplaint)
            })

            //start reading
            //myVoice.speak(totalComplaints);

            // access paragraph element
            // var para = document.getElementById("paragraphComplaints");
            // para.innerHTML = paraComplaints;   
        })

    }



    //get documents for dom
    let complaintDiv = document.getElementById('complaintDiv');
    let complaintNav = document.getElementById('complaintNav');
    let injuryDiv = document.getElementById('injuryDiv');
    let injuryNav = document.getElementById('injuryNav');
    let mapImg = document.getElementById('map-img');

    /* SHOW BRONX INJURY DATA*/
    function bronxMapData() {
        // /*removing other boroughs divs*/
        document.getElementById('sprain-brooklyn').style.visibility = 'hidden';
        document.getElementById('cut-brooklyn').style.visibility = 'hidden';
        document.getElementById('bruise-brooklyn').style.visibility = 'hidden';
        document.getElementById('foreign-brooklyn').style.visibility = 'hidden';
        document.getElementById('multiple-brooklyn').style.visibility = 'hidden';
        document.getElementById('scratch-brooklyn').style.visibility = 'hidden';
        document.getElementById('fracture-brooklyn').style.visibility = 'hidden';

        /*show bronx div */
        document.getElementById('sprain-bronx').style.visibility = 'visible';
        document.getElementById('cut-bronx').style.visibility = 'visible';
        document.getElementById('bruise-bronx').style.visibility = 'visible';
        document.getElementById('foreign-bronx').style.visibility = 'visible';
        document.getElementById('multiple-bronx').style.visibility = 'visible';
        document.getElementById('scratch-bronx').style.visibility = 'visible';
        document.getElementById('fracture-bronx').style.visibility = 'visible';

        // select backgrounds
        complaintDiv.style.backgroundColor = "#9FCFC6";
        complaintNav.style.backgroundColor = "#9FCFC6";
        injuryNav.style.backgroundColor = "#DEF1EF";
        injuryDiv.style.backgroundColor = "#DEF1EF";
        mapImg.src = "/assets/maps/191204_Bronx_Injuries_v1.png"

        //map stats
        let mapStats = document.getElementsByClassName('map-stats');
        let boroughMapStats = document.getElementById('borough-map-stats')

        //map sprain bronx
        let sprainBronx = document.getElementById('sprain-bronx');
        sprainBronx.addEventListener('mouseover', () => { boroughMapStats.innerHTML = '62 Sprains'; })
        sprainBronx.addEventListener('mouseout', () => { boroughMapStats.innerHTML = ' '; })

        //map cuts bronx
        let cutBronx = document.getElementById('cut-bronx');
        cutBronx.addEventListener('mouseover', () => { boroughMapStats.innerHTML = '37 Cut, Laceration, Puncture'; })
        cutBronx.addEventListener('mouseout', () => { boroughMapStats.innerHTML = ' '; })

        //map bruise bronx
        let bruiseBronx = document.getElementById('bruise-bronx');
        bruiseBronx.addEventListener('mouseover', () => { boroughMapStats.innerHTML = '13 Contusion, Crushing, Bruising'; })
        bruiseBronx.addEventListener('mouseout', () => { boroughMapStats.innerHTML = ' '; })

        //map scratch bronx
        let scratchBronx = document.getElementById('scratch-bronx');
        scratchBronx.addEventListener('mouseover', () => { boroughMapStats.innerHTML = '1 Scratches, Superficial Wounds'; })
        scratchBronx.addEventListener('mouseout', () => { boroughMapStats.innerHTML = ' '; })

        //map scratch bronx
        let foreignBronx = document.getElementById('foreign-bronx');
        foreignBronx.addEventListener('mouseover', () => { boroughMapStats.innerHTML = '4 Foreign Body Injuries'; })
        foreignBronx.addEventListener('mouseout', () => { boroughMapStats.innerHTML = ' '; })

        //map scratch bronx
        let fractureBronx = document.getElementById('fracture-bronx');
        fractureBronx.addEventListener('mouseover', () => { boroughMapStats.innerHTML = '2 Fractures'; })
        fractureBronx.addEventListener('mouseout', () => { boroughMapStats.innerHTML = ' '; })

        //map scratch bronx
        let multipleBronx = document.getElementById('multiple-bronx');
        multipleBronx.addEventListener('mouseover', () => { boroughMapStats.innerHTML = '3 Multiple Injuries'; })
        multipleBronx.addEventListener('mouseout', () => { boroughMapStats.innerHTML = ' '; })
    }

    /* SHOW BROOKLYN INJURY DATA*/
    function brooklynMapData() {
        // /*removing other boroughs divs*/
        document.getElementById('sprain-bronx').style.visibility = 'hidden';
        document.getElementById('cut-bronx').style.visibility = 'hidden';
        document.getElementById('bruise-bronx').style.visibility = 'hidden';
        document.getElementById('foreign-bronx').style.visibility = 'hidden';
        document.getElementById('multiple-bronx').style.visibility = 'hidden';
        document.getElementById('scratch-bronx').style.visibility = 'hidden';
        document.getElementById('fracture-bronx').style.visibility = 'hidden';


        document.getElementById('sprain-brooklyn').style.visibility = 'visible';
        document.getElementById('cut-brooklyn').style.visibility = 'visible';


        complaintDiv.style.backgroundColor = "#D4DD8C";
        complaintNav.style.backgroundColor = "#D4DD8C";
        injuryNav.style.backgroundColor = "#EDF2D7";
        injuryDiv.style.backgroundColor = "#EDF2D7";
        mapImg.src = "/assets/maps/191204_Brooklyn_Injuries_v1.png"

        //map stats
        let boroughMapStats = document.getElementById('borough-map-stats')

        //map sprain bronx
        let sprainBrooklyn = document.getElementById('sprain-brooklyn');
        sprainBrooklyn.addEventListener('mouseover', () => { boroughMapStats.innerHTML = 'BLah Sprains'; })
        sprainBrooklyn.addEventListener('mouseout', () => { boroughMapStats.innerHTML = ' '; })

        //map cuts bronx
        let cutBrookyln = document.getElementById('cut-brooklyn');
        cutBrookyln.addEventListener('mouseover', () => { boroughMapStats.innerHTML = 'Blah Cut, Laceration, Puncture'; })
        cutBrookyln.addEventListener('mouseout', () => { boroughMapStats.innerHTML = ' '; })

        // //map bruise bronx
        // let bruiseBronx = document.getElementById('bruise-bronx');
        // bruiseBronx.addEventListener('mouseover', () => { boroughMapStats.innerHTML = '13 Contusion, Crushing, Bruising'; })
        // bruiseBronx.addEventListener('mouseout', () => { boroughMapStats.innerHTML = ' '; })

        // //map scratch bronx
        // let scratchBronx = document.getElementById('scratch-bronx');
        // scratchBronx.addEventListener('mouseover', () => { boroughMapStats.innerHTML = '1 Scratches, Superficial Wounds'; })
        // scratchBronx.addEventListener('mouseout', () => { boroughMapStats.innerHTML = ' '; })

        // //map scratch bronx
        // let foreignBronx = document.getElementById('foreign-bronx');
        // foreignBronx.addEventListener('mouseover', () => { boroughMapStats.innerHTML = '4 Foreign Body Injuries'; })
        // foreignBronx.addEventListener('mouseout', () => { boroughMapStats.innerHTML = ' '; })

        // //map scratch bronx
        // let fractureBronx = document.getElementById('fracture-bronx');
        // fractureBronx.addEventListener('mouseover', () => { boroughMapStats.innerHTML = '2 Fractures'; })
        // fractureBronx.addEventListener('mouseout', () => { boroughMapStats.innerHTML = ' '; })

        // //map scratch bronx
        // let multipleBronx = document.getElementById('multiple-bronx');
        // multipleBronx.addEventListener('mouseover', () => { boroughMapStats.innerHTML = '3 Multiple Injuries'; })
        // multipleBronx.addEventListener('mouseout', () => { boroughMapStats.innerHTML = ' '; })
    }


}

// function showStat(x) {
//     let mapStats = document.getElementsByClassName('map-stats');
//     mapStats.innerHTML = '62 Sprains';
//     console.log('show stat');
// }



    // function addDivs(){
    //     let divOverMap = document.getElementsByClassName('hover-map-container');
    //     divOverMap.style.visibility = 'visible';
    //     divOverMap.style.display = 'block';
    // }

    // function removeDivs(){
    //     let divOverMap = document.getElementsByClassName('hover-map-container');
    //     divOverMap.style.visibility = 'hidden';
    //     divOverMap.style.display = 'none';
    // }

        // var divsToHide = document.getElementsByClassName("hover-brooklyn-div'"); //divsToHide is an array
        // for (var i = 0; i < divsToHide.length; i++) {
        //     divsToHide[i].style.visibility = "hidden"; // or
        //     divsToHide[i].style.display = "none"; // depending on what you're doing
        // }