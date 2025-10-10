let testText = "The quick brown fox jumps over the lazy dog";
let startTime, endTime;

function startTest() {
  document.getElementById("inputText").value = testText;

  let userInput = document.getElementById("userInput");
  userInput.value = "";
  userInput.readOnly = false;
  userInput.focus();

  document.getElementById("output").innerHTML = "";
  startTime = new Date().getTime();
}

function endTest() {
  console.log("hasnain");
  endTime = new Date().getTime();
  document.getElementById("userInput").readOnly = true;
  var timeElapsed = (endTime - startTime) / 1000;
  var userTypedText = document.getElementById("userInput").value;
  var typedWord = userTypedText.split(/\s/).filter(function (word) {
    return word !== "";
  }).length;
  var wpm;
  if (timeElapsed !== 0 && !isNaN(typedWord)) {
    wpm = Math.round((typedWord / timeElapsed) * 60);
  }

  var outputDisplay = document.getElementById("output");
  outputDisplay.innerHTML =
    "<h2>Typing Test Results:</h2>" +
    "<p>Words Typed: " +
    typedWord +
    "</p>" +
    "<p>Time Elapsed: " +
    timeElapsed.toFixed(2) +
    " seconds</p>" +
    "<p>Words Per Minute (WPM): " +
    wpm +
    "</p>";
}
