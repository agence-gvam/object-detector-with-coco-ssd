import { loadExternalImage } from "./load_external_image.js";
import { loadInternalImage } from "./load_internal_image.js";
import { detectObjects } from "./detect_objects.js";
import { deleteDetector } from "./delete_detector.js";
import { activeReloadBtn } from "./active_reload_btn.js";

const urlForm = document.getElementById("url-form");
const body = document.querySelector("body");
const img = document.getElementById("image");
const dropElement = document.getElementById("drop-info");
const reloadBtn = document.getElementById("reload-btn");
let imgType;
let file;
let imageUrl;

body.addEventListener("dragover", (e) => {
  e.preventDefault();
  const detectors = document.querySelectorAll(".detected-object");
  if (detectors.length > 0) {
    deleteDetector();
  }
});

body.addEventListener("drop", async (e) => {
  e.preventDefault();
});

img.addEventListener("dragover", async (e) => {
  e.preventDefault();
  dropElement.classList.remove("hide-element");
});

dropElement.addEventListener("drop", async (e) => {
  e.preventDefault();
  dropElement.classList.add("hide-element");
  if (e.dataTransfer.files.length > 0) {
    file = e.dataTransfer.files[0];
    imageUrl = URL.createObjectURL(file);
    imgType = "file";
    await loadInternalImage(imageUrl);
    await detectObjects(imageUrl, file);
  } else {
    imageUrl = e.dataTransfer.getData("text/uri-list");
    if (imageUrl) {
      imgType = "url";
      imageUrl = imageUrl.split("?")[0];
      await loadExternalImage(imageUrl);
      await detectObjects(imageUrl);
    }
  }
  activeReloadBtn(imageUrl);
});

dropElement.addEventListener("dragleave", (e) => {
  e.preventDefault();
  dropElement.classList.add("hide-element");
});

urlForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let urlInput = document.getElementById("url-input");
  imageUrl = urlInput.value.split("?")[0];
  urlInput.value = "";
  await loadExternalImage(imageUrl);
  await detectObjects(imageUrl);
  activeReloadBtn(imageUrl);
});

reloadBtn.addEventListener("click", async () => {
  deleteDetector();

  if (imgType === "file") {
    await detectObjects(null, file);
  } else if (imgType === "url") {
    await detectObjects(imageUrl);
  }
  activeReloadBtn(imageUrl);
});
