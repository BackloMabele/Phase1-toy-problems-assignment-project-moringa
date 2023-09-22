//this function awards grades to students based on their marks
function doMath(studentMarks) {
    //if the marks are less than 100, but more than or equal to 80, it awards A
    if(studentMarks >= 80 && studentMarks <= 100) {
      return "A";
    }
    //if the marks are less than 80, but more than or equal to 60, it awards 'B'
    else if(studentMarks >= 60) {
      return "B";
    }
    //if the marks are less than 60, but more than or equal to 50, it awards 'C'
    else if(studentMarks >=50) {
      return "C";
    }
    //if the marks are less than 50, but more than or equal to 40, it awards 'D'
    else if(studentMarks >= 40) {
      return "D";
    }
    //if the marks are less than 40 it awards 'E'
    else if(studentMarks >= 0) {
      return "E";
    }
    //the catch all awards "invalid"
    else {
      return "Invalid";
    }
  }