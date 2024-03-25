import { loadImage } from "./load_iamge.js";

const urlForm = document.getElementById("url-form");
const body = document.querySelector("body");

body.addEventListener("dragover", (e) => {
  e.preventDefault();
});

body.addEventListener("drop", async (e) => {
  e.preventDefault();
  let imageUrl = e.dataTransfer.getData("text/uri-list");
  imageUrl = imageUrl.split("?")[0];
  await loadImage(imageUrl);
});

urlForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let urlInput = document.getElementById("url-input");
  imageUrl = urlInput.value.split("?")[0];
  urlInput.value = "";
  await loadImage(imageUrl);
});
