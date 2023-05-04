// index.js - purpose and description here
// Author: Ethan Fuller
// Date: 5/2/2023

// Define Variables
myTransport = ["bike", "rides from friends"];

//create an object for my main ride
myMainRide = {
  make: "Mclaren",
  model : "GT",
  color : "green",
  year : 2019,
  //we can define a function within our object (called a method)
  // that uses the value of year above (using this.year)
  age : function() {
        return 2023 - this.year;
  }
}

//output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
//this little trick allows us to write an object to the document
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
