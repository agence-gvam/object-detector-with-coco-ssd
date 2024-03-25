import { deleteDetector } from "./delete_detector.js";
import { urlCheck } from "./url_check.js";
import { toast, deleteToast } from "./toast.js";
import { detectObjects } from "./detect_objects.js";

const img = document.getElementById("image");

export async function loadImage(imageUrl) {
  deleteDetector();

  if (urlCheck(imageUrl)) return;
  const loadToast = toast.loading("Loading image...");
  img.src = imageUrl;
  deleteToast(loadToast);
  const detectToast = toast.loading("Detecting objects...");
  await detectObjects(imageUrl);
  deleteToast(detectToast);
}
