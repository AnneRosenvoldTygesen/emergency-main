const html = document.querySelector("html");
const btn = document.querySelector("#darkmode-btn");

function toggleTheme() {
  html.classList.toggle("dark");

  if (btn.textContent === "Dark mode") {
    btn.textContent = "Light mode";
  } else {
    btn.textContent = "Dark mode";
  }
}
btn.addEventListener("click", toggleTheme);
