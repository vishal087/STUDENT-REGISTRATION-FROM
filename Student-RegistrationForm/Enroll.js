"use strict";
var first1 = document.getElementById("first1");
var last1 = document.getElementById("last1");
var email1 = document.getElementById("email1");
var ph_no = document.getElementById("no1");
var btn1 = document.querySelector(".enroll1");
var card1 = document.querySelector(".card1");
var opt1 = document.getElementById("inlineRadio1");
var opt2 = document.getElementById("inlineRadio2");
var chk1 = document.getElementById("inlineCheckbox1");
var chk2 = document.getElementById("inlineCheckbox2");
var form = document.querySelector("form");

var output;

function loadFile(event) {
  output = URL.createObjectURL(event.target.files[0]);
}

var el;
btn1.addEventListener("click", function () {
  let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  let value = [];
  checkboxes.forEach((checkbox) => {
    value.push(checkbox.value);
  });
  if (!first1.value || !last1.value || !email1.value || !ph_no.value) {
    alert("ERROR :Please enter the required fields");
  } else {
    card1.innerHTML += `
     <div class="card">
        <div class="row g-0">
          <div class="col-5" >
            <img src="${output}" id='display_img' class="img-fluid rounded-start">
          </div>
          <div class="col-7">
            <div class="card-body">
              <h5 class="card-title">${first1.value} ${last1.value}</h5>
              <p class="card-text">${
                opt1.checked ? opt1.value : opt2.checked ? opt2.value : "others"
              }</p>
              <p class="card-text">${email1.value}</p>
              <p class="card-text">${ph_no.value}</p>
              <p class="card-text">${value}</p>
            </div>
          </div>
        </div>
      </div>`;
    alert("Student Enrolled Successfully!!!");
    form.reset();
  }
});
