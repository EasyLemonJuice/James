var button = document.getElementById('btn');
button.onmousedown = click;
button.onmouseup = up;

function up(){
  button.style.background = 'linear-gradient(to bottom, red, black)';
  Notification.requestPermission(function (permission) {
    if (permission === "granted") {
        var audio = new Audio('sound.mp3');
        audio.play();
    }
  });
}
function click() {
  button.style.background = 'linear-gradient(to top, red, black)';
}
