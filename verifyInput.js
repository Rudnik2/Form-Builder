`use strict`;
function verifyInput(sentButton) {
  const depth = Number(sentButton.getAttribute("depth"));
  const whichDiv = Number(sentButton.getAttribute("whichDiv"));
  const parentDiv = document.getElementById(`depth--${depth}-${whichDiv}`);
  const depthDivId = document.getElementsByClassName("depth--" + (depth + 1));
  let warningMessage = document.createElement("p");
  warningMessage.classList.add("warning");

  //Check if parent class have element with "warning" class
  parentDiv.childNodes.forEach((child) => {
    if (
      typeof child === "object" &&
      child !== null &&
      "getAttribute" in child
    ) {
      if (child.getAttribute("class") === "warning") {
        child.remove();
      }
    }
  });

  if (depth === 0) {
    // Creation of our first input
    try {
      console.log("successfully created first input");
      addInput(sentButton, depth, whichDiv, depthDivId);
    } catch (e) {
      console.log(e);
    }
  } else if (depth === 1) {
    if (parentDiv.querySelector(".questionInput").value === "") {
      // If Question is empty
      console.log("Provide question input");

      warningMessage.textContent = "Question is empty";
      parentDiv.appendChild(warningMessage);
      parentDiv.classList.remove("horizontalShake");
      setTimeout(function () {
        parentDiv.classList.add("horizontalShake");
      });
    } else {
      try {
        console.log("successfully created input on depth number 1");
        addInput(sentButton, depth, whichDiv, depthDivId);
      } catch (e) {
        console.log(e);
      }
    }
  } else {
    //If radiobutton was clicked
    if (parentDiv.parentElement.querySelector("#type").value === "yesno") {
      if (
        parentDiv.querySelector("fieldset").querySelector(`input:checked`)
          ?.value === "yes" ||
        parentDiv.querySelector("fieldset").querySelector(`input:checked`)
          ?.value === "no"
      ) {
        if (parentDiv.querySelector(".questionInput").value === "") {
          // If Question is empty
          console.log("Ask another question");
          warningMessage.textContent = "Question is empty";
          parentDiv.appendChild(warningMessage);
          parentDiv.classList.remove("horizontalShake");
          setTimeout(function () {
            parentDiv.classList.add("horizontalShake");
          });
        } else {
          try {
            console.log("successfully created new input type of yes/no");
            addInput(sentButton, depth, whichDiv, depthDivId);
          } catch (e) {
            console.log(e);
          }
        }
      } else {
        //If radiobutton was not clicked
        console.log("Click radio button");
        warningMessage.textContent = "Radio not clicked";
        parentDiv.appendChild(warningMessage);
        parentDiv.classList.remove("horizontalShake");
        setTimeout(function () {
          parentDiv.classList.add("horizontalShake");
        });
      }
    } else if (
      parentDiv.parentElement.querySelector("#type").value === "text" ||
      parentDiv.parentElement.querySelector("#type").value === "number"
    ) {
      //If condition input was not filled
      if (parentDiv.querySelector(".conditionInput").value === "") {
        console.log("Add condition input");
        warningMessage.textContent = "Please provide condition";
        parentDiv.appendChild(warningMessage);
        parentDiv.classList.remove("horizontalShake");
        setTimeout(function () {
          parentDiv.classList.add("horizontalShake");
        });
      } else {
        //If condition was provided
        if (parentDiv.querySelector(".questionInput").value === "") {
          // If Question is empty
          console.log("Add question input");
          warningMessage.textContent = "Question is empty";
          parentDiv.appendChild(warningMessage);
          parentDiv.classList.remove("horizontalShake");
          setTimeout(function () {
            parentDiv.classList.add("horizontalShake");
          });
        } else {
          try {
            console.log(
              "successfully created new input with type of text/number"
            );
            addInput(sentButton, depth, whichDiv, depthDivId);
          } catch (e) {
            console.log(e);
          }
        }
      }
    }
  }
}
module.exports = verifyInput;
