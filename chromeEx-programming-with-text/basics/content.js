console.log("Chrome Extension is ready to go!");

let paragraphs = document.getElementsByTagName("p");
for (el of paragraphs) {
  el.style["background-color"] = "#FF00FF";
}
