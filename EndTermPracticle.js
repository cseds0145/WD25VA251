function checkEvenOdd() {
  const num = document.getElementById("numberInput").value;
  const result = document.getElementById("result");

  if (num === "") {
    result.textContent = "Please enter a number!";
    result.style.color = "red";
    return;
  }

  if (num % 2 === 0) {
    result.textContent = `${num} is Even ✅`;
    result.style.color = "green";
  } else {
    result.textContent = `${num} is Odd 🔢`;
    result.style.color = "blue";
  }
}
