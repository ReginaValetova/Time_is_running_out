const Timer = (element,distance, killInterval) => {
  // Time calculations for days, hoursUntil, minutesUntil and secondsUntil
  const daysUntil = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hoursUntil = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesUntil = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secondsUntil = Math.floor((distance % (1000 * 60)) / 1000);
    
  if (distance <= 0) { 
    clearInterval(killInterval); 
    document.getElementById(element).innerHTML = "EXPIRED";

  } else {
    if (daysUntil === 0) {
      if (hoursUntil === 0) {
            document.getElementById(element).innerHTML = 
            minutesUntil + "m " + secondsUntil + "s "; 
          } else {
          document.getElementById(element).innerHTML = 
          hoursUntil + "h " + minutesUntil + "m " + secondsUntil + "s "; 
        }
    } else {
      document.getElementById(element).innerHTML = 
      daysUntil + "d " + hoursUntil + "h " + minutesUntil + "m " + secondsUntil + "s ";
    }
  }
}

/////////

const greenLine = (line, distance, taskCompleteDate, taskCreated) => {
  const taskTotalTime = taskCompleteDate - taskCreated;
  const percents = (100)/(taskTotalTime/distance) + '%';
  line.style.width = percents;
};

///////////////

const Task = (time, elementId) => {
  const taskCreated = new Date("March 15, 2019 23:39:00").getTime();
  const taskCompleteDate = new Date(time).getTime();
  // const taskCompleteDate = new Date(time).getTime();
  
  const x = setInterval(() => { // Update the count down every 1 seconstd
    const now = new Date().getTime(); // Get todaysUntil date and time
    const distance = taskCompleteDate - now;
 
    Timer(elementId,distance,x)
    greenLine(line0, distance, taskCompleteDate, taskCreated)

  }, 1000); 
} 


const outputTimer = () => {
  const times = [
    ["task--countdown0", "March 20, 2019 23:39:00", "line0"],
    ["task--countdown1", "March 19, 2019 14:30:20", "line1"],
    ["task--countdown2", "March 21, 2019 15:50:05", "line2"],
    ["task--countdown3", "March 30, 2019 14:10:15", "line3"],
    ["task--countdown4", "March 30, 2019 14:46:55", "line4"],
    ["task--countdown5", "March 19, 2019 14:37:25", "line5"]
  ];

  console.log(times[1][3]);
  for (let i = 0; i < 5; i++) {
    Task(times[i][1], times[i][0]);
  }
  // times.forEach(time => Task(time[0], time[1]) );
}

outputTimer();


