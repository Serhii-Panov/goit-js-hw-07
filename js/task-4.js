const form = document.querySelector(".login-form");
form.addEventListener("submit", HandleSubmit);
function HandleSubmit(event) {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }
  const inputs = { email: email.trim(), password: password.trim() };
  console.log(inputs);
  form.reset();
}
