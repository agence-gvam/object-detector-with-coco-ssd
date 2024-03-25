import { deleteDetector } from "./delete_detector.js";
import { toast, deleteToast } from "./toast.js";

const img = document.getElementById("image");

export async function loadInternalImage(imageUrl) {
  deleteDetector();
  const loadToast = toast.loading("Loading image...");
  img.src = imageUrl;
  deleteToast(loadToast);
}
