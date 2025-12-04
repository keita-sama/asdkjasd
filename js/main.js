if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      let reg;
      reg = await navigator.serviceWorker.register("anyotherfilename.js");
      console.log("Service worker registered!", reg);
    } catch (err) {
      console.log("Service worker registration failed: ", err);
    }
  });
}

function showCode() {
  const canvas = document.getElementById("drawer");
  const editor = document.getElementById("editor");

  const codeBtn = document.getElementById("code");
  const imageBtn = document.getElementById("image");

  if (!canvas.classList.contains("off")) {
    canvas.classList.add("off");
    codeBtn.classList.add("nav-btn-selected");
    imageBtn.classList.remove("nav-btn-selected");
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
    codeBtn.classList.remove("nav-btn-selected");
    imageBtn.classList.add("nav-btn-selected");
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
