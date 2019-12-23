// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBT0SdFfMSNTZWyEAPx8Cx28I_Waq-lITg",
    authDomain: "fazekas-ar-project.firebaseapp.com",
    databaseURL: "https://fazekas-ar-project.firebaseio.com",
    projectId: "fazekas-ar-project",
    storageBucket: "fazekas-ar-project.appspot.com",
    messagingSenderId: "56442286432",
    appId: "1:56442286432:web:82117be36c7932819a6e05",
    measurementId: "G-VYTBF43DY0"
  };
  // Initialize FirebaseT
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // id
  function guid() {
    function _p8(s) {
        var p = (Math.random().toString(16)+"000000000").substr(2,8);
        return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
  }

  // Code
var database = firebase.database();
// database.ref('fazekas-ar-project');   

function writeUserData(long, lat) {
  firebase.database().ref(guid()).set({
    timestamp: Date.now(),
    longitude: long,
    latitude: lat
  });
}

function getLocation() {
  alert('alert');
  if (navigator.geolocation) {
    console.log('getloc start');
    navigator.geolocation.getCurrentPosition(setPosition, locerror, {maximumAge:60000, timeout:5000, enableHighAccuracy:true});
  } else { 
    alert("Geolocation can not be accessed");
  }
}

function locerror(error) {
  console.log(error);
}

function setPosition(position) {
  console.log('setpos run');
  var alpha    = event.alpha; //z axis rotation [0,360)
    var beta     = event.beta; //x axis rotation [-180, 180]
    var gamma    = event.gamma; //y axis rotation [-90, 90]      //Check if absolute values have been sent
    if (typeof event.webkitCompassHeading !== "undefined") {
      alpha = event.webkitCompassHeading; //iOS non-standard
      var angle = alpha
    }
    else {
      var angle = 360 - alpha; //heading [0, 360)
    }
    if (angle > 315 || angle <= 45) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude+0.000100;
    }
    else if (angle > 45 && angle <= 135)  {
      const latitude = position.coords.latitude+0.000100;
      const longitude = position.coords.longitude;
    }
    else if (angle > 135 && angle <= 225)  {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude-0.000100;
    }
    else if (angle > 225 && angle <= 315) {
      const latitude = position.coords.latitude-0.000100;
      const longitude = position.coords.longitude;
    }
  writeUserData(latitude, longitude);
  entityEl.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
  entityEl.setAttribute('title', 'Your bin');
}

