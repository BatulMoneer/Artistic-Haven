// Batul's part

var form = document.getElementById('f');

function myFunction() {
  if (form.checkValidity()) {
    alert("Adding Succesful!");
  }
}


function imageChoice(x) {
   var largeImage = document.getElementById(x);
   largeImage.style.display = 'block';
   largeImage.style.width=310+"px";
   var url=largeImage.getAttribute('src');
   window.open(url,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');
}

// Mawada's part

function changeButtonText() {
 document.getElementById("select-button").innerHTML = "Book Appointment";
}

function functionAlert() {
    alert("Reservation successful!");
}

// Ghada's part

function change(){
  document.getElementById('button').innerHTML="Thanks for rating!!";
}

// Aseel's part

function submitSuccessful() {
  alert("Thank you for your Suggestion! we will get to you as soon as possible");
}