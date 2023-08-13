console.log("Chrome Extension is ready to go!");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message.txt);
  if (message.txt === "hello") {
    let paragraphs = document.getElementsByTagName("p");
    for (el of paragraphs) {
      el.style["background-color"] = "#FF00FF";
    }
  }
}
