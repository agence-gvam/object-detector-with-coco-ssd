import { showObjects } from "./show_objects.js";

export async function detectObjects(imageUrl) {
  await fetch("http://127.0.0.1:5000/detect-objects?image_url=" + imageUrl, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) throw res;
      return res.json();
    })
    .then((list) => {
      showObjects(list);
    })
    .catch((error) => {
      console.log(error);
    });
}
