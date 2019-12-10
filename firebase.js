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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // Code
var database = firebase.database();
database.ref('fazekas-ar-project');   
