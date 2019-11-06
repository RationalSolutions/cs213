const numericRegExp = /[+-]?([0-9]*[.])?[0-9]+/;

function validateAPRInput() {
  console.log("Entered validateAPRInput()");
  let min = 0.00;
  let max = 25.00;
  let userInput = document.getElementById('apr').value;

  if (!(userInput.length === 0)) {
    if (!numericRegExp.test(userInput)) {
      document.getElementById('aprError').innerText = "Please enter a number";
      return false;
    } else document.getElementById('aprError').innerText = "";

    if (userInput < min) {
      document.getElementById('aprError').innerText = "Please enter a value" +
        " equal to or greater than " + min;
      return false;
    }

    if (userInput > max) {
      document.getElementById('aprError').innerText = "Please enter a" +
        " value equal to or less than " + max;
      return false;
    }
  }
  return true;
}

function validateTermInput() {
  let min = 0.00;
  let max = 40.00;
  let userInput = document.getElementById('term').value;

  if (!(userInput.length === 0)) {
    if (!numericRegExp.test(userInput)) {
      document.getElementById('termError').innerText = "Please enter a number";
      return false;
    } else document.getElementById('termError').innerText = "";

    if (userInput < min) {
      document.getElementById('termError').innerText = "Please enter a value" +
        " equal to or greater than " + min;
      return false;
    }

    if (userInput > max) {
      document.getElementById('termError').innerText = "Please enter a" +
        " value equal to or less than " + max;
      return false;
    }
  }
  return true;
}

function validateAmountInput() {
  let min = 0.00;
  let userInput = document.getElementById('amount').value;

  if (!(userInput.length === 0)) {
    if (!numericRegExp.test(userInput)) {
      document.getElementById('amountError').innerText = "Please enter a number";
      return false;
    } else document.getElementById('amountError').innerText = "";

    if (userInput < min) {
      document.getElementById('amountError').innerText = "Please enter a value" +
        " equal to or greater than " + min;
      return false;
    }
  }
  return true;
}


function calculateMonthlyPayment() {
  if (validateAPRInput())
  {
    if (validateTermInput())
    {
      if (validateAmountInput())
      {
        let apr = document.getElementById('apr').value;
        let term = document.getElementById('term').value;
        let amount = document.getElementById('amount').value;

        let months = term * 12;
        let monthlyRate = apr / 100 / 12;

        let monthlyPayment = amount * monthlyRate *
          (Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1);

        document.getElementById('payment').innerText = '$' +
          monthlyPayment.toFixed(2);
      }else
      {
        document.getElementById('amount').focus();
      }
    }else
    {
      document.getElementById('term').focus();
    }
  }else
  {
    document.getElementById('apr').focus();
  }

}

function resetForm() {
  document.getElementById('mortgageCalc').reset();
  document.getElementById('aprError').innerText = "";
  document.getElementById('termError').innerText = "";
  document.getElementById('amountError').innerText = "";
  document.getElementById('payment').innerText = "";
  document.getElementById('apr').focus();
}