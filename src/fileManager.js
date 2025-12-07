class CodeFile {
  constructor(name) {
    this.name = name;
    this.date = new Date();
    this.code = "";
  }
  setContent(code) {
    this.code = code;
  }
  fromJSON(json) {
    let unparsedJSON = this.getJSON(json);

    const parsedJSON = JSON.parse(unparsedJSON);

    this.name = parsedJSON.name;
    this.date = new Date(parsedJSON.date);
    this.code = parsedJSON?.code || "";

    return this;
  }
  toJSON() {
    const toStringifiy = {
      name: this.name,
      date: this.date.toString(),
      code: this.code,
    };

    return JSON.stringify(toStringifiy);
  }
  getJSON(json) {
    if (!json) return (new PreviousSessionCode()).toJSON();
    return json;
  }
}

class PreviousSessionCode extends CodeFile {
  constructor() {
    super("recent-iteration-of-code");
  }
  startAutosave() {
    console.log("autosaved began!");
    setInterval(() => {
      this.code = window.editor.getValue();
      this.date = new Date().toString();
      localStorage.setItem(this.name, this.toJSON());
    }, 300);
  }
  fromJSON(json) {
    let unparsedJSON = this.getJSON(json);

    const parsedJSON = JSON.parse(unparsedJSON);

    this.name = parsedJSON.name;
    this.date = new Date(parsedJSON.date);
    this.code = parsedJSON?.code || "";

    return this;
  }
  getJSON(json) {
    if (!json) return (new PreviousSessionCode()).toJSON();
    return json;
  }
}

// Initialize the File Manager;

// ! TODO: Add the fucking file check and give dialogue to load in recent code or keep file same.

addEventListener("DOMContentLoaded", (event) => {
  const recentCode = localStorage.getItem("recent-iteration-of-code");
  const autosavedCode = new PreviousSessionCode().fromJSON(recentCode);

  if (!recentCode || autosavedCode.code == "") {
    window.editor.setValue("from turtle import *");
  } else {
    window.editor.setValue(autosavedCode.code);
  }

  autosavedCode.startAutosave();
});
