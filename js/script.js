function updateTime() {
  const date = new Date();

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = "0" + seconds;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = "0" + minutes;

  document.getElementById('time').innerHTML = date.getHours() + ":" + minutes + ":" + seconds;
  document.getElementById('date').innerHTML = date.getDate() + ". " + (date.getMonth() + 1) + ". " + date.getFullYear();
}

setInterval(() => {
  updateTime();
}, 1000);

updateTime();



