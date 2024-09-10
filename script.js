let result = document.getElementById("result");
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (result.innerText == "" &&(button.id == "+" ||button.id == "/" ||button.id == "-" || button.id == "*")) {
      result.innerText = "";
    } 
    else if (button.id != "" && button.id == "equal-btn") {
      try {
        let expression = result.innerText;
        let evaluation = eval(expression);
        if (!Number.isInteger(evaluation)) {
          result.innerText = evaluation.toFixed(3);
        } else {
          result.innerText = evaluation;
        }
      } catch (error) {
        result.innerText = "Error";
        setTimeout(() => {
          result.innerText = "";
        }, 1500);
      }
    } 
    else if (button.id == "reset") {
      result.innerText = "";
    } 
    else if (button.id == "delete") {
      let string = result.innerText;
      result.innerText = string.substring(0, string.length - 1);
    } 
    else {
      result.innerText += button.id;
    }
  });
});
