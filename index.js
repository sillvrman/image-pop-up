const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallary img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");

console.log(previews);
previews.forEach((preview) => {
  preview.addEventListener("click", () => {
    modal.classList.add("open");
    // original.classList.add("open");
    const originalCurrent = preview.getAttribute("data-original-title");
    const alt = preview.getAttribute("alt");
    original.src = `./img/${originalCurrent}`;
    caption.textContent = alt;
  });
});
modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    // original.classList.remove("open");
  }
});
