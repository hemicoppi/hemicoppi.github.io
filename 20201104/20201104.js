function showModal(){
  let modal = document.querySelector("#modal");
  modal.innerHTML="showModal()";
  console.log("クリックされました");
}
function changeRed(){
  let modal =document.querySelector("#modal");
  modal.style.backgroundColor="red";
  console.log("クリックされました");
}
function changeYellow(){
  let modal =document.querySelector("#modal");
  modal.style.backgroundColor="yellow";
  console.log("クリックされました");
}
function changeGreen(){
  let modal =document.querySelector("#modal");
  modal.style.backgroundColor="green";
  console.log("クリックされました");
}

function appendCircle(){
  let modal=document.querySelector("#modal");
  modal.innerHTML = modal.innerHTML + "〇";
}
function appendCross(){
  let modal=document.querySelector("#modal");
  modal.innerHTML = modal.innerHTML + "×";
}

function plusOne(){
  let modal=document.querySelector("#modal");
  let numModal = Number(modal.innerHTML); //数値にしている
  modal.innerHTML = numModal +1;
}
function plusFive(){
  let modal=document.querySelector("#modal");
  let numModal = Number(modal.innerHTML); //数値にしている
  modal.innerHTML = numModal +5;
}
function plusTen(){
  let modal=document.querySelector("#modal");
  let numModal = Number(modal.innerHTML); //数値にしている
  modal.innerHTML = numModal +10;
}