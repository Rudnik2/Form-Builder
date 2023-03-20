// Set up the DOM environment
const { JSDOM } = require("jsdom");
const dom = new JSDOM();
global.document = dom.window.document;
const addInput = require("./addInput");

test("Creating element on depth=0", () => {
  // Set up
  document.body.innerHTML = `
    <div id="depth--0-0" class="depth--0"></div>
    <button
        onclick="verifyInput(this)"
        depth="0"
        whichdiv="0"
        class="starterButton">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-5 h-5 starterAddIcon">
        <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
        clip-rule="evenodd"
        ></path>
    </svg>
    <span>Add your first question</span>
    </button>`;
  const addButton = document.getElementsByClassName("starterButton")[0];
  const depth = Number(addButton.getAttribute("depth"));
  const whichDiv = Number(addButton.getAttribute("whichDiv"));
  const depthDivId = document.getElementsByClassName("depth--" + (depth + 1));
  addInput(addButton, depth, whichDiv, depthDivId);

  expect(document.body.innerHTML.replace(/\s/g, "")).toBe(
    `
    <div id="depth--0-0" class="depth--0"><div id="depth--1-0" class="depth--1"><div class="containerDiv show"><div class="inputDiv">
    <div class="questionDiv">
        <p>Question:</p>
        <input class="questionInput" type="text" placeholder="Ask question" onfocus="this.placeholder=''" onblur="this.placeholder = 'Ask question'">
    </div>
    
        <div class="typeDiv">
        <p>Type: </p>
            <select name="types" id="type">
            <option value="yesno">Yes/No</option>
            <option value="text">Text</option>
            <option value="number">Number</option>
            </select>
        </div>
    </div><div class="addButtonDiv">
    <button onclick="verifyInput(this)" depth="1" whichdiv="0">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 addIcon">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clip-rule="evenodd"></path>
    </svg>
    <span>Add input</span>
    </button>
    </div></div></div></div>
    <button onclick="verifyInput(this)" depth="0" whichdiv="0" class="button-0">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 addIcon-0">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z" clip-rule="evenodd"></path>
    </svg>

    <span>Add input</span>
    </button>`.replace(/\s/g, "")
  );
});

test("Creating sub-element with type of Yes/No ", () => {
  // Set up
  document.body.innerHTML = `
  <div id="depth--0-0" class="depth--0">
  <div id="depth--1-0" class="depth--1">
    <div class="containerDiv show">
      <div class="inputDiv">
        <div class="questionDiv">
          <p>Question:</p>
          <input
            class="questionInput"
            type="text"
            placeholder="Ask question"
            onfocus="this.placeholder=''"
            onblur="this.placeholder = 'Ask question'"
          />
        </div>

        <div class="typeDiv">
          <p>Type:</p>
          <select name="types" id="type">
            <option value="yesno">Yes/No</option>
            <option value="text">Text</option>
            <option value="number">Number</option>
          </select>
        </div>
      </div>
      <div class="addButtonDiv">
        <button onclick="verifyInput(this)" depth="1" whichdiv="0" id="button-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-5 h-5 addIcon"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Add input</span>
        </button>
      </div>
    </div>
  </div>
</div>`;
  const addButton = document.getElementById("button-1");
  const depth = Number(addButton.getAttribute("depth"));
  const whichDiv = Number(addButton.getAttribute("whichDiv"));
  const depthDivId = document.getElementsByClassName("depth--" + (depth + 1));
  addInput(addButton, depth, whichDiv, depthDivId);

  expect(document.body.innerHTML.replace(/\s/g, "")).toBe(
    `<div id="depth--0-0" class="depth--0">
    <div id="depth--1-0" class="depth--1">
      <div class="containerDiv show">
        <div class="inputDiv">
          <div class="questionDiv">
            <p>Question:</p>
            <input
              class="questionInput"
              type="text"
              placeholder="Ask question"
              onfocus="this.placeholder=''"
              onblur="this.placeholder = 'Ask question'"
            >
          </div>
  
          <div class="typeDiv">
            <p>Type:</p>
            <select name="types" id="type">
              <option value="yesno">Yes/No</option>
              <option value="text">Text</option>
              <option value="number">Number</option>
            </select>
          </div>
        </div>
        <div class="addButtonDiv">
          <button onclick="verifyInput(this)" depth="1" whichdiv="0" id="button-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5 addIcon"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Add input</span>
          </button>
        </div>
      </div>
      <div id="depth--2-0" class="depth--2">
        <div class="containerDiv show">
          <div class="inputDiv">
            <div class="conditionDiv">
              <p>Condition:</p>
              <select name="conditions" id="condition">
                <option value="equals">Equals</option>
              </select>
  
              <fieldset id="fieldset--2-0">
                <div>
                  <input
                    type="radio"
                    id="yes--2-0"
                    name="fieldset--2-0"
                    value="yes"
                  >
                  <label for="yes--2-0">Yes</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="no--2-0"
                    name="fieldset--2-0"
                    value="no"
                  >
                  <label for="no--2-0">No</label>
                </div>
              </fieldset>
            </div>
  
            <div class="questionDiv">
              <p>Question:</p>
              <input
                class="questionInput"
                type="text"
                placeholder="Ask question"
                onfocus="this.placeholder=''"
                onblur="this.placeholder = 'Ask question'"
              >
            </div>
  
            <div class="typeDiv">
              <p>Type:</p>
              <select name="types" id="type">
                <option value="yesno">Yes/No</option>
                <option value="text">Text</option>
                <option value="number">Number</option>
              </select>
            </div>
          </div>
          <div class="addButtonDiv">
            <button onclick="verifyInput(this)" depth="2" whichdiv="0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 addIcon"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Add input</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  `.replace(/\s/g, "")
  );
});

test("Creating sub-element with type of Number ", () => {
  // Set up
  document.body.innerHTML = `
    <div id="depth--0-0" class="depth--0">
    <div id="depth--1-0" class="depth--1">
      <div class="containerDiv show">
        <div class="inputDiv">
          <div class="questionDiv">
            <p>Question:</p>
            <input
              class="questionInput"
              type="text"
              placeholder="Ask question"
              onfocus="this.placeholder=''"
              onblur="this.placeholder = 'Ask question'"
            />
          </div>
  
          <div class="typeDiv">
            <p>Type:</p>
            <select name="types" id="type">
              <option value="yesno">Yes/No</option>
              <option value="text">Text</option>
              <option value="number">Number</option>
            </select>
          </div>
        </div>
        <div class="addButtonDiv">
          <button onclick="verifyInput(this)" depth="1" whichdiv="0" id="button-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5 addIcon"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Add input</span>
          </button>
        </div>
      </div>
    </div>
  </div>`;
  const addButton = document.getElementById("button-1");
  const depth = Number(addButton.getAttribute("depth"));
  const whichDiv = Number(addButton.getAttribute("whichDiv"));
  const depthDivId = document.getElementsByClassName("depth--" + (depth + 1));
  const type = document.getElementById("type");
  type.value = "number";
  addInput(addButton, depth, whichDiv, depthDivId);

  expect(document.body.innerHTML.replace(/\s/g, "")).toBe(
    `<div id="depth--0-0" class="depth--0">
    <div id="depth--1-0" class="depth--1">
      <div class="containerDiv show">
        <div class="inputDiv">
          <div class="questionDiv">
            <p>Question:</p>
            <input
              class="questionInput"
              type="text"
              placeholder="Ask question"
              onfocus="this.placeholder=''"
              onblur="this.placeholder = 'Ask question'"
            >
          </div>
  
          <div class="typeDiv">
            <p>Type:</p>
            <select name="types" id="type">
              <option value="yesno">Yes/No</option>
              <option value="text">Text</option>
              <option value="number">Number</option>
            </select>
          </div>
        </div>
        <div class="addButtonDiv">
          <button onclick="verifyInput(this)" depth="1" whichdiv="0" id="button-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5 addIcon"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Add input</span>
          </button>
        </div>
      </div>
      <div id="depth--2-0" class="depth--2">
        <div class="containerDiv show">
          <div class="inputDiv">
            <div class="conditionDiv">
              <p>Condition</p>
              <select name="conditions" id="condition">
                <option value="equals">Equals</option>
                <option value="greaterThan">Greater than</option>
                <option value="lessThan">Less than</option>
              </select>
  
              <input
                class="conditionInput"
                type="text"
                placeholder="Provide condition"
                onfocus="this.placeholder=''"
                onblur="this.placeholder = 'Provide condition'"
              >
            </div>
  
            <div class="questionDiv">
              <p>Question:</p>
              <input
                class="questionInput"
                type="text"
                placeholder="Ask question"
                onfocus="this.placeholder=''"
                onblur="this.placeholder = 'Ask question'"
              >
            </div>
  
            <div class="typeDiv">
              <p>Type:</p>
              <select name="types" id="type">
                <option value="yesno">Yes/No</option>
                <option value="text">Text</option>
                <option value="number">Number</option>
              </select>
            </div>
          </div>
          <div class="addButtonDiv">
            <button onclick="verifyInput(this)" depth="2" whichdiv="0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 addIcon"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Add input</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
    `.replace(/\s/g, "")
  );
});

test("Creating sub-element with type of Text ", () => {
  // Set up
  document.body.innerHTML = `
      <div id="depth--0-0" class="depth--0">
      <div id="depth--1-0" class="depth--1">
        <div class="containerDiv show">
          <div class="inputDiv">
            <div class="questionDiv">
              <p>Question:</p>
              <input
                class="questionInput"
                type="text"
                placeholder="Ask question"
                onfocus="this.placeholder=''"
                onblur="this.placeholder = 'Ask question'"
              />
            </div>
    
            <div class="typeDiv">
              <p>Type:</p>
              <select name="types" id="type">
                <option value="yesno">Yes/No</option>
                <option value="text">Text</option>
                <option value="number">Number</option>
              </select>
            </div>
          </div>
          <div class="addButtonDiv">
            <button onclick="verifyInput(this)" depth="1" whichdiv="0" id="button-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 addIcon"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Add input</span>
            </button>
          </div>
        </div>
      </div>
    </div>`;
  const addButton = document.getElementById("button-1");
  const depth = Number(addButton.getAttribute("depth"));
  const whichDiv = Number(addButton.getAttribute("whichDiv"));
  const depthDivId = document.getElementsByClassName("depth--" + (depth + 1));
  const type = document.getElementById("type");
  type.value = "text";
  addInput(addButton, depth, whichDiv, depthDivId);

  expect(document.body.innerHTML.replace(/\s/g, "")).toBe(
    `<div id="depth--0-0" class="depth--0">
    <div id="depth--1-0" class="depth--1">
      <div class="containerDiv show">
        <div class="inputDiv">
          <div class="questionDiv">
            <p>Question:</p>
            <input
              class="questionInput"
              type="text"
              placeholder="Ask question"
              onfocus="this.placeholder=''"
              onblur="this.placeholder = 'Ask question'"
            >
          </div>
  
          <div class="typeDiv">
            <p>Type:</p>
            <select name="types" id="type">
              <option value="yesno">Yes/No</option>
              <option value="text">Text</option>
              <option value="number">Number</option>
            </select>
          </div>
        </div>
        <div class="addButtonDiv">
          <button onclick="verifyInput(this)" depth="1" whichdiv="0" id="button-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5 addIcon"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Add input</span>
          </button>
        </div>
      </div>
      <div id="depth--2-0" class="depth--2">
        <div class="containerDiv show">
          <div class="inputDiv">
            <div class="conditionDiv">
              <p>Condition:</p>
              <select name="conditions" id="condition">
                <option value="equals">Equals</option>
              </select>
  
              <input
                class="conditionInput"
                type="text"
                placeholder="Provide condition"
                onfocus="this.placeholder=''"
                onblur="this.placeholder = 'Provide condition'"
              >
            </div>
  
            <div class="questionDiv">
              <p>Question:</p>
              <input
                class="questionInput"
                type="text"
                placeholder="Ask question"
                onfocus="this.placeholder=''"
                onblur="this.placeholder = 'Ask question'"
              >
            </div>
  
            <div class="typeDiv">
              <p>Type:</p>
              <select name="types" id="type">
                <option value="yesno">Yes/No</option>
                <option value="text">Text</option>
                <option value="number">Number</option>
              </select>
            </div>
          </div>
          <div class="addButtonDiv">
            <button onclick="verifyInput(this)" depth="2" whichdiv="0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 addIcon"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Add input</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
      `.replace(/\s/g, "")
  );
});
