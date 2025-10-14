// NAVIGATION VARIABLES START

// NAV BUTTONS
const btnRed = document.getElementById("calendarRed");
const btnOra = document.getElementById("contactOrange");
const btnYel = document.getElementById("aboutYellow");
const btnGre = document.getElementById("priceGreen");
const btnBlu = document.getElementById("galleryBlue");
const btnInd = document.getElementById("downloadsIndigo");
const btnVio = document.getElementById("user-portalViolet");

// NAV TABS
const divRed = document.getElementById("calendarSPDiv");
const divOra = document.getElementById("contactSPDiv");
const divYel = document.getElementById("aboutSPDiv");
const divGre = document.getElementById("priceSPDiv");
const divBlu = document.getElementById("gallerySPDiv");
const divInd = document.getElementById("downloadsSPDiv");
const divVio = document.getElementById("user-portalSPDiv");

// NAV BUTTON CONTAINER
const redDiv = document.getElementById("redDiv");
const oraDiv = document.getElementById("oraDiv");
const yelDiv = document.getElementById("yelDiv");
const greDiv = document.getElementById("greDiv");
const bluDiv = document.getElementById("bluDiv");
const indDiv = document.getElementById("indDiv");
const vioDiv = document.getElementById("vioDiv");

// NAV TABS CONTAINER
const navTabs = document.getElementById("mainNavBar");

// NAVIGATION VARIABLES END

// NAVIGATION CODE START

btnRed.addEventListener("click", function () {
  if (divRed.classList.contains("hiddenNavPageTab")) {
        divRed.classList.remove("hiddenNavPageTab");
        divOra.classList.add("hiddenNavPageTab");
        divYel.classList.add("hiddenNavPageTab");
        divGre.classList.add("hiddenNavPageTab");
        divBlu.classList.add("hiddenNavPageTab");
        divInd.classList.add("hiddenNavPageTab");
        divVio.classList.add("hiddenNavPageTab");
        redDiv.style.backgroundColor = 'red';
        oraDiv.style.backgroundColor = 'transparent';
        yelDiv.style.backgroundColor = 'transparent';
        greDiv.style.backgroundColor = 'transparent';
        bluDiv.style.backgroundColor = 'transparent';
        indDiv.style.backgroundColor = 'transparent';
        vioDiv.style.backgroundColor = 'transparent';
        btnYel.style.color = 'white';
        btnGre.style.color = 'white';
} else {
        divRed.classList.add("hiddenNavPageTab");
        btnYel.style.color = 'white';
        redDiv.style.backgroundColor = 'transparent';
        oraDiv.style.backgroundColor = 'transparent';
        yelDiv.style.backgroundColor = 'transparent';
        greDiv.style.backgroundColor = 'transparent';
        bluDiv.style.backgroundColor = 'transparent';
        indDiv.style.backgroundColor = 'transparent';
        vioDiv.style.backgroundColor = 'transparent';
  }
});   

// Shows Contact Nav Page Tabs
btnOra.addEventListener("click", function () {
  if (divOra.classList.contains("hiddenNavPageTab")) {
        divOra.classList.remove("hiddenNavPageTab");
        divRed.classList.add("hiddenNavPageTab");
        divYel.classList.add("hiddenNavPageTab");
        divGre.classList.add("hiddenNavPageTab");
        divBlu.classList.add("hiddenNavPageTab");
        divInd.classList.add("hiddenNavPageTab");
        divVio.classList.add("hiddenNavPageTab");
        oraDiv.style.backgroundColor = 'orange';
        redDiv.style.backgroundColor = 'transparent';
        yelDiv.style.backgroundColor = 'transparent';
        greDiv.style.backgroundColor = 'transparent';
        bluDiv.style.backgroundColor = 'transparent';
        indDiv.style.backgroundColor = 'transparent';
        vioDiv.style.backgroundColor = 'transparent';
        btnYel.style.color = 'white';
        btnGre.style.color = 'white';
  } else {
        divOra.classList.add("hiddenNavPageTab");
        btnYel.style.color = 'white';
        redDiv.style.backgroundColor = 'transparent';
        oraDiv.style.backgroundColor = 'transparent';
        yelDiv.style.backgroundColor = 'transparent';
        greDiv.style.backgroundColor = 'transparent';
        bluDiv.style.backgroundColor = 'transparent';
        indDiv.style.backgroundColor = 'transparent';
        vioDiv.style.backgroundColor = 'transparent';
  }
});    

// Shows About Nav Page Tabs
btnYel.addEventListener("click", function () {
  if (divYel.classList.contains("hiddenNavPageTab")) {
        divYel.classList.remove("hiddenNavPageTab");
        divRed.classList.add("hiddenNavPageTab");
        divOra.classList.add("hiddenNavPageTab");
        divGre.classList.add("hiddenNavPageTab");
        divBlu.classList.add("hiddenNavPageTab");
        divInd.classList.add("hiddenNavPageTab");
        divVio.classList.add("hiddenNavPageTab");
        yelDiv.style.backgroundColor = 'yellow';
        btnYel.style.color = 'black';
        redDiv.style.backgroundColor = 'transparent';
        oraDiv.style.backgroundColor = 'transparent';
        greDiv.style.backgroundColor = 'transparent';
        bluDiv.style.backgroundColor = 'transparent';
        indDiv.style.backgroundColor = 'transparent';
        vioDiv.style.backgroundColor = 'transparent';
        btnGre.style.color = 'white';
  } else {
        divYel.classList.add("hiddenNavPageTab");
        btnYel.style.color = 'white';
        redDiv.style.backgroundColor = 'transparent';
        oraDiv.style.backgroundColor = 'transparent';
        yelDiv.style.backgroundColor = 'transparent';
        greDiv.style.backgroundColor = 'transparent';
        bluDiv.style.backgroundColor = 'transparent';
        indDiv.style.backgroundColor = 'transparent';
        vioDiv.style.backgroundColor = 'transparent';
  }
});  

// Shows Prices Nav Page Tabs
btnGre.addEventListener("click", function () {
  if (divGre.classList.contains("hiddenNavPageTab")) {
        divGre.classList.remove("hiddenNavPageTab");
        divRed.classList.add("hiddenNavPageTab");
        divOra.classList.add("hiddenNavPageTab");
        divYel.classList.add("hiddenNavPageTab");
        divBlu.classList.add("hiddenNavPageTab");
        divInd.classList.add("hiddenNavPageTab");
        divVio.classList.add("hiddenNavPageTab");
        greDiv.style.backgroundColor = '#66ff00';
        redDiv.style.backgroundColor = 'transparent';
        oraDiv.style.backgroundColor = 'transparent';
        yelDiv.style.backgroundColor = 'transparent';
        bluDiv.style.backgroundColor = 'transparent';
        indDiv.style.backgroundColor = 'transparent';
        vioDiv.style.backgroundColor = 'transparent';
        btnYel.style.color = 'white';
        btnGre.style.color = 'black';
  } else {
        divGre.classList.add("hiddenNavPageTab");
        btnYel.style.color = 'white';
        redDiv.style.backgroundColor = 'transparent';
        oraDiv.style.backgroundColor = 'transparent';
        yelDiv.style.backgroundColor = 'transparent';
        greDiv.style.backgroundColor = 'transparent';
        bluDiv.style.backgroundColor = 'transparent';
        indDiv.style.backgroundColor = 'transparent';
        vioDiv.style.backgroundColor = 'transparent';
  }
});   

// Shows Gallery Nav Page Tabs
btnBlu.addEventListener("click", function () {
  if (divBlu.classList.contains("hiddenNavPageTab")) {
        divBlu.classList.remove("hiddenNavPageTab");
        divRed.classList.add("hiddenNavPageTab");
        divOra.classList.add("hiddenNavPageTab");
        divYel.classList.add("hiddenNavPageTab");
        divGre.classList.add("hiddenNavPageTab");
        divInd.classList.add("hiddenNavPageTab");
        divVio.classList.add("hiddenNavPageTab");
        bluDiv.style.backgroundColor = 'blue';
        redDiv.style.backgroundColor = 'transparent';
        oraDiv.style.backgroundColor = 'transparent';
        yelDiv.style.backgroundColor = 'transparent';
        greDiv.style.backgroundColor = 'transparent';
        indDiv.style.backgroundColor = 'transparent';
        vioDiv.style.backgroundColor = 'transparent';
        btnYel.style.color = 'white';
        btnGre.style.color = 'white';
  } else {
        divBlu.classList.add("hiddenNavPageTab");
        btnYel.style.color = 'white';
        redDiv.style.backgroundColor = 'transparent';
        oraDiv.style.backgroundColor = 'transparent';
        yelDiv.style.backgroundColor = 'transparent';
        greDiv.style.backgroundColor = 'transparent';
        bluDiv.style.backgroundColor = 'transparent';
        indDiv.style.backgroundColor = 'transparent';
        vioDiv.style.backgroundColor = 'transparent';
  }
});  

// Shows Downloads Nav Page Tabs
btnInd.addEventListener("click", function () {
  if (divInd.classList.contains("hiddenNavPageTab")) {
        divInd.classList.remove("hiddenNavPageTab");
        divRed.classList.add("hiddenNavPageTab");
        divOra.classList.add("hiddenNavPageTab");
        divYel.classList.add("hiddenNavPageTab");
        divGre.classList.add("hiddenNavPageTab");
        divBlu.classList.add("hiddenNavPageTab");
        divVio.classList.add("hiddenNavPageTab");
        indDiv.style.backgroundColor = '#BC13FE';
        redDiv.style.backgroundColor = 'transparent';
        oraDiv.style.backgroundColor = 'transparent';
        yelDiv.style.backgroundColor = 'transparent';
        greDiv.style.backgroundColor = 'transparent';
        bluDiv.style.backgroundColor = 'transparent';
        vioDiv.style.backgroundColor = 'transparent';
        btnYel.style.color = 'white';
        btnGre.style.color = 'white';
  } else {
        divInd.classList.add("hiddenNavPageTab");
        btnYel.style.color = 'white';
        redDiv.style.backgroundColor = 'transparent';
        oraDiv.style.backgroundColor = 'transparent';
        yelDiv.style.backgroundColor = 'transparent';
        greDiv.style.backgroundColor = 'transparent';
        bluDiv.style.backgroundColor = 'transparent';
        indDiv.style.backgroundColor = 'transparent';
        vioDiv.style.backgroundColor = 'transparent';
  }
});  

// Shows User-Portal Nav Page Tabs
btnVio.addEventListener("click", function () {
  if (divVio.classList.contains("hiddenNavPageTab")) {
        divVio.classList.remove("hiddenNavPageTab");
        divRed.classList.add("hiddenNavPageTab");
        divOra.classList.add("hiddenNavPageTab");
        divYel.classList.add("hiddenNavPageTab");
        divGre.classList.add("hiddenNavPageTab");
        divBlu.classList.add("hiddenNavPageTab");
        divInd.classList.add("hiddenNavPageTab");
        vioDiv.style.backgroundColor = 'violet';
        redDiv.style.backgroundColor = 'transparent';
        oraDiv.style.backgroundColor = 'transparent';
        yelDiv.style.backgroundColor = 'transparent';
        greDiv.style.backgroundColor = 'transparent';
        bluDiv.style.backgroundColor = 'transparent';
        indDiv.style.backgroundColor = 'transparent';
        btnYel.style.color = 'white';
        btnGre.style.color = 'white';
  } else {
        divVio.classList.add("hiddenNavPageTab");
        btnYel.style.color = 'white';
        redDiv.style.backgroundColor = 'transparent';
        oraDiv.style.backgroundColor = 'transparent';
        yelDiv.style.backgroundColor = 'transparent';
        greDiv.style.backgroundColor = 'transparent';
        bluDiv.style.backgroundColor = 'transparent';
        indDiv.style.backgroundColor = 'transparent';
        vioDiv.style.backgroundColor = 'transparent';
  }
});  

// Clear Nav Tabs if focus/mouse leaves it

navTabs.addEventListener('mouseleave', () => {
        divRed.classList.add("hiddenNavPageTab");
        divOra.classList.add("hiddenNavPageTab");
        divYel.classList.add("hiddenNavPageTab");
        divGre.classList.add("hiddenNavPageTab");
        divBlu.classList.add("hiddenNavPageTab");
        divInd.classList.add("hiddenNavPageTab");
        divVio.classList.add("hiddenNavPageTab");
        redDiv.style.backgroundColor = 'transparent';
        oraDiv.style.backgroundColor = 'transparent';
        yelDiv.style.backgroundColor = 'transparent';
        greDiv.style.backgroundColor = 'transparent';
        bluDiv.style.backgroundColor = 'transparent';
        indDiv.style.backgroundColor = 'transparent';
        vioDiv.style.backgroundColor = 'transparent';
        btnYel.style.color = 'white';
        btnGre.style.color = 'white';
});   


// NAVIGATION CODE END