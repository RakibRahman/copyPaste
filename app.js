const confirm = document.getElementById("confirm");
const reset = document.getElementById("reset");
const support = document.getElementById("support");

reset.addEventListener("click", function reset() {
  pasteArea.value = "";
});

// //! Detecting Support
support.addEventListener("click", function () {
  navigator.clipboard
    ? (confirm.innerHTML = "Clipboard Api is Supported")
    : (confirm.innerHTML = "Clipboard Api is Not Supported");
  setTimeout(() => {
    confirm.innerHTML = "";
  }, 1000);
});
//! copy the text
const copyArea = document.getElementById("copyArea");
const copyBTN = document.getElementById("copyBTN");

const copyText = () => {
  const inputData = copyArea.value.trim(); //?which element to copy

  if (inputData) {
    navigator.clipboard
      .writeText(inputData)
      .then(() => {
        inputData.value = "";

        //! change content of copy btn on successful copy
        if (copyBTN.innerText !== "copied") {
          const originalText = copyBTN.innerText;
          copyBTN.innerText = "Copied";
          setTimeout(() => {
            copyBTN.innerText = originalText;
          }, 1000);
        }
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  }
};
copyBTN.addEventListener("click", copyText);

//! paste the text
const pasteArea = document.getElementById("pasteArea");
const pasteBTN = document.getElementById("pasteBTN");

const pasteData = () => {
  navigator.clipboard
    .readText()
    .then((text) => {
      pasteArea.innerHTML = text;
      //? `text` contains the text read from the clipboard
    })
    .catch((error) => {
      console.log("Something went wrong", error);
    });
};
pasteBTN.addEventListener("click", pasteData);
