// Set up the DOM environment
const { JSDOM } = require("jsdom");
const dom = new JSDOM();
global.document = dom.window.document;
const verifyInput = require("./verifyInput");

test("Verifying first input", () => {
  const mockLog = jest.fn();
  console.log = mockLog;
  // Simulate a click on the button
  document.body.innerHTML = `
      <div id="depth--0-0" class="depth--0"></div>
      <button
        onClick="verifyInput(this)"
        depth="0"
        whichDiv="0"
        class="starterButton">
      </button>
    `;

  const addButton = document.getElementsByClassName("starterButton")[0];
  verifyInput(addButton);
  expect(mockLog).toHaveBeenCalledWith("successfully created first input");
});

test("creation new input without answer input on depth 1", () => {
  const mockLog = jest.fn();
  console.log = mockLog;
  // Simulate a click on the button\
  document.body.innerHTML = `
  <div id="depth--0-0" class="depth--0"><div id="depth--1-0" class="depth--1"><div class="containerDiv show"><div class="inputDiv">
      <div class="questionDiv">
        <p>Question:</p>
        <input class="questionInput" value='' ">
      </div>
      </div>
      <div class="addButtonDiv">
        <button onclick="verifyInput(this)" depth="1" whichdiv="0">
            <span>Add input</span>
        </button>
    </div></div></div></div>`;

  const addButton = document.querySelector("button");
  //   let questionInput = document.getElementsByClassName("questionInput")[0];
  //   questionInput.value = "";
  verifyInput(addButton); //imitate button click
  expect(mockLog).toHaveBeenCalledWith("Provide question input");
});

test("creation new input with answer input on depth 1", () => {
  const mockLog = jest.fn();
  console.log = mockLog;
  // Simulate a click on the button\
  document.body.innerHTML = `
    <div id="depth--0-0" class="depth--0"><div id="depth--1-0" class="depth--1"><div class="containerDiv show"><div class="inputDiv">
        <div class="questionDiv">
          <p>Question:</p>
          <input class="questionInput" value='' ">
        </div>
        </div>
        <div class="addButtonDiv">
          <button onclick="verifyInput(this)" depth="1" whichdiv="0">
              <span>Add input</span>
          </button>
      </div></div></div></div>`;

  const addButton = document.querySelector("button");
  let questionInput = document.getElementsByClassName("questionInput")[0];
  questionInput.value = "Profil Software";
  verifyInput(addButton); //imitate button click
  expect(mockLog).toHaveBeenCalledWith(
    "successfully created input on depth number 1"
  );
});

test("creation new input for Yes/No type", () => {
  const mockLog = jest.fn();
  console.log = mockLog;
  // Simulate a click on the button\
  document.body.innerHTML = `
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
    <button onclick="verifyInput(this)" depth="1" whichdiv="0" id="button-1">
    <span>Add input</span>
    </button>
    </div></div><div id="depth--2-0" class="depth--2"><div class="containerDiv show"><div class="inputDiv">
        <div class="conditionDiv">
            <p>Condition: </p>
            <select name="conditions" id="condition">
            <option value="equals">Equals</option>
            </select>
            
            <fieldset id="fieldset--2-0">
                <div>
                <input type="radio" id="yes--2-0" name="fieldset--2-0" value="yes">
                <label for="yes--2-0">Yes</label>
                </div>
                <div> 
                <input type="radio" id="no--2-0" name="fieldset--2-0" value="no">
                <label for="no--2-0">No</label>
                </div>
            </fieldset>
            </div>
            
    <div class="questionDiv">
        <p>Question:</p>
        <input class="questionInput" id="questionInput-1" type="text" placeholder="Ask question" onfocus="this.placeholder=''" onblur="this.placeholder = 'Ask question'">
    </div>
    </div>
    <div class="addButtonDiv">
        <button onclick="verifyInput(this)" depth="2" whichdiv="0" id="button-2">
            <span>Add input</span>
        </button>
    </div></div></div></div></div>`;

  const addButton = document.getElementById("button-2");
  let questionInput2 = document.getElementById("questionInput-1");
  let radioButton = document.getElementById("yes--2-0");
  radioButton.checked = true;

  questionInput2.value = "Profil Software";
  verifyInput(addButton); //imitate button click
  expect(mockLog).toHaveBeenCalledWith(
    "successfully created new input type of yes/no"
  );
});

test("creation new input without question input", () => {
  const mockLog = jest.fn();
  console.log = mockLog;
  // Simulate a click on the button\
  document.body.innerHTML = `
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
      <button onclick="verifyInput(this)" depth="1" whichdiv="0" id="button-1">
      <span>Add input</span>
      </button>
      </div></div><div id="depth--2-0" class="depth--2"><div class="containerDiv show"><div class="inputDiv">
          <div class="conditionDiv">
              <p>Condition: </p>
              <select name="conditions" id="condition">
              <option value="equals">Equals</option>
              </select>
              
              <fieldset id="fieldset--2-0">
                  <div>
                  <input type="radio" id="yes--2-0" name="fieldset--2-0" value="yes">
                  <label for="yes--2-0">Yes</label>
                  </div>
                  <div> 
                  <input type="radio" id="no--2-0" name="fieldset--2-0" value="no">
                  <label for="no--2-0">No</label>
                  </div>
              </fieldset>
              </div>
              
      <div class="questionDiv">
          <p>Question:</p>
          <input class="questionInput" id="questionInput-1" type="text" placeholder="Ask question" onfocus="this.placeholder=''" onblur="this.placeholder = 'Ask question'">
      </div>
      </div>
      <div class="addButtonDiv">
          <button onclick="verifyInput(this)" depth="2" whichdiv="0" id="button-2">
              <span>Add input</span>
          </button>
      </div></div></div></div></div>`;

  const addButton = document.getElementById("button-2");
  let radioButton = document.getElementById("yes--2-0");
  radioButton.checked = true;
  verifyInput(addButton); //imitate button click
  expect(mockLog).toHaveBeenCalledWith("Ask another question");
});

test("creation new input without radiobutton checked", () => {
  const mockLog = jest.fn();
  console.log = mockLog;
  // Simulate a click on the button\
  document.body.innerHTML = `
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
        <button onclick="verifyInput(this)" depth="1" whichdiv="0" id="button-1">
        <span>Add input</span>
        </button>
        </div></div><div id="depth--2-0" class="depth--2"><div class="containerDiv show"><div class="inputDiv">
            <div class="conditionDiv">
                <p>Condition: </p>
                <select name="conditions" id="condition">
                <option value="equals">Equals</option>
                </select>
                
                <fieldset id="fieldset--2-0">
                    <div>
                    <input type="radio" id="yes--2-0" name="fieldset--2-0" value="yes">
                    <label for="yes--2-0">Yes</label>
                    </div>
                    <div> 
                    <input type="radio" id="no--2-0" name="fieldset--2-0" value="no">
                    <label for="no--2-0">No</label>
                    </div>
                </fieldset>
                </div>
                
        <div class="questionDiv">
            <p>Question:</p>
            <input class="questionInput" id="questionInput-1" type="text" placeholder="Ask question" onfocus="this.placeholder=''" onblur="this.placeholder = 'Ask question'">
        </div>
        </div>
        <div class="addButtonDiv">
            <button onclick="verifyInput(this)" depth="2" whichdiv="0" id="button-2">
                <span>Add input</span>
            </button>
        </div></div></div></div></div>`;

  const addButton = document.getElementById("button-2");
  let questionInput2 = document.getElementById("questionInput-1");
  let radioButtonYes = document.getElementById("yes--2-0");
  let radioButtonNo = document.getElementById("no--2-0");
  radioButtonYes.checked = false;
  radioButtonNo.checked = false;

  questionInput2.value = "Profil Software";
  verifyInput(addButton); //imitate button click
  expect(mockLog).toHaveBeenCalledWith("Click radio button");
});

test("creation new input for text or number type", () => {
  const mockLog = jest.fn();
  console.log = mockLog;
  // Simulate a click on the button\
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
        <button onclick="verifyInput(this)" depth="1" whichdiv="0">
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
              id="conditionInput-2"
              type="text"
              placeholder="Provide condition"
              onfocus="this.placeholder=''"
              onblur="this.placeholder = 'Provide condition'"
            />
          </div>

          <div class="questionDiv">
            <p>Question:</p>
            <input
              class="questionInput"
              id="questionInput-2"
              type="text"
              placeholder="Ask question"
              onfocus="this.placeholder=''"
              onblur="this.placeholder = 'Ask question'"
            />
          </div>

          <div class="typeDiv">
            <p>Type:</p>
            <select name="types" id="type-2">
              <option value="yesno">Yes/No</option>
              <option value="text">Text</option>
              <option value="number">Number</option>
            </select>
          </div>
        </div>
        <div class="addButtonDiv">
          <button onclick="verifyInput(this)" depth="2" whichdiv="0" id="button-2">
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
</div>`;

  const addButton = document.getElementById("button-2");
  const type = document.getElementById("type");
  let questionInput2 = document.getElementById("questionInput-2");
  let conditionInput2 = document.getElementById("conditionInput-2");

  type.value = "number";
  questionInput2.value = "Profil Software";
  conditionInput2.value = "Profil Software";
  verifyInput(addButton); //imitate button click
  expect(mockLog).toHaveBeenCalledWith(
    "successfully created new input with type of text/number"
  );
});

test("creation new input for text or number type", () => {
  const mockLog = jest.fn();
  console.log = mockLog;
  // Simulate a click on the button\
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
          <button onclick="verifyInput(this)" depth="1" whichdiv="0">
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
                id="conditionInput-2"
                type="text"
                placeholder="Provide condition"
                onfocus="this.placeholder=''"
                onblur="this.placeholder = 'Provide condition'"
              />
            </div>
  
            <div class="questionDiv">
              <p>Question:</p>
              <input
                class="questionInput"
                id="questionInput-2"
                type="text"
                placeholder="Ask question"
                onfocus="this.placeholder=''"
                onblur="this.placeholder = 'Ask question'"
              />
            </div>
  
            <div class="typeDiv">
              <p>Type:</p>
              <select name="types" id="type-2">
                <option value="yesno">Yes/No</option>
                <option value="text">Text</option>
                <option value="number">Number</option>
              </select>
            </div>
          </div>
          <div class="addButtonDiv">
            <button onclick="verifyInput(this)" depth="2" whichdiv="0" id="button-2">
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
  </div>`;

  const addButton = document.getElementById("button-2");
  const type = document.getElementById("type");
  let conditionInput2 = document.getElementById("conditionInput-2");

  type.value = "number";
  conditionInput2.value = "Profil Software";
  verifyInput(addButton); //imitate button click
  expect(mockLog).toHaveBeenCalledWith("Add question input");
});

test("creation new input for text or number type", () => {
  const mockLog = jest.fn();
  console.log = mockLog;
  // Simulate a click on the button\
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
            <button onclick="verifyInput(this)" depth="1" whichdiv="0">
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
                  id="conditionInput-2"
                  type="text"
                  placeholder="Provide condition"
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder = 'Provide condition'"
                />
              </div>
    
              <div class="questionDiv">
                <p>Question:</p>
                <input
                  class="questionInput"
                  id="questionInput-2"
                  type="text"
                  placeholder="Ask question"
                  onfocus="this.placeholder=''"
                  onblur="this.placeholder = 'Ask question'"
                />
              </div>
    
              <div class="typeDiv">
                <p>Type:</p>
                <select name="types" id="type-2">
                  <option value="yesno">Yes/No</option>
                  <option value="text">Text</option>
                  <option value="number">Number</option>
                </select>
              </div>
            </div>
            <div class="addButtonDiv">
              <button onclick="verifyInput(this)" depth="2" whichdiv="0" id="button-2">
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
    </div>`;

  const addButton = document.getElementById("button-2");
  const type = document.getElementById("type");
  let questionInput2 = document.getElementById("questionInput-2");

  type.value = "number";
  questionInput2.value = "Profil Software";
  verifyInput(addButton); //imitate button click
  expect(mockLog).toHaveBeenCalledWith("Add condition input");
});
