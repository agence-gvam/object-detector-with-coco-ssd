export function deleteDetector() {
  const detectors = document.querySelectorAll(".detected-object");

  for (let detector of detectors) {
    detector.remove();
  }
}
