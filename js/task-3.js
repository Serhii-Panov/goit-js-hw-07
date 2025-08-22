const userInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
function HandleInput(event) {
  const trimmedUserInput = event.currentTarget.value.trim();
  if (trimmedUserInput !== "") {
    trimmedUserInput.indexOf(" ") === -1
      ? (output.textContent = trimmedUserInput)
      : (output.textContent = trimmedUserInput.slice(
          0,
          trimmedUserInput.indexOf(" ")
        ));
  } else {
    output.textContent = "Anonymous";
  }
}
userInput.addEventListener("input", HandleInput);
