const appDiv = document.getElementById("app");

let inputs = document.getElementById("inputs");
let filterBtn = document.getElementById("filter");
let reduceBtn = document.getElementById("reduce");
let submitBtn = document.getElementById("submit");

let selected = "filter";

filterBtn.onchange = () => {
  reduceBtn.checked = false;
  selected = "filter";
};

reduceBtn.onchange = () => {
  filterBtn.checked = false;
  selected = "reduce";
};

submitBtn.addEventListener("click", (data) => {
  let numbers = inputs.value.split(",");
  let invalidDetected = false;

  let element = document.getElementById("output");

  if (selected === "filter") {
    let filtered = numbers.filter((x) => {
      let number = parseInt(x);

      if (isNaN(number)) {
        invalidDetected = true;
        return false;
      } else {
        if (number % 2 === 0) {
          return true;
        } else return false;
      }
    });
    if (invalidDetected) {
      element.innerText = "Something went wrong!";
    } else element.innerText = filtered;
  }
  if (selected === "reduce") {
    let reduced = numbers.reduce((a, b) => {
      let numberB = parseInt(b);
      let numberA = parseInt(a);

      if (isNaN(numberA) || isNaN(numberB)) {
        invalidDetected = true;
      }

      return numberA + numberB;
    });

    if (invalidDetected) {
      element.innerText = "Something went wrong!";
    }
    element.innerText = reduced;
  }
});
