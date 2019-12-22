// Get event data
function deviceOrientationListener(event) {
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
}