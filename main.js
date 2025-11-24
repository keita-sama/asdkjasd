/*
 ! TODO
    - Implement PASTE, INDENT, UNINDENT buttons
    *** Started on them but they're kinda hard to fiddle with.
    ** hip hip hooray for monaco being very shit with mobl
 */

function showCode() {
  const canvas = document.getElementById("drawer");
  const editor = document.getElementById("editor");

  const codeBtn = document.getElementById("code");
  const imageBtn = document.getElementById("image");

  if (!canvas.classList.contains("off")) {
    canvas.classList.add("off");
    codeBtn.classList.add("btn-selected");
    imageBtn.classList.remove("btn-selected");
  }
  if (editor.classList.contains("off")) {
    editor.classList.remove("off");
  }
}

function showDrawn() {
  const canvas = document.getElementById("drawer");
  const editor = document.getElementById("editor");

  const codeBtn = document.getElementById("code");
  const imageBtn = document.getElementById("image");

  if (!editor.classList.contains("off")) {
    editor.classList.add("off");
    codeBtn.classList.remove("btn-selected");
    imageBtn.classList.add("btn-selected");
  }
  if (canvas.classList.contains("off")) {
    canvas.classList.remove("off");
  }
}

// Ace editor stuff
// function indentLine() {
//     window.editor.blockIndent()
// }

// function unindentLine() {
//     window.editor.blockOutdent()
// }

// function pasteText() {
//     navigator.clipboard.readText().then(text => {
//         document.getElementById('editor').innerHTML = text;
//     })
// }


function runCode() {
  showDrawn();
  runit();
}
