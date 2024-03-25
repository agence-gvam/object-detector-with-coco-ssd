export function activeReloadBtn(imageUrl) {
  const btn = document.getElementById("reload-btn");
  if (imageUrl) {
    btn.classList.remove("hide-element");
  } else {
    btn.classList.add("hide-element");
  }
}
