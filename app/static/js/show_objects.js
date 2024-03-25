export function showObjects(list) {
  const img = document.getElementById("image");
  list = list.slice(0, 2);

  for (let obj of list) {
    const { location, label } = obj;
    const { ymax, xmax, ymin, xmin } = location;
    const parent = document.getElementById("img-wrapper");

    const object = document.createElement("div");
    object.classList.add("detected-object");
    const top = img.height * ymin;
    const left = img.width * xmin;
    const bottom = img.height * (1 - ymax);
    const right = img.width * (1 - xmax);
    const height = img.height - bottom - top;
    const width = img.width - left - right;
    object.style.top = top + "px";
    object.style.left = left + "px";
    object.style.height = height + "px";
    object.style.width = width + "px";

    // CREATION 1 SETTING LABEL
    const labelElemnt = document.createElement("p");
    labelElemnt.classList.add("object-label");
    labelElemnt.innerText = label;
    // APPENDING
    object.appendChild(labelElemnt);
    parent.appendChild(object);
  }
}
