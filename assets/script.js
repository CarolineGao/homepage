// Show "Last modified" based on the HTML file timestamp
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("lastModified");
  if (el) el.textContent = document.lastModified;
});
