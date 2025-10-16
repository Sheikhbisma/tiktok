let video = document.getElementById("video");
video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    video.innerHTML = "";
   
    video.muted=false;
  } else {
    video.pause();
     video.innerHTML = ` <div class="overlay">
                <i class="fa-solid fa-play play-icon"></i>
            </div>`
  }
});