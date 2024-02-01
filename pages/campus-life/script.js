document.querySelector('.title').onmousedown = function(e) {
  window.location.href = "/index.html";
}
document.querySelector('.logo').onmousedown = function(e) {
  window.location.href = "/index.html";
}

var toggle = false;

document.getElementById('video').onmousedown = function(e) {
  var video = document.getElementById("video");
  video.muted = !video.muted;

  if (toggle == true) {
    document.getElementById('video').style.cursor = "url(files/play.cur),auto";
    video.pause();
    toggle = false;
  }
  else {
    document.getElementById('video').style.cursor = "url(files/pause.cur),auto";
    video.play();
    toggle = true;
  }
}
