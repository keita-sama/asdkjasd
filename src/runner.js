// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) {
  var mypre = document.getElementById("console");
  mypre.innerHTML = mypre.innerHTML + text;
}

function builtinRead(x) {
  if (
    Sk.builtinFiles === undefined ||
    Sk.builtinFiles["files"][x] === undefined
  )
    throw "File not found: '" + x + "'";
  return Sk.builtinFiles["files"][x];
}

export function runit() {
  console.log(window.editor.getValue());
  var prog = window.editor.getValue();
  var mypre = document.getElementById("console");
  mypre.innerHTML = "";
  Sk.pre = "output";
  Sk.onAfterImport = function (library) {
    switch (library) {
      case "turtle":
        // make turtle draw instantly
        //   .defaults.animate = false;
        console.log("Uhm, hello?");
        console.log(Sk.TurtleGraphics);
        Sk.TurtleGraphics._color = 'white';
        
        // Sk.TurtleGraphics
        break;
    }
  };
  Sk.configure({
    output: outf,
    read: builtinRead,
    killableWhile: true,
    killableFor: true,
    inputfunTakesPrompt: true,
  });

  //   sort ts out
  
  (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = "turtle-canvas";

  var myPromise = Sk.misceval.asyncToPromise(function () {
    return Sk.importMainWithBody("<stdin>", false, prog, true);
  });
  myPromise.then(
    function (mod) {
      console.log("success");
    },
    function (err) {
      var mypre = document.getElementById("console");
      mypre.innerHTML = err.toString();
      // console.log(err.toString());
    }
  );
}
