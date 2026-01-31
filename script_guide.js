function hideHint() {
  const hint = document.getElementById("hintWrapper");
  if (hint) {
    hint.style.display = "none";
  }
}

function showFemale() {
  document.getElementById("femaleCards").style.display = "grid";
  document.getElementById("maleCards").style.display = "none";
  hideHint();
}

function showMale() {
  document.getElementById("maleCards").style.display = "grid";
  document.getElementById("femaleCards").style.display = "none";
  hideHint();
}

let activeGender = "";

function hideHint() {
  document.getElementById("hintWrapper").style.display = "none";
}

function showFemale() {
  activeGender = "female";
  femaleCards.style.display = "grid";
  maleCards.style.display = "none";
  filterPanel.style.display = "block";
  hideHint();
  applyFilters();
}

function showMale() {
  activeGender = "male";
  maleCards.style.display = "grid";
  femaleCards.style.display = "none";
  filterPanel.style.display = "block";
  hideHint();
  applyFilters();
}

function applyFilters() {
  const age = ageFilter.value;
  const lang = languageFilter.value;
  const rating = ratingFilter.value;

  document.querySelectorAll(".card").forEach(card => {
    if (card.dataset.gender !== activeGender) {
      card.style.display = "none";
      return;
    }

    let show = true;

    if (age) {
      const [min, max] = age.split("-").map(Number);
      const cardAge = parseInt(card.dataset.age);
      if (cardAge < min || cardAge > max) show = false;
    }

    if (lang && !card.dataset.language.includes(lang)) show = false;
    if (rating && parseInt(card.dataset.rating) < rating) show = false;

    card.style.display = show ? "block" : "none";
  });
}

function setActive(btn) {
  document.querySelectorAll(".button-group button")
    .forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

function toggleMenu() {
  const menu = document.getElementById("mobileMenu");

  if (menu.style.left === "0px") {
    menu.style.left = "-260px";
  } else {
    menu.style.left = "0px";
  }
}

