
var countDownDate = new Date("March 17, 2021 17:00:00").getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {
  
      // Get todays date and time
      var now = new Date().getTime();
      
      // Find the distance between now an the count down date
      var distance = Math.abs(countDownDate - now);

      
      // Time calculations for days, hours, minutes and seconds
      let Hours = Math.floor(distance / ( 1000 * 60 * 60 ));
      let hours_left = distance % (1000 *60 * 60)
      let min = Math.floor(hours_left /(1000*60))
      let min_left = hours_left % (1000*60)
      let sec = Math.floor(min_left /1000)
  
      // Output the result in an element with id="demo"
      document.getElementById("timer").innerHTML = Hours +':' + min +':' +sec
      
      // If the count down is over, write some text 
      if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
      }
  }, 1000);
  