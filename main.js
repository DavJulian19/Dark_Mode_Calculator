const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

function handleKeyPress(event) {
  const key = event.key;

  if (!isNaN(key) || key === "+" || key === "-" || key === "*" || key === "/") {
    display.innerText += key;
  } else if (key === "Enter") {
    if (display.innerText !== "") {
      display.innerText = eval(display.innerText);
    }
  } else if (key === "Backspace") {
    let string = display.innerText.toString();
    display.innerText = string.substr(0, string.length - 1);
  }
}

document.addEventListener("keydown", handleKeyPress);

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Null";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
