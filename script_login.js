function loginSuccess() {
    const name = document.querySelector('input[name="name"]').value;
    alert(`Welcome ${name}! 🎉 Login successful to Guidly 🌍`);
    document.querySelector("form").reset();
    return false;
}

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");

    if (menu.style.left === "0px") {
        menu.style.left = "-260px";
    } else {
        menu.style.left = "0px";
    }
}