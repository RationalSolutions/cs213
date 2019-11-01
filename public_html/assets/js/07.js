
function validateNumericInput(elementName) {
  let userInput = document.getElementById(elementName).value;
  let regExp = /[+-]?([0-9]*[.])?[0-9]+/;
  let valid = true;

  if (!(userInput.length === 0))
  {
    if (!regExp.test(userInput)) {
      document.getElementById(elementName + 'Error').innerText = "Please" +
        " only enter digits";
      valid = false;
    } else document.getElementById(elementName + 'Error').innerText = "";

    if (elementName === 'apr'){
      valid = determineValidRange(0, 25, userInput, elementName);
    }

    if (elementName === 'term'){
      valid = determineValidRange(0, 40, userInput, elementName);
    }

    if (elementName === 'amount'){
      valid = determineValidRange(0, 0, userInput, elementName);
    }
  }
  return valid;
}


function calculateMonthlyPayment() {
  let apr = document.getElementById('apr').value;
  let term = document.getElementById('term').value;
  let amount = document.getElementById('amount').value;

  console.log(validateNumericInput('apr'));
  if (!validateNumericInput('apr')){
    document.getElementById('apr').focus();
    alert('apr error');
  }



  let months = term * 12;
  let monthlyRate = apr / 100 / 12;

  let monthlyPayment = amount * monthlyRate *
    (Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  document.getElementById('payment').innerText = '$' +
    monthlyPayment.toFixed(2);
}


function determineValidRange(min, max, value, elementId) {
  if (value < min)
  {
    document.getElementById(elementId + 'Error').innerText = "Please enter a" +
      " value equal to or greater than " + min;

    return false;
  }

  if (elementId != 'amount')
  {
    if (value > max)
    {
      document.getElementById(elementId + 'Error').innerText = "Please enter a" +
        " value equal to or less than " + max;

      return false;
    }
  }
  return true;
}


function resetForm() {
  document.getElementById('mortgageCalc').reset();
  document.getElementById('aprError').innerText = "";
  document.getElementById('termError').innerText = "";
  document.getElementById('amountError').innerText = "";
  document.getElementById('apr').focus();
}