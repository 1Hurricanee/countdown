const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const newYeasrs = "1 Jan 2022";

function countdown()
{
  const newYeasrsDate = new Date(newYeasrs);
  const currentDate = new Date();

  const totalSeconds = (newYeasrsDate - currentDate)/1000;

  const days = Math.floor(totalSeconds /3600 / 24);
  const hours = Math.floor(totalSeconds /3600 ) % 24;
  const minutes= Math.floor(totalSeconds /60) % 60;
  const seconds = Math.floor(totalSeconds ) % 60;

  daysEl.innerHTML = days ; 
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds ;

}

function formatTime(time)
{
  return time < 10 ? '0${time}' : time;
}

countdown();
setInterval(countdown,1000);
