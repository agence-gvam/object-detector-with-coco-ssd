export const toast = {
  loading: (msg) => {
    return createToast("loading", msg);
  },
  error: (msg) => {
    return createToast("error", msg);
  },
};

function createToast(type, msg) {
  // PARENT ELEMNT
  const parent = document.getElementById("img-wrapper");

  // ELEMNT CREATION
  const toast = document.createElement("div");
  toast.classList.add("toast");
  const toastId = "toast-" + Date.now();
  toast.id = toastId;
  const par = document.createElement("p");
  const texte = document.createTextNode(msg);

  // APPENDING ELEMENTS
  par.appendChild(texte);
  toast.appendChild(par);
  parent.appendChild(toast);

  return toastId;
}

export function deleteToast(toastId) {
  const toast = document.getElementById(toastId);
  if (toast) {
    toast.remove();
  }
}
