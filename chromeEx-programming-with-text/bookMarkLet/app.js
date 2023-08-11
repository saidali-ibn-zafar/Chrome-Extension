(function () {
  console.log("bookmarklet starting");
  let paragraphs = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, span");
  //   for (let i = 0; i < paragraphs.length; i++) {
  //     paragraphs[i].innerHTML = "kitten";
  //   }

  paragraphs.forEach((el) => {
    el.innerHTML = " ";
  });
})();
