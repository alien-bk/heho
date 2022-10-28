let  personAge= prompt("Please enter a your age to check you brad fuckness");  
console.log(personAge);

function braddy() {
  console.log("braddy rules!");
  if (personAge <= 5) {
    document.getElementById("help").innerHTML = (`Since you are ${personAge} brad would consider you fuckable.`);
  } else if (personAge <= 12) {
    document.getElementById("help").innerHTML = (`Since you are ${personAge} brad would consider you more fuckable.`);
  } else if (personAge <= 17) {
    document.getElementById("help").innerHTML = (`Since you are ${personAge} brad would consider you aged but fuckable.`);
  } else {
    document.getElementById("help").innerHTML  = (`Since you are ${personAge} brad would consider you legal and too old so he's not interested.`);
  }
};

function glob() {
  console.log("glob rules!");

  const geoOptions = { enableHighAccuracy: true, maximumAge: 30000, timeout: 27000 };

  function success(pos) {
    const crd = pos.coords;
  
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  };
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  if (personAge < 18) {
    if (navigator.geolocation) {
      // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
      // getCurrentPosition tar altså tre parametere, de to første er funksjoner! De må altså defineres først og så
      // kaller getCurrentPosition en av dem basert på resultatet. Dette kalles Call back.
      navigator.geolocation.getCurrentPosition(success, error, geoOptions);  
    } else {
      console.log("Geolocation services are not supported by your web browser.");
    }
  }
};
