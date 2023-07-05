let range = document.getElementById("range");

let num = document.getElementById("num");

let copy = document.getElementById("copy");

// make empty aray
// make lenth array to range value
// loop throo thay array  == range value
// replace the item to random letter or number or symbols

// let Arr_pass = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   "a",
//   "b",
//   "z",
//   "x",
//   "e",
//   "t",
//   "u",
//   "p",
//   "w",
//   "s",
//   "g",
//   "y",
//   "i",
//   "q",
//   "c",
//   "f",
//   "l",
//   "v",
//   "k",
//   "n",
//   "h",
//   "r",
//   "!",
//   "!",
//   "@",
//   "#",
//   "%",
//   "^",
//   "&",
//   "*",
//   "$",
//   "(",
//   ")",
//   "+",
//   "=",
//   "-",
//   "?",
//   "/",
//   "|",
//   ":",
//   ",",
// ];

// // make new array

// let new_array = [];
// range.addEventListener("input", function () {
//   let divs = "";
//   for (let i = 0; i < range.value; i++) {
//     let fuck = Math.floor(Math.random() * (Arr_pass.length - 1));
//     console.log(fuck);
//     new_array.push(Arr_pass[fuck]);
//   }
//   for (let i = 0; i < new_array.length; i++) {
//     divs += `
//         <div class="unm">${new_array[i]}</div>
//         `;
//   }
//   num.innerHTML = divs;
// });
let password = "";
const war_fun = (_) => {
  let divs = "";
  password = new Array(+range.value).fill(143).map((e) => {
    let charToz = String.fromCharCode(
      Math.floor(Math.random() * (126 - 33) + 33)
    );
    divs += `<div class="unm">${charToz}</div>`;
    return charToz;
  });
  num.innerHTML = divs;
};
range.addEventListener("input", function () {
  war_fun();
});
function myFunction() {
  navigator.clipboard.writeText(password.join(""));
}

//33 126

// Designed by:  Mauricio Bucardo
// Original image:
// https://dribbble.com/shots/5619509-Animated-Tab-Bar

("use strict");

const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

function clickItem(item, index) {
  menu.style.removeProperty("--timeOut");

  if (activeItem == item) return;

  if (activeItem) {
    activeItem.classList.remove("active");
  }

  item.classList.add("active");
  body.style.backgroundColor = bgColorsBody[index];
  activeItem = item;
  offsetMenuBorder(activeItem, menuBorder);
}

function offsetMenuBorder(element, menuBorder) {
  const offsetActiveItem = element.getBoundingClientRect();
  const left =
    Math.floor(
      offsetActiveItem.left -
        menu.offsetLeft -
        (menuBorder.offsetWidth - offsetActiveItem.width) / 2
    ) + "px";
  menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => clickItem(item, index));
});

window.addEventListener("resize", () => {
  offsetMenuBorder(activeItem, menuBorder);
  menu.style.setProperty("--timeOut", "none");
});
