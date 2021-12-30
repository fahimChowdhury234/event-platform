const meet = document.querySelector(".meet");
const chat = document.querySelector(".chat");

function meetOpen() {
  meet.classList.toggle("meetopen");
  chat.classList.remove("chatopen");
}

function meetOpen2() {
  chat.classList.toggle("chatopen");
  meet.classList.remove("meetopen");
}

// comment box open//

const comentBox = document.querySelector(".comment-box");

function boxOpen() {
  comentBox.classList.toggle("comment-box-open");
}
// Filter Dropdown open //
const filterDropdown = document.querySelector(".filter-dropdown");
const filterDropdown2 = document.querySelector(".filter-dropdown2");


function openFilter() {
  filterDropdown.classList.toggle("open");
  console.log(1);
}
function openFilter2() {
  filterDropdown2.classList.toggle("open");
  console.log(1);
}
// window.onload = function () {
//   document.getElementById("tab1").classList.add("activeTab");
//   document.getElementById("option1").style.display = "block";
//   document.getElementById("option2").style.display = "none";
//   document.getElementById("option3").style.display = "none";
// };

// function handleTabChange(key) {
//   if (key === "tab1") {
//     document.getElementById("tab1").classList.add("activeTab");
//     document.getElementById("tab2").classList.remove("activeTab");
//     document.getElementById("tab3").classList.remove("activeTab");

//     document.getElementById("option1").style.display = "block";
//     document.getElementById("option2").style.display = "none";
//     document.getElementById("option3").style.display = "none";
//   } else if (key === "tab2") {
//     document.getElementById("tab1").classList.remove("activeTab");
//     document.getElementById("tab2").classList.add("activeTab");
//     document.getElementById("tab3").classList.remove("activeTab");

//     document.getElementById("option1").style.display = "none";
//     document.getElementById("option2").style.display = "block";
//     document.getElementById("option3").style.display = "none";
//   } else if (key === "tab3") {
//     document.getElementById("tab1").classList.remove("activeTab");
//     document.getElementById("tab2").classList.remove("activeTab");
//     document.getElementById("tab3").classList.add("activeTab");

//     document.getElementById("option1").style.display = "none";
//     document.getElementById("option2").style.display = "none";
//     document.getElementById("option3").style.display = "block";
//   }
// }
