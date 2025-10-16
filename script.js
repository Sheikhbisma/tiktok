let video = document.getElementById("video");
let icon = document.querySelector(".play-icon")
video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    icon.style.opacity = "0";
    video.muted=false;
  } else {
    video.pause();
    icon.style.opacity = "1";
  }
});