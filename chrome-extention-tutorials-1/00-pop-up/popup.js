document.addEventListener("DOMContentLoaded", function () {
  var nameInput = document.querySelector("#name");
  var greetElement = document.querySelector("#greet");

  nameInput.addEventListener("keyup", function () {
    greetElement.textContent = "Hello " + nameInput.value;
  });
});
