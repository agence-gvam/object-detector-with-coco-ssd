import { deleteDetector } from "./delete_detector.js";
import { urlCheck } from "./url_check.js";
import { toast, deleteToast } from "./toast.js";

const img = document.getElementById("image");

export async function loadExternalImage(imageUrl) {
  deleteDetector();

  if (urlCheck(imageUrl)) return;
  const loadToast = toast.loading("Loading image...");
  img.src = imageUrl;
  deleteToast(loadToast);
}
