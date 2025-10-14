// NAVIGATION VARIABLES START

      // IDK
      // let navTabColor = x;
      // let navTabExpandedBG = x;

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


// NAVIGATION FUNCTIONS START

      function navClear() {
            redDiv.style.backgroundColor = 'transparent';
            oraDiv.style.backgroundColor = 'transparent';
            yelDiv.style.backgroundColor = 'transparent';
            greDiv.style.backgroundColor = 'transparent';
            bluDiv.style.backgroundColor = 'transparent';
            indDiv.style.backgroundColor = 'transparent';
            vioDiv.style.backgroundColor = 'transparent';
            divRed.classList.add("hiddenElement");
            divOra.classList.add("hiddenElement");
            divYel.classList.add("hiddenElement");
            divGre.classList.add("hiddenElement");
            divBlu.classList.add("hiddenElement");
            divInd.classList.add("hiddenElement");
            divVio.classList.add("hiddenElement");
            btnYel.style.color = 'white';
            btnGre.style.color = 'white';
      }

// NAVIGATION CODE START

btnRed.addEventListener("click", function () {
  if (divRed.classList.contains("hiddenElement")) {
      navClear()
      divRed.classList.remove("hiddenElement");
      redDiv.style.backgroundColor = 'red';
} else {
      navClear()
  }
});   

// Shows Contact Nav Page Tabs
btnOra.addEventListener("click", function () {
  if (divOra.classList.contains("hiddenElement")) {
      navClear()
      divOra.classList.remove("hiddenElement");
      oraDiv.style.backgroundColor = 'orange';
  } else {
      navClear()
  }
});    

// Shows About Nav Page Tabs
btnYel.addEventListener("click", function () {
  if (divYel.classList.contains("hiddenElement")) {
      navClear()
      divYel.classList.remove("hiddenElement");
      yelDiv.style.backgroundColor = 'yellow';
      btnYel.style.color = 'black';
  } else {
      navClear()
  }
});  

// Shows Prices Nav Page Tabs
btnGre.addEventListener("click", function () {
  if (divGre.classList.contains("hiddenElement")) {
      navClear()
      divGre.classList.remove("hiddenElement");
      greDiv.style.backgroundColor = '#66ff00';
      btnGre.style.color = 'black';
  } else {
      navClear()
  }
});   

// Shows Gallery Nav Page Tabs
btnBlu.addEventListener("click", function () {
  if (divBlu.classList.contains("hiddenElement")) {
      navClear()
      divBlu.classList.remove("hiddenElement");
      bluDiv.style.backgroundColor = 'blue';
  } else {
      navClear()
  }
});  

// Shows Downloads Nav Page Tabs
btnInd.addEventListener("click", function () {
  if (divInd.classList.contains("hiddenElement")) {
      navClear()
      divInd.classList.remove("hiddenElement");
      indDiv.style.backgroundColor = '#BC13FE';
  } else {
      navClear()
  }
});  

// Shows User-Portal Nav Page Tabs
btnVio.addEventListener("click", function () {
  if (divVio.classList.contains("hiddenElement")) {
      navClear()
      divVio.classList.remove("hiddenElement");
      vioDiv.style.backgroundColor = 'violet';
  } else {
      navClear()
  }
});  

// Clear Nav Tabs if focus/mouse leaves it

navTabs.addEventListener('mouseleave', () => {
      navClear()
});   


// NAVIGATION CODE END