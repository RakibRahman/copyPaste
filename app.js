// const copyArea = document.getElementById("copyArea");
// const pasteArea = document.getElementById("pasteArea");
// const copyBTN = document.getElementById("copyBTN");
// const pasteBTN = document.getElementById("pasteBTN");
const confirm = document.getElementById("confirm");
const reset = document.getElementById("reset");
const support = document.getElementById("support");

reset.addEventListener("click", function reset() {
  pasteArea.value = "";
});

// //! Detecting Support
support.addEventListener("click", function () {
  return navigator.clipboard
    ? (confirm.innerHTML = "Clipboard Api is Supported")
    : (confirm.innerHTML = "Clipboard Api is Not Supported");
});
const readBtn = document.querySelector(".read-btn");
const writeBtn = document.querySelector(".write-btn");

const resultsEl = document.querySelector(".clipboard-results");
const inputEl = document.querySelector(".to-copy");
