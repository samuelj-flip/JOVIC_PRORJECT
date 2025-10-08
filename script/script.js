function loginForm(event) {
  event.preventDefault(); // stop form from reloading the page

  const name = document.getElementById("name").value.trim();
  const gender = document.getElementById("gender").value.trim();
  const age = parseInt(document.getElementById("age").value.trim());
  const country = document.getElementById("country").value.trim();
  const password = document.getElementById("password").value;

  if (
    name.toLowerCase() === "samuel james".toLowerCase() &&
    gender === "Male" &&
    age === 20 &&
    country.toLowerCase() === "nigeria".toLowerCase() &&
    password === "samuel123"
  ) {
    alert("Access Granted!");
    console.log("Access Granted!");
  } else {
    alert("Access Denied!");
    console.log("Access Denied!");
  }

  return false; // also prevents reload
}
