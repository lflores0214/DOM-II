// Your code goes here

//1st double click
const audioEl = document.createElement("audio");
audioEl.setAttribute(
  "src",
  "sounds/Ahooga Car Horn-SoundBible.com-1499602683.wav"
);
audioEl.setAttribute("class", "horn");

logoSound = document.querySelector(".main-navigation");
logoSound.appendChild(audioEl);

const honk = document.querySelector(".logo-heading");

honk.addEventListener("dblclick", () => {
  const audio = document.querySelector(".horn");
  audio.play();
});
//

//2nd mouseover
document.querySelectorAll(".destination").forEach(element => {
  element.addEventListener("mouseover", () => {
    element.style.color = "red";
  });
  element.addEventListener("mouseleave", () => {
    element.style.color = "black";
  });
});
//

//3rd resize
document.querySelectorAll(".btn").forEach(el => {
  window.addEventListener("resize", () => {
    el.style.backgroundColor = "seagreen";
    el.style.transition = "all 0.9s";
  });
});
//

//4th click
document.querySelectorAll(".nav-link").forEach(el => {
  el.addEventListener("click", () => {
    el.style.color = "rebeccapurple";
  });
});
//

// 5th scroll
const Img = document.querySelectorAll("img");

const busImg = Img[0];
console.log(busImg);

window.addEventListener("scroll", () => {
  busImg.src =
    "https://franchiseteacher.com/wp-content/uploads/2015/04/funbus.jpg";
});
//

// 6th wheel
const letsGoImg = Img[1];

window.addEventListener("wheel", () => {
  letsGoImg.style.border = "5px solid red";
});
//

//7th keydown
window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key) {
  if (key.keyCode == "65") {
    alert(" the 'a' has been pressed");
  }
}
//

// 8th shift click
const formField = document.createElement("form");
formField.setAttribute("class", "form");

const textField = document.createElement("input");
textField.setAttribute("type", "text");
textField.setAttribute("id", "input");
formField.appendChild(textField);

console.log(textField);

const addForm = document.querySelector(".intro");

addForm.addEventListener("click", e => {
  if (e.shiftKey) {
    addForm.appendChild(formField);
  }
});

//
const p = document.createElement('p');
p.setAttribute('id', 'pfield')
//9th onfocus
const formField2 = document.createElement("form");
formField2.setAttribute("class", "form2");

const textField2 = document.createElement("input");
textField2.setAttribute("id", "input2");

formField2.appendChild(textField2);

const yeet = document.querySelectorAll(".text-content").forEach(el => {
  el.appendChild(formField2);
  el.appendChild(p)
});

document.getElementById("input2").onfocus = () => {
  textField2.style.backgroundColor = "yellow";
};
//


// input
document.getElementById('input2').addEventListener('input', () =>{
    const inputChange = document.getElementById('input2').value;
    document.getElementById('pfield').innerHTML = "you wrote: " + inputChange;
})


//