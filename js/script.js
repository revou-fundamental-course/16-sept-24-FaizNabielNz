replaceName();

function replaceName() {
  let name = prompt("Kenalan Dong..!!");
  console.log(name);
  document.getElementById("user-name").innerHTML = name;
}

let indexSlide = 1;
showSlide(1);

function nextSlide(n) {
  showSlide((indexSlide += n));
}

//get DOM all Image Banner
function showSlide(n) {
  let listImage = document.getElementsByClassName("photo-banner");

  //Reset indexSlide
  if (n > listImage.length) indexSlide = 1;

  //Hide all images
  let i = 0;
  while (i < listImage.length) {
    listImage[i].style.display = "none";
    i++;
  }

  //show selected image
  listImage[indexSlide - 1].style.display = "block";
  console.log(listImage);
}

//Auto run
setInterval(() => nextSlide(1), 2500);

function validateForm() {
  const name = document.forms["message-form"]["full-name"].value;
  const birthDate = document.forms["message-form"]["birth-date"].value;
  const gender = document.forms["message-form"]["gender"].value;
  const messages = document.forms["message-form"]["messages"].value;

  if (name == "" || birthDate == "" || gender == "" || messages == "") {
    alert("Jangan ada yang kosong!");
    return false;
  }

  setSenderUI(name, birthDate, gender, messages);

  return false;
}

function setSenderUI(name, birthDate, gender, messages) {
  document.getElementById("sender-full-name").innerHTML = name;
  document.getElementById("sender-birth-date").innerHTML = birthDate;
  document.getElementById("sender-gender").innerHTML = gender;
  document.getElementById("sender-messages").innerHTML = messages;
}
