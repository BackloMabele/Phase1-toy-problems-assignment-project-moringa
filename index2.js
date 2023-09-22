//this function takes the speed of a driver as an input
//it then uses the speed to determine the points to award the driver
//if the driver has exceeded 12 points, there license is suspended.
function driverMonitoring(speed) {
    //calculation of meter points
    let meter = (speed-70)/5;
    /*if the points are less than or equal to 0, it returns ok. 
    this corresponds to the speed being less than 70*/
    if(meter <= 0) {
      return "Ok";
    }
    /* if the points are less than 12, the function returns the points awarded*/
    else if(meter <= 12) {
      return `Points: ${meter}`
    }
    //if they are more than 12, the driver's license is suspended.
    else if(meter > 12) {
      return `License suspended`
    }
  }