// Typing Effect
const roles = ["Frontend Developer", "Web Designer", "JS Learner"];
let i=0,j=0;
const role = document.querySelector(".hero-role");

function type(){
  if(j < roles[i].length){
    role.textContent += roles[i][j++];
    setTimeout(type,80);
  }else setTimeout(erase,1500);
}
function erase(){
  if(j>0){
    role.textContent = roles[i].substring(0,--j);
    setTimeout(erase,50);
  }else{
    i=(i+1)%roles.length;
    setTimeout(type,500);
  }
}
type();

// Theme Toggle
const btn = document.getElementById("themeToggle");
btn.onclick = () => {
  document.body.classList.toggle("light");
  btn.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
};

// Footer Year
document.querySelector("footer p").innerHTML =
`© ${new Date().getFullYear()} Ashok Reddy`;
