// Get the modals
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// Get the buttons that open the modals
var btn = document.getElementById("jairo");
var btn1 = document.getElementById("anette");
var btn2 = document.getElementById("awajo");
var btn3 = document.getElementById("odiwuor");


// Get the <span> elements that close the modals
var span = modal.querySelector(".close");
var span1 = modal1.querySelector(".close");
var span2 = modal2.querySelector(".close");
var span3 = modal3.querySelector(".close");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  } else if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  }else if (event.target == modal3) {
    modal3.style.display = "none";
  }
}

