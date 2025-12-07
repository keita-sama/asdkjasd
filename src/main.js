// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", async () => {
//     try {
//       let reg;
//       reg = await navigator.serviceWorker.register("anyotherfilename.js");
//       console.log("Service worker registered!", reg);
//     } catch (err) {
//       console.log("Service worker registration failed: ", err);
//     }
//   });
// }

import { runit } from './runner';

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


function runCode() {
  showDrawn();
  runit();
}


// NOTE to self about vite, you have to use the code inside the fiule otherwise it gets cleaned
const runBtn = document.getElementById('run')
const codeBtn = document.getElementById('code')
const drawnBtn = document.getElementById('image')

runBtn.onclick = runCode;
codeBtn.onclick = showCode;
drawnBtn.onclick = showDrawn;
