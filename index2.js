//this function determines penalty points to overspeeding drivers or suspends their licenses
function driverMonitoring(speed) {
    //calculation of meter points
    let pointsMeter = (speed-70)/5;
    //this function ensures that the meter is rounded down
    //hence is always a whole number
    let actualPointsMeter = Math.floor(pointsMeter);
  //if the speed is less than 70 no point has been awarded yet, it returns ok.
  if(actualPointsMeter <= 0) {
    return "Ok";
  }
  //if the points awarded are less than 12, it returns the points tally awarded.
  else if(actualPointsMeter <= 12) {
    return `Points: ${actualPointsMeter}`
  }
  //if the points tally exceeds 12, the license is suspended
  else if(actualPointsMeter > 12) {
    return `License suspended`
  }
}