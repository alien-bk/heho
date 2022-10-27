// let bradIsAPedo = Math.floor(Math.random()* 20);
// let runnerAge = bradIsAPedo;


// if (runnerAge <= 5) {
//   console.log('Fuckable');
// } else if  (runnerAge <= 12) {
//   console.log('More fuckable');
// } else if (runnerAge <= 17) {
//   console.log('Aged but fuckable');
// } else {
//   console.log('Legal and not interested')
// }

// console.log(`Age ${bradIsAPedo}`)



    let personAge = prompt ('Please enter your age to see how brad would rate you on the fuckable scale') ;  


console.log(personAge)

function braddy(){
    if (personAge <= 5) {
        document.getElementById("help").innerHTML = (`Since you are ${personAge} brad would consider you fuckable.`)
    } else if (personAge <=12) {
        document.getElementById("help").innerHTML = (`Since you are ${personAge} brad would consider you more fuckable.`)
    } else if (personAge <=17) {
        document.getElementById("help").innerHTML = (`Since you are ${personAge} brad would consider you aged but fuckable.`)
    } else if (personAge === false) {document.getElementById("help").innerHTML = (`kys fag`)
        }else {document.getElementById("help").innerHTML = (`Since you are ${personAge} brad would consider you legal and too old so he's not interested.`)}
    } 
 
function underAge(){
    if (personAge <= 17) {
        const geoFindMe = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, geoOptions);
    } else {
        console.log("Geolocation services are not supported by your web browser.");
    }
}

const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const altitude = position.coords.altitude;
    const accuracy = position.coords.accuracy;
    console.log(`lat: ${latitude} long: ${longitude}`);
}

const error = (error) => {
    console.log(`Unable to retrieve your location due to ${error.code}: ${error.message}`);
}

const geoOptions = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
} } };
