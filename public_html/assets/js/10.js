window.onload = function () {
  const xhttpr = new XMLHttpRequest();
  xhttpr.open("GET", "assign10.php");
  xhttpr.send();

  xhttpr.onload = function(){
//  if (this.readyState === 4 && this.status === 200) {

    let myObj = JSON.parse(this.responseText);
    let txt = '<table><tbody><tr><th>File Name</th><th>File Type</th><th>Current Working Directory</th><th>View Contents</th></tr>';

    for (let i = 0; i < myObj.length; i++) {
      txt += "<tr>";
      txt += "<td>" + myObj[i].fileName + "</td>";
      txt += "<td>" + myObj[i].fileType + "</td>";
      txt += "<td>" + myObj[i].cwd + "</td>";

      if (myObj[i].fileType === "file") {
        let url = myObj[i].fileName;
        txt += `<td><button onclick="window.location='${url}'">click to display</button> </td>`
      } else {
        txt += '<td>&nbsp;</td>';
      }
      txt += '</tr>';
    }
    txt += '</tbody></table>';

    document.getElementById('response').innerHTML = txt;
  //}
  }

};