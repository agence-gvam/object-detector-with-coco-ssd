import { toast, deleteToast } from "./toast.js";

export function urlCheck(url) {
  const validFormat = ["jpeg", "jpg", "png", "webp"];

  const format = url.split(".").pop();
  if (!format || !validFormat.includes(format)) {
    const error = "This image is incorrect.";
    const toastId = toast.error(error);
    setTimeout(() => {
      deleteToast(toastId);
    }, 2000);
    return true;
  }
}
