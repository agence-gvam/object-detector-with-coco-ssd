import { showObjects } from "./show_objects.js";
import { toast, deleteToast } from "./toast.js";

export async function detectObjects(imageUrl, file) {
  const detectToast = toast.loading("Detecting objects...");

  let request;
  let options = { mode: "cors" };

  if (file) {
    const formData = new FormData();
    formData.append("file", file);
    request = "http://127.0.0.1:5000/detect-objects-from-file";
    options.method = "POST";
    options.body = formData;
  } else {
    request =
      "http://127.0.0.1:5000/detect-objects-from-url?image_url=" + imageUrl;
    options.method = "GET";
  }

  try {
    const res = await fetch(request, options);

    if (!res.ok) throw res;

    const list = await res.json();

    showObjects(list);
    console.log("test");
    deleteToast(detectToast);
  } catch (error) {
    console.log(error);
  }
}
