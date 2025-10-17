let video = document.getElementById("video");
let icons = document.querySelector(".play-icon");
let comment = document.querySelector(".comment-box");
let com = document.querySelector("#come");
let commentBox = document.querySelector(".commentBox");
let closeBtn = document.querySelector(".closeBtn");
let addBtn = document.getElementById("add");
let input = document.getElementById("comments");
let counter = document.querySelector("#count");
let icon = document.querySelector(".heart");
let likeBtn = document.querySelector(".likeBtn");
let footer = document.querySelector(".icons");
let foot = document.querySelector(".footer");
isLike = false;



video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    icons.style.opacity = "0";
    video.muted=false;
} else {
    video.pause();
    icons.style.opacity = "1";
  }
});

// like button logic
likeBtn.addEventListener("click", () => {
    if (!isLike) {
        likeBtn.style.color = "red";
        isLike = true;
        console.log(isLike);
      } else {
      likeBtn.style.color = "";
        isLike = false;
       


    }
});
video.addEventListener("dblclick", () => {
  console.log("hello");
  icon.classList.add("active");
          likeBtn.style.color = "red";

  setTimeout(() => {
    icon.classList.remove("active");
  }, 600);
});

commentBox.addEventListener("click" ,()=>{
  comment.classList.toggle("active");
 foot.style.display = "none";

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
                            <img src="/videos/profile-circle.svg" alt="">
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
   foot.style.display = "block";

});