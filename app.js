var dateOfBirth = document.querySelector("#birth-date");
var luckyNumber = document.querySelector("#lucky-number");
var checkButton = document.querySelector("#check-button");
var outputBox = document.querySelector("#output-box");
function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputBox.innerText = "Your birthday is lucky";
  } else {
    outputBox.innerText = "Your birthday is not lucky";
  }
}

function checkBirthdayIsLuckyHandler() {
  var dob = dateOfBirth.value;
  var sum = calculateSum(dob);
  //   console.log(luckyNumber.value);
  compareValues(sum, luckyNumber.value);
}

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  var sum = 0;
  for (var i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkButton.addEventListener("click", checkBirthdayIsLuckyHandler);
