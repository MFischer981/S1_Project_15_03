"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_reg2.js

   Author: Micah Fischer
   Date: 4 - 23 - 19


   Function List
   =============
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form
*/
// Onload run the init function
window.onload = init;
// Retrieve data from sessionStorage.
function init() {
      document.getElementById("regName").innerHTML = sessionStorage.getItem("name");

      document.getElementById("regGroup").innerHTML = sessionStorage.getItem("group");

      document.getElementById("regEmail").innerHTML = sessionStorage.getItem("email");

      document.getElementById("regPhone").innerHTML = sessionStorage.getItem("phone");

      document.getElementById("regSession").innerHTML = sessionStorage.getItem("session");

      document.getElementById("regBanquet").innerHTML = sessionStorage.getItem("banquet");

      document.getElementById("regPack").innerHTML = sessionStorage.getItem("pack");

      document.getElementById("regTotal").innerHTML = sessionStorage.getItem("total");
}
