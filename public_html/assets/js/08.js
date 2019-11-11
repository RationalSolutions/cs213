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
  document.getElementById("validate").addEventListener("click", validation);
  document.getElementById("reset").addEventListener("click", reset);
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
  console.log("entered validation()");
  let address = document.getElementById("address").value;

  if (!validateFirstName())
  {
    document.getElementById("f_name").focus();
    return false;
  } else if (!validateLastName())
  {
    document.getElementById("last_name").focus();
    return false;
  } else if (address.length === 0)
  {
    document.getElementById("address").focus();
    return false;
  } else if (!validatePhone())
  {
    document.getElementById("phone").focus();
    return false;
  }else if (!validateCreditCard())
  {
    document.getElementById("credit_card").focus();
    return false;
  } else if (!validateExpDate())
  {
    document.getElementById("exp_date").focus();
    return false;
  } else return true;
}

function reset() {
  let errors = document.getElementsByClassName("error_msg");

  for (let i = 0; i < errors.length; i++) {
    errors[i].style.visibility = "hidden";
  }
  document.getElementById("form1").reset();
  document.getElementById("f_name").focus();
}

function calculateTotal(){
  let prod_ct = document.getElementsByClassName("item").length;

  for (let i = 0; i < prod_ct; i++) {
    console.log(document.getElementById("item_"+i).checked);
  }
}