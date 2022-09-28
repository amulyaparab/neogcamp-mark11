var dateOfBirth = document.querySelector("#birth-date");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-button");
var outputBox = document.querySelector("#output-box");

function checkBirthdayIsLuckyHandler() {
  var dob = dateOfBirth.value;
  var sum = calculateSum(dob);
  compareValues(sum, luckyNumber.value);
  if (dob === "") {
    outputBox.innerText = "Please enter data in both the fields ❌";
  }
  if (luckyNumber.value <= 0) {
    outputBox.innerText = "Please enter valid data❌";
  }
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  var sum = 0;
  for (var i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputBox.innerText = "Your birthday is lucky!🥳🤩";
  } else {
    outputBox.innerText = "Your birthday is not lucky🤕 Make your own luck!";
  }
}

checkButton.addEventListener("click", checkBirthdayIsLuckyHandler);
