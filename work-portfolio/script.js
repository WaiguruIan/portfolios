lucide.createIcons();

ScrollReveal().reveal(".reveal", {
  distance: "60px",
  duration: 1000,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  interval: 150,
});

const cursor = document.getElementById("cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

function toggleTheme() {
  const html = document.documentElement;
  if (html.classList.contains("dark")) {
    html.classList.replace("dark", "light");
  } else {
    html.classList.replace("light", "dark");
  }
}