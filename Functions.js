function countdown(time, elementClass) {
    // Set the date we're counting down to
    var countDownDate = new Date(time).getTime();
    // Update the count down every 1 second
    var x = setInterval(function() {
    
    // Get todays date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the element with id="demo"
   
    if (days == 0) {
        if (hours == 0) {
            if (minutes == 0) {
                document.getElementById(elementClass).innerHTML = 
                + minutes + "m " + seconds + "s "; };
        } else {
            document.getElementById(elementClass).innerHTML = 
            hours + "h " + minutes + "m " + seconds + "s "; };
    
    } else {
        document.getElementById(elementClass).innerHTML = 
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    };

 
    // If the count down is finished, write some text 
    if (distance < 0) { 
        clearInterval(x); 
        document.getElementById(elementClass).innerHTML = "EXPIRED";
    } 
    }, 1000); 
} 

function outputTimer() {
    var times = ["March 14, 2019 14:30:25",
    time2 = "March 15, 2019 14:30:20",
    time3 = "March 16, 2019 14:50:05",
    time4 = "March 17, 2019 14:10:15",
    time5 = "March 30, 2019 14:46:55",
    time6 = "March 19, 2019 14:37:25"]

    for (let i = 0; i < 6; i++) {
        countdown(times[i], "task--countdown"+i);
    }

}

outputTimer();

for (let i = 100; i < 0; i--) {
    var timerId = setInterval(function() {
        document.getElementsByClassName("my.task--progressBtn").style.width = "5%";
      }, 2000);
}

