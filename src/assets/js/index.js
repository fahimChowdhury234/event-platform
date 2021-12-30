const blur = document.querySelector("#blur");
const backdrop = document.querySelector("#backdropid");
const hiddensidebar = document.querySelector("#hiddensidebar");
const dropdown = document.querySelectorAll("#sidedropdown");
const navimg = document.querySelector("#navimg");
const mainsidebar = document.querySelector("#mainsidebar");
const displaynone = document.querySelectorAll(".displaynone");

const logo = document.querySelectorAll(".logo");
navimg.addEventListener("click", function () {
  const isopen = navimg.getAttribute("data-open");
  console.log(isopen);

  if (isopen == "false") {
    navimg.setAttribute("data-open", "true");

    mainsidebar.style.width = "5.5rem";

    Array.from(displaynone).forEach((elmt) => {
      elmt.style.display = "none";
    });
    Array.from(logo).forEach((elmt) => {
      elmt.style.display = "block";
    });
  } else {
    navimg.setAttribute("data-open", "false");

    mainsidebar.style.width = "23rem";

    Array.from(displaynone).forEach((elmt) => {
      elmt.style.display = "block";
    });
    Array.from(logo).forEach((elmt) => {
      elmt.style.display = "none";
    });
  }
});

Array.from(dropdown).forEach((dom) => {
  dom.addEventListener("click", () => {
    const drop = dom.getElementsByClassName("dropdownitem");
    const isOpen = dom.getAttribute("open");
    const image = dom.getElementsByTagName("img")[1];

    if (isOpen == "true") {
      dom.setAttribute("open", "false");
      drop[0].style.maxHeight = "0px";
      image.style.transform = "rotate(0deg)";
    } else {
      dom.setAttribute("open", "true");
      drop[0].style.maxHeight = "700px";
      image.style.transform = "rotate(90deg)";
    }
  });
});
function openHiddenbar() {
  blur.classList.add("backgroundblur");
  hiddensidebar.style.right = "0px";
  backdrop.style.display = "block";
}
function closeHiddenbar() {
  blur.classList.remove("backgroundblur");

  backdrop.style.display = "none";
  hiddensidebar.style.right = "-50rem";
}
// big hiddenbar

function openHiddenbarBig() {
  blur.classList.add("backgroundblur");
  hiddensidebar.style.right = "-14px";
  backdrop.style.display = "block";
}

function closeHiddenbarBig() {
  blur.classList.remove("backgroundblur");

  backdrop.style.display = "none";
  hiddensidebar.style.right = "100%";
}
//  big hiddenbar 2
const backdrop2 = document.querySelector("#backdropid2");
function openHiddenbarBig2() {
  blur.classList.add("backgroundblur");
  hiddensidebar2.style.right = "-14px";
  backdrop2.style.display = "block";
}

function closeHiddenbarBig2() {
  blur.classList.remove("backgroundblur");

  backdrop2.style.display = "none";
  hiddensidebar2.style.right = "100%";
}
//  big hiddenbar 3
const backdrop3 = document.querySelector("#backdropid3");
const hiddensidebar3 = document.querySelector("#hiddensidebar3");

function openHiddenbarBig3() {
  blur.classList.add("backgroundblur");
  hiddensidebar3.style.right = "-14px";
  backdrop3.style.display = "block";
}

function closeHiddenbarBig3() {
  blur.classList.remove("backgroundblur");

  backdrop3.style.display = "none";
  hiddensidebar3.style.right = "100%";
}
//  big hiddenbar 4
const backdrop4 = document.querySelector("#backdropid4");
const hiddensidebar4 = document.querySelector("#hiddensidebar4");

function openHiddenbarBig4() {
  blur.classList.add("backgroundblur");
  hiddensidebar4.style.right = "-14px";
  backdrop4.style.display = "block";
}

function closeHiddenbarBig4() {
  blur.classList.remove("backgroundblur");

  backdrop4.style.display = "none";
  hiddensidebar4.style.right = "100%";
}
//////for Previous button///////

const hiddensidebar2 = document.querySelector("#hiddensidebar2");

function openHiddenbar2() {
  blur.classList.add("backgroundblur");
  hiddensidebar2.style.right = "0px";
  backdrop.style.display = "block";
}

function closeHiddenbar2() {
  blur.classList.remove("backgroundblur");

  backdrop.style.display = "none";
  hiddensidebar2.style.right = "-50rem";
}

// survey  progress bar////
// const barBtn = document.querySelector(".barBtn");
// const bar = document.querySelector(".bar");

// barBtn.addEventListener("click", function () {
//   bar.classList.toggle("displayin");
// });

// app webapp users js ////

//////Button-2///////

function openHiddenbar2() {
  blur.classList.add("backgroundblur");
  hiddensidebar2.style.right = "0px";
  backdrop.style.display = "block";
}

function closeHiddenbar2() {
  blur.classList.remove("backgroundblur");

  backdrop.style.display = "none";
  hiddensidebar2.style.right = "-50rem";
}

//////Button-3///////

function openHiddenbar3() {
  blur.classList.add("backgroundblur");
  hiddensidebar3.style.right = "0px";
  backdrop.style.display = "block";
}

function closeHiddenbar3() {
  blur.classList.remove("backgroundblur");

  backdrop.style.display = "none";
  hiddensidebar3.style.right = "-50rem";
}
// button 5/////

function openHiddenbar4() {
  blur.classList.add("backgroundblur");
  hiddensidebar4.style.right = "0px";
  backdrop.style.display = "block";
}

function closeHiddenbar4() {
  blur.classList.remove("backgroundblur");

  backdrop.style.display = "none";
  hiddensidebar4.style.right = "-50rem";
}
// button 6/////
const hiddensidebar5 = document.querySelector("#hiddensidebar5");
function openHiddenbar5() {
  blur.classList.add("backgroundblur");
  hiddensidebar5.style.right = "0px";
  backdrop.style.display = "block";
}

function closeHiddenbar5() {
  blur.classList.remove("backgroundblur");

  backdrop.style.display = "none";
  hiddensidebar5.style.right = "-50rem";
}
// popup////
const popup = document.querySelector(".popup");

function openPopup() {
  popup.classList.remove("hidden");
  popup.classList.add("overlay");
}

function closePopup() {
  popup.classList.add("hidden");
}
// delete select
const deleteSelect = document.querySelector(".deleteselect");
console.log(deleteSelect);

function openDelete() {
  deleteSelect.classList.remove("hidden");
  deleteSelect.classList.add("overlay");
}
function closeDelete() {
  deleteSelect.classList.add("hidden");
}
////img uplode popup
const popupi = document.querySelector(".popupi");

function openPopupi() {
  popupi.classList.remove("hidden");
  popupi.classList.add("overlay");
}

function closePopupi() {
  popupi.classList.add("hidden");
}
////img uplode popup
const popupi2 = document.querySelector(".popupi2");
console.log(popupi2);

function openPopupi2() {
  popupi2.classList.remove("hidden");
  popupi2.classList.add("overlay2");
}

function closePopupi2() {
  popupi2.classList.add("hidden");
}
////img uplode popup
const popupi3 = document.querySelector(".popupi3");

function openPopupi3() {
  popupi3.classList.remove("hidden");
  popupi3.classList.add("overlay");
}

function closePopupi3() {
  popupi3.classList.add("hidden");
}
// add user popup//
const popup2 = document.querySelector(".popup2");
function openPopup2() {
  popup2.classList.remove("hidden");
  popup2.classList.add("overlay");
}
function closePopup2() {
  popup2.classList.add("hidden");
}
// add single  user popup//
const popup3 = document.querySelector(".popup3");
function openPopup3() {
  popup3.classList.remove("hidden");
  popup3.classList.add("overlay");
}
function closePopup3() {
  popup3.classList.add("hidden");
}
// deactive popup
const popup4 = document.querySelector(".popup4");
function openPopup4() {
  popup4.classList.remove("hidden");
  popup4.classList.add("overlay");
}
function closePopup4() {
  popup4.classList.add("hidden");
}
// resend email popup
const popup5 = document.querySelector(".popup5");
function openPopup5() {
  popup5.classList.remove("hidden");
  popup5.classList.add("overlay");
}
function closePopup5() {
  popup5.classList.add("hidden");
}
// resend email popup
const popup6 = document.querySelector(".popup6");
function openPopup6() {
  popup6.classList.remove("hidden");
  popup6.classList.add("overlay");
}
function closePopup6() {
  popup6.classList.add("hidden");
}

// delete user popup
const popup7 = document.querySelector(".popup7");
function openPopup7() {
  popup7.classList.remove("hidden");
  popup7.classList.add("overlay");
}
function closePopup7() {
  popup7.classList.add("hidden");
}

// download db popup
const popup8 = document.querySelector(".popup8");
function openPopup8() {
  popup8.classList.remove("hidden");
  popup8.classList.add("overlay");
}
function closePopup8() {
  popup8.classList.add("hidden");
}
// speker select catagory
window.onload = function () {
  let selectDropDown = document.querySelector(".selectDropDown");
  let selectDropDowntBtn = document.querySelector(".selectDropDowntBtn");

  selectDropDowntBtn.addEventListener("click", function () {
    selectDropDown.classList.toggle("displayin");
  });
};
// columm view
// seo hidden bar

const seohiddenbar = document.querySelector("#seohiddenbar");

function seohiddenbar2() {
  blur.classList.add("backgroundblur");
  seohiddenbar.style.right = "0px";
  seohiddenbar.style.display = "block";
}
let columm = document.querySelector(".columm");
let colummBtn = document.querySelector(".colummBtn");
console.log(columm);

colummBtn.addEventListener("click", function () {
  columm.classList.toggle("displayin");
});

// showing entris
let entry = document.querySelector(".entry");
let entryBtn = document.querySelector(".entryBtn");

entryBtn.addEventListener("click", function () {
  entry.classList.toggle("displayin");
});
