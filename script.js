let video = document.getElementById("video");
let icon = document.querySelector(".play-icon");
let comment = document.querySelector(".comment-box");
let com = document.querySelector("#come");
let commentBox = document.querySelector(".commentBox");
let closeBtn = document.querySelector(".closeBtn");
let addBtn = document.getElementById("add");
let input = document.getElementById("comments");


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
commentBox.addEventListener("click" ,()=>{
  comment.classList.toggle("active");
});
input.addEventListener("input" , ()=>{
  if(input.value.trim() !==""){
    addBtn.classList.add("active");
    addBtn.disabled=false;
  }else{
    addBtn.classList.remove("active");
    addBtn.disabled = true;
  }
});
addBtn.addEventListener("click" , ()=>{
  let value = input.value
  if(value.trim() !== ""){
    let para = document.createElement("p");
    para.innerHTML = `  <div class="img">
                        <div class="first">
                            <img src="/assets/profile-circle.svg" alt="">
                            <b>You</b>
                        </div>
                        <div class="second">
                            <p>${value}</p>
                        </div>
                       </div>`;
    com.appendChild(para);
    input.value = "";
    addBtn.classList.remove("active");
  addBtn.disabled = true;
  }
});
closeBtn.addEventListener("click",()=>{
  comment.classList.remove("active");
});