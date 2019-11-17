//CONSTANTS
const xhttpr = new XMLHttpRequest();
const baseURL = "assets/txt/";
const tableHeader = "<table><tr><th colspan=\"7\">Students</th></tr><tr><th" +
  " rowspan=\"2\">First</th><th rowspan=\"2\">Last</th><th" +
  " colspan=\"3\">Address</th><th rowspan=\"2\">Major</th><th" +
  " rowspan=\"2\">GPA</th></tr><tr><th>City</th><th>State</th><th>Zip</th></tr>";

//Event Listeners
window.onload = function () {
  document.getElementById("canada").addEventListener("click", loadDocCanada);
  document.getElementById("mexico").addEventListener("click", loadDocMexico);
  document.getElementById("russia").addEventListener("click", loadDocRussia);
  document.getElementById("usa").addEventListener("click", loadDocUsa);
  document.getElementById("dataFetch").addEventListener("click", loadJSON);
};

//PART 1 Functions
function loadDocCanada() {
  let responseFile = baseURL + "canada.txt";
  xhttpr.onreadystatechange = function () {updateS1Results.call(this);};
  xhttpr.open("GET", responseFile, true);
  xhttpr.send();
}

function loadDocMexico() {
  let responseFile = baseURL + "mexico.txt";
  xhttpr.onreadystatechange = function () {updateS1Results.call(this);};
  xhttpr.open("GET", responseFile, true);
  xhttpr.send();
}

function loadDocRussia() {
  let responseFile = baseURL + "russia.txt";
  xhttpr.onreadystatechange = function () {updateS1Results.call(this);};
  xhttpr.open("GET", responseFile, true);
  xhttpr.send();
}

function loadDocUsa() {
  let responseFile = baseURL + "usa.txt";
  xhttpr.onreadystatechange = function () {updateS1Results.call(this);};
  xhttpr.open("GET", responseFile, true);
  xhttpr.send();
}

function updateS1Results() {
  if (this.readyState === 4 && this.status === 200) {
    document.getElementById("s1_results").innerHTML = this.responseText;
  }
}

//PART 2 Functions
function loadJSON() {
  console.log("entered loadJSON()");
  let responseFile = baseURL + document.getElementById("dataUrl").value;
  let txt = tableHeader;
  xhttpr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let myObj = JSON.parse(this.responseText);

      for (let i = 0; i < myObj.students.length; i++) {
        txt += "<tr>";
        txt += "<td>" + myObj.students[i].first + "</td>";
        txt += "<td>" + myObj.students[i].last + "</td>";
        txt += "<td>" + myObj.students[i].address.city + "</td>";
        txt += "<td>" + myObj.students[i].address.state + "</td>";
        txt += "<td>" + myObj.students[i].address.zip + "</td>";
        txt += "<td>" + myObj.students[i].major + "</td>";
        txt += "<td>" + myObj.students[i].gpa + "</td>";
        txt += "</tr>";
      }
      document.getElementById("s2_results").innerHTML = txt;
    }
  };
  xhttpr.open("GET", responseFile, true);
  xhttpr.send();
}
