let userState = "neverSignedUp"; // Change this for testing
+ 
const navUserButton = document.getElementById("navUserButton");
if (userState === "neverSignedUp") {
  navUserButton.innerHTML = `
	<a href="(H)SignUp.html">
	  <button id="navSignUp">
		<strong><span>Sign Up</span></strong>
	  </button>
	</a>
  `;
} else if (userState === "signedUp") {
  navUserButton.innerHTML = `
	<a href="(I)Login.html">
	  <button id="navLogin">
		<strong><span>Log In</span></strong>
	  </button>
	</a>
  `;
} else if (userState === "loggedIn") {
  navUserButton.innerHTML = `
	<a href="(J)Dashboard.html">
	  <button id="navDashboard">
		<strong><span>Dashboard</span></strong>
	  </button>
	</a>
  `;
}