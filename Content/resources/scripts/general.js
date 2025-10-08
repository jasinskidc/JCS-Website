const UserPortal = document.getElementById("UserPortalGem");
const myLink = document.getElementById("UPlinkSwitch");

function hasVisitedBefore() {
  return document.cookie.includes("visited=true");
}

function setVisitedCookie() {
  const d = new Date();
  d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000); // 365 days expiration
  const expires = "expires=" + d.toUTCString();
  document.cookie = "visited=true;" + expires + ";path=/";
}

window.onload = function () {
  if (hasVisitedBefore()) {
    UserPortal.classList.remove("UserPortalGem");
    UserPortal.classList.remove("newVisitor");
    UserPortal.classList.add("hasVisited");
    myLink.href = "UserPortal/SignIn.html";
  } else {
    setVisitedCookie();
    UserPortal.classList.remove("UserPortalGem");
    UserPortal.classList.add("newVisitor");
    myLink.href = "UserPortal/SignUp.html";
  }
};
