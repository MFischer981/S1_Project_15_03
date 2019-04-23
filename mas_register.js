"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author:  Micah Fischer
   Date:    4-23-19
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form

*/

var sessionPack = 0;
var passCheck = 0;
var banquet = 0;
var total = 0;

document.getElementById("fnBox").addEventListener("keyup", function () {
      document.getElementById("regName").innerHTML = document.getElementById("fnBox").value + " " + document.getElementById("lnBox").value;
});

document.getElementById("lnBox").addEventListener("keyup", function () {
      document.getElementById("regName").innerHTML = document.getElementById("fnBox").value + " " + document.getElementById("lnBox").value;
});

document.getElementById("groupBox").addEventListener("keyup", function () {
      document.getElementById("regGroup").innerHTML = document.getElementById("groupBox").value;
});

document.getElementById("mailBox").addEventListener("keyup", function () {
      document.getElementById("regEmail").innerHTML = document.getElementById("mailBox").value;
});

document.getElementById("phoneBox").addEventListener("keyup", function () {
      document.getElementById("regPhone").innerHTML = document.getElementById("phoneBox").value;
});

document.getElementById("sessionBox").addEventListener("change", function () {
      document.getElementById("regSession").innerHTML = document.getElementById("sessionBox").options[document.getElementById("sessionBox").selectedIndex].text;
      sessionPack = document.getElementById("sessionBox").options[document.getElementById("sessionBox").selectedIndex].value;
      document.getElementById("regTotal").innerHTML = "$" + (parseInt(sessionPack) + parseInt(banquet) + parseInt(passCheck));
});

document.getElementById("banquetBox").addEventListener("change", function () {
      document.getElementById("regBanquet").innerHTML = "$55 x " + document.getElementById("banquetBox").value + " = " + ("($" + document.getElementById("banquetBox").value * 55 + ")");
      banquet = document.getElementById("banquetBox").value * 55;
      document.getElementById("regTotal").innerHTML = "$" + (parseInt(sessionPack) + parseInt(banquet) + parseInt(passCheck));
});

document.getElementById("mediaCB").addEventListener("change", function () {
      if (document.getElementById("mediaCB").checked == true) {
            document.getElementById("regPack").innerHTML = "yes";
            passCheck = 115;
      } else {
            document.getElementById("regPack").innerHTML = "no";
            passCheck = 0;
      }
      document.getElementById("regTotal").innerHTML = "$" + (parseInt(sessionPack) + parseInt(banquet) + parseInt(passCheck));
});

document.getElementById("regSubmit").addEventListener("click", function () {
      sessionStorage.setItem("name", document.getElementById("regName").innerHTML);
      sessionStorage.setItem("group", document.getElementById("regGroup").innerHTML);
      sessionStorage.setItem("email", document.getElementById("regEmail").innerHTML);
      sessionStorage.setItem("phone", document.getElementById("regPhone").innerHTML);
      sessionStorage.setItem("session", document.getElementById("regSession").innerHTML);
      sessionStorage.setItem("banquet", document.getElementById("regBanquet").innerHTML);
      sessionStorage.setItem("pack", document.getElementById("regPack").innerHTML);
      sessionStorage.setItem("total", document.getElementById("regTotal").innerHTML);
})