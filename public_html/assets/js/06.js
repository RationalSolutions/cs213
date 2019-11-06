function fun()
{
  console.log("Hello World");
}

function loadIt()
{
  document.getElementById("clickMe").onclick = fun;
}