const showDialog = document.getElementById('Check');
const dialog = document.getElementById('button');

function check(){
     dialog.click()
}

// pop-up

document.querySelector("#Check1").addEventListener("click",function(){
  document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
  document.querySelector(".popup").classList.remove("active");
});



