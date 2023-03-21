`use strict`;

function addInput(sentButton, depth, whichDiv, depthDivId) {
  //Determine in which div create new element
  const parentDiv = document.getElementById(`depth--${depth}-${whichDiv}`);

  //Creation sub-div
  const newDiv = document.createElement("div");
  newDiv.setAttribute("id", `depth--${depth + 1}-${depthDivId.length}`);
  newDiv.setAttribute("class", `depth--${depth + 1}`);

  //Creation container div for all options in input
  const subContainer = document.createElement("div");
  subContainer.setAttribute("class", "subContainer");
  subContainer.classList.add("show");

  const inputsDiv = document.createElement("div");
  inputsDiv.setAttribute("class", "inputsDiv");

  const addButtonDiv = document.createElement("div");
  addButtonDiv.setAttribute("class", "addButtonDiv");

  const newInput = `
      <div class="questionDiv">
        <p>Question:</p>
        <input class="questionInput" type="text" 
        placeholder="Ask question" 
        onfocus="this.placeholder=''"
        onblur="this.placeholder = 'Ask question'">
      </div>
      `;

  const questionType = `
        <div class="typeDiv">
          <p>Type: </p>
            <select name="types" id="type">
              <option value="yesno">Yes/No</option>
              <option value="text">Text</option>
              <option value="number">Number</option>
            </select>
        </div>
      `;

  //If we've created our first element we should change button
  if (sentButton.matches(".starterButton")) {
    sentButton.classList.remove("starterButton");
    sentButton.classList.add("button-0");
    sentButton.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-5 h-5 addIcon-0"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          clip-rule="evenodd"
        />
      </svg>
  
      <span>Add input</span>`;
  }

  if (depth !== 0) {
    const firstConditionPart =
      parentDiv.querySelector("#type").value === "text" ||
      parentDiv.querySelector("#type").value === "yesno"
        ? `
          <div class="conditionDiv" >
            <p>Condition: </p>
            <select name="conditions" id="condition">
              <option value="equals">Equals</option>
            </select>
            `
        : `
          <div class="conditionDiv" >
            <p>Condition</p>
            <select name="conditions" id="condition">
              <option value="equals">Equals</option>
              <option value="greaterThan">Greater than</option>
              <option value="lessThan">Less than</option>
            </select>`;

    inputsDiv.innerHTML =
      parentDiv.querySelector("#type").value === "text" ||
      parentDiv.querySelector("#type").value === "number"
        ? firstConditionPart +
          `
                <input class="conditionInput" type="text"
                placeholder="Provide condition" 
                onfocus="this.placeholder=''"
                onblur="this.placeholder = 'Provide condition'"
                >
              </div>`
        : firstConditionPart +
          `
              <fieldset id="fieldset--${depth + 1}-${depthDivId.length}">
                <div>
                  <input type="radio" 
                  id="yes--${depth + 1}-${depthDivId.length}"
                  name="fieldset--${depth + 1}-${depthDivId.length}"
                  value="yes">
                  <label for="yes--${depth + 1}-${depthDivId.length}">Yes
                  </label>
                </div>
                <div> 
                  <input type="radio" 
                  id="no--${depth + 1}-${depthDivId.length}" 
                  name="fieldset--${depth + 1}-${depthDivId.length}"
                  value="no">
                  <label for="no--${depth + 1}-${depthDivId.length}">No</label>
                </div>
              </fieldset>
            </div>`;
  }

  //Create button for creating sub elements
  const newButton = `
      <button
        onClick="verifyInput(this)"
        depth="${depth + 1}"
        whichDiv="${depthDivId.length}">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-5 h-5 addIcon">
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
          clip-rule="evenodd"/>
      </svg>
      <span>Add input</span>
    </button>`;

  inputsDiv.innerHTML += newInput;
  inputsDiv.innerHTML += questionType;

  addButtonDiv.innerHTML += newButton;

  subContainer.appendChild(inputsDiv);
  subContainer.appendChild(addButtonDiv);
  newDiv.appendChild(subContainer);
  parentDiv.appendChild(newDiv);
}

module.exports = addInput;
