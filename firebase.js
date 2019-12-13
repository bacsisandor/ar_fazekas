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
  writeUserData(position.coords.latitude, position.coords.longitude);
}

