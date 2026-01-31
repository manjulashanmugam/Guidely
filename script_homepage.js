// FORM
var form = document.getElementById("regForm");

// INPUTS
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var ageInput = document.getElementById("age");
var mobileInput = document.getElementById("mobile");
var languageInput = document.getElementById("language");
var airlinesInput = document.getElementById("airlines");
var countryInput = document.getElementById("country");
var educationInput = document.getElementById("education");
var dateInput = document.getElementById("journeyDate");
var submitBtn = document.getElementById("submitBtn");

// ERRORS
var errors = {
  name: document.getElementById("nameError"),
  email: document.getElementById("emailError"),
  age: document.getElementById("ageError"),
  mobile: document.getElementById("mobileError"),
  language: document.getElementById("languageError"),
  airlines: document.getElementById("airlinesError"),
  country: document.getElementById("countryError"),
  education: document.getElementById("educationError"),
  date: document.getElementById("dateError")
};

// NAME PART
function validateName() {
  if (nameInput.value.trim() === "") {
    errors.name.textContent = "Name is required";
    return false;
  }
  errors.name.textContent = "";
  return true;
}

// EMAIL PART
function validateEmail() {
  var email = emailInput.value.trim();

  if (email === "") {
    errors.email.textContent = "Please enter email";
    return false;
  }

  if (email !== email.toLowerCase()) {
    errors.email.textContent = "Lowercase only";
    return false;
  }

  var regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  if (!regex.test(email)) {
    errors.email.textContent = "Enter valid email";
    return false;
  }

  if (!email.endsWith("@gmail.com")) {
    errors.email.textContent = "Only @gmail.com allowed";
    return false;
  }

  errors.email.textContent = "";
  return true;
}

// AGE PART
function validateAge() {
  var age = Number(ageInput.value);

  if (age < 18 || age > 76) {
    errors.age.textContent = "Age must be between 18 and 76";
    return false;
  }

  errors.age.textContent = "";
  return true;
}

// MOBILE PART
function validateMobile() {
  mobileInput.value = mobileInput.value.replace(/[^0-9]/g, "");

  if (mobileInput.value.length !== 10) {
    errors.mobile.textContent = "Enter valid 10 digit number";
    return false;
  }

  errors.mobile.textContent = "";
  return true;
}

// SELECT COMMON PART
function validateSelect(input, error, msg) {
  if (input.value === "") {
    error.textContent = msg;
    return false;
  }
  error.textContent = "";
  return true;
}

// DATE PART
function validateJourneyDate() {
  if (dateInput.value === "") {
    errors.date.textContent = "Please select journey date";
    return false;
  }

  let selectedDate = new Date(dateInput.value);
  let today = new Date();
  today.setHours(0, 0, 0, 0);

  if (selectedDate < today) {
    errors.date.textContent = "Past date booking not allowed";
    return false;
  }

  errors.date.textContent = "";
  return true;
}

//  FORM LIVE VALIDATION 
function validateForm() {
  var valid =
    validateName() &&
    validateEmail() &&
    validateAge() &&
    validateMobile() &&
    validateSelect(languageInput, errors.language, "Select language") &&
    validateSelect(airlinesInput, errors.airlines, "Select airlines") &&
    validateSelect(countryInput, errors.country, "Select country") &&
    validateSelect(educationInput, errors.education, "Select education") &&
    validateJourneyDate();

  submitBtn.disabled = !valid;
}

[
  nameInput,
  emailInput,
  ageInput,
  mobileInput,
  languageInput,
  airlinesInput,
  countryInput,
  educationInput,
  dateInput
].forEach(el => {
  el.addEventListener("input", validateForm);
  el.addEventListener("change", validateForm);
});

//  SWAP CITIES PART
function swapCities() {
  let from = document.getElementById("fromCity").value;
  let to = document.getElementById("toCity").value;

  document.getElementById("fromCity").value = to;
  document.getElementById("toCity").value = from;
}

//  MAIN BOOKING LOGIC 
function bookJourney() {

  let from = document.getElementById("fromCity").value.trim().toLowerCase();
  let to = document.getElementById("toCity").value.trim().toLowerCase();

  //  EMPTY CHECK (MAIN)
  if (
    nameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    ageInput.value.trim() === "" ||
    mobileInput.value.trim() === "" ||
    languageInput.value === "" ||
    airlinesInput.value === "" ||
    countryInput.value === "" ||
    educationInput.value === "" ||
    dateInput.value === "" ||
    from === "" ||
    to === ""
  ) {
    alert("❌ Please enter full details");
    return;
  }

  //  SAME CITY CHECK
  if (from === to) {
    alert("❌ From and To place cannot be same");
    return;
  }

  //  DATE CHECK
  if (!validateJourneyDate()) {
    return;
  }

  //  SUCCESS
  alert("✈️ Your Journey booked successfully!");
}

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");

  if (menu.style.left === "0px") {
    menu.style.left = "-260px";
  } else {
    menu.style.left = "0px";
  }
}

