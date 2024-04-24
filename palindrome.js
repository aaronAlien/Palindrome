const userInput = document.getElementById("text-input");
const submitButton = document.getElementById("check-btn");
const output = document.getElementById("result");

function palindrome(str) {
  str = String(str);
  let normal = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let reversed = normal.split("").reverse().join("");
  return { isPalindrome: normal == reversed, notPalindrome: reversed };
}

//console.log(palindrome("chi*keN"));

submitButton.addEventListener("click", () => {
  const input = userInput.value;
  if (input === "") {
    alert("Please enter a word.");
    return;
  }

  submitButton.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      const input = userInput.value;
    } else {
      alert("Please enter a word.");
      return;
    }
  });

  const { isPalindrome, notPalindrome } = palindrome(input);

  if (isPalindrome) {
    output.textContent = `${input.toUpperCase()} is a palindrome!`;
  } else {
    output.textContent = `${input.toUpperCase()} is not a palindrome...`;
  }
});
