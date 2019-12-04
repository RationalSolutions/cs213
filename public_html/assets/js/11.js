//Generic Variables
const nameRegEx = /[^0-9\.\,\"\?\!\;\:\#\$\%\&\(\)\*\+\-\/\<\>\=\@\[\]\\\^\_\{\}\|\~]+/;
const phoneRegEx = /\d{3}\-\d{3}\-\d{4}/;
const ccRegEx = /[\d][0-9]{15}/; //Need to come back to enhance
const ccExpRegex = /^([01][0-9])[ -\/]\d{4}/;

//Event Listeners
window.onload = function(){
  document.getElementById("f_name").addEventListener("input", validateFirstName);
  document.getElementById("last_name").addEventListener("input", validateLastName);
  document.getElementById("phone").addEventListener("input", validatePhone);
  document.getElementById("credit_card").addEventListener("input", validateCreditCard);
  document.getElementById("exp_date").addEventListener("input", validateExpDate);
  document.getElementById("form1").addEventListener("submit", validation);
  document.getElementById("form1").addEventListener("reset", reset);
  document.getElementById("products").addEventListener("click", calculateTotal);
}

//Validation Functions
function validateFirstName() {
  console.log("entered validateFirstName()");
  let userInput = document.getElementById("f_name").value;

  if (!(nameRegEx.test(userInput))){
    document.getElementById("fn_err").style.visibility = "visible";
    return false;
  } else document.getElementById("fn_err").style.visibility = "hidden";
  return true;
}

function validateLastName() {
  console.log("entered validateLastName()");
  let userInput = document.getElementById("last_name").value;

  if (!(nameRegEx.test(userInput))){
    document.getElementById("ln_err").style.visibility = "visible";
    return false;
  }else document.getElementById("ln_err").style.visibility = "hidden";
  return true;
}

function validatePhone() {
  console.log("entered validatePhone()");
  let userInput = document.getElementById("phone").value;

  if (!(phoneRegEx.test(userInput))){
    document.getElementById("phone_err").style.visibility = "visible";
    return false;
  }else document.getElementById("phone_err").style.visibility = "hidden";
  return true;
}

function validateCreditCard() {
  console.log("entered validateCreditCard()");
  let userInput = document.getElementById("credit_card").value;

  if (!(ccRegEx.test(userInput))){
    document.getElementById("cc_err").style.visibility = "visible";
    return false;
  }else document.getElementById("cc_err").style.visibility = "hidden";
  return true;
}

function validateExpDate() {
  console.log("entered validateExpDate()");
  let yearRegEx = /(?![ -\/])\d{4}/;
  let userInput = document.getElementById("exp_date").value;
  let year = userInput.match(yearRegEx);

  if (!(ccExpRegex.test(userInput))){
    document.getElementById("expDate_err").style.visibility = "visible";
    return false;
  }

  if (year[0] < 2019){
    document.getElementById("expDate_err").style.visibility = "visible";
    return false;
  }else document.getElementById("expDate_err").style.visibility = "hidden";

  return true;
}

function validation() {
  //e.preventDefault(); Add e back into the function
  console.log("entered validation()");
  let address = document.getElementById("address").value;

  if (!validateFirstName())
  {
    document.getElementById("f_name").focus();
    return false;
  }

  if (!validateLastName())
  {
    document.getElementById("last_name").focus();
    return false;
  }

  if (address.length === 0)
  {
    document.getElementById("address").focus();
    return false;
  }

  if (!validatePhone())
  {
    document.getElementById("phone").focus();
    return false;
  }

  if (!validateCreditCard())
  {
    document.getElementById("credit_card").focus();
    return false;
  }

  if (!validateExpDate())
  {
    document.getElementById("exp_date").focus();
    return false;
  }

  return true;
}

function reset(e) {
  e.preventDefault();
  let errors = document.getElementsByClassName("error_msg");

  for (let i = 0; i < errors.length; i++) {
    errors[i].style.visibility = "hidden";
  }
  document.getElementById("form1").reset();
  document.getElementById("f_name").focus();
}

function calculateTotal(){
  let prod_cnt = document.getElementsByClassName("item").length;
  let total = 0;

  for (let i = 0; i < prod_cnt; i++) {
    if (document.getElementById("item_"+i).checked)
    {
      let itemVal = document.getElementById("item_"+i).value;
      let price = parseInt(itemVal, 10);
      console.log(itemVal);
      total += price;
    }
  }

  document.getElementById("total").value = "$"+ total;
}