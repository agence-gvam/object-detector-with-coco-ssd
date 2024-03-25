import tensorflow_hub as hub
import tensorflow as tf

# import numpy as np
import os
import requests

## CREATE A FOLDER TO STORAGE THE MODEL
models_folder = os.path.join("models")

## DEFINE MODEL DATA
model_file_name = "ssd_mobilenet_v2_fpnlite_320x320_coco17_tpu-8"
model_path = os.path.join(models_folder, model_file_name)

## DOWNLOAD AND STORE IMAGE
image_url = "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800"
image_name = image_url.split("/").pop(-1).split("?")[0]
images_folder = os.path.join("images")
image_path = images_folder + image_name

response = requests.get(image_url)

if response.status_code == 200:
    with open(image_path, "wb") as f:
        f.write(response.content)

## PREPARE THE IMAGE
model_folder = "ssd_mobilenet_v2_fpnlite_320x320_coco17_tpu-8"
saved_model = os.path.join(models_folder, model_folder, "saved_model", "saved_model.pb")
image = tf.keras.utils.load_img(image_path)
image_array = tf.keras.utils.img_to_array(image)
image_array = tf.expand_dims(image_array, 0)
image_array = tf.cast(image_array, tf.uint8)

## LOAD THE MODEL AND START THE DETECTION
model = hub.load(os.path.join(models_folder, model_folder, "saved_model"))
detection = model(image_array)

## FORMAT THE LABELS FILE
label_file = os.path.join("labels", "coco_labels.txt")
with open(label_file, "r") as f:
    labels = f.readlines()

elements = []

for label in labels:
    label = label.split("\n")[0].split(" ")
    id, name = int(label[0]), label[1]
    element = {"id": id, "name": name}
    elements.append(element)

labels = elements

## PREPARE THE DETECTION'S DATA FOR
boxes_array = detection["detection_boxes"].numpy()[0]
detection_classes = detection["detection_classes"].numpy()[0]
num_detections = detection["num_detections"].numpy()[0]
detection_scores = detection["detection_scores"].numpy()[0]

## FORMAT THE DETECTION'S DATA
bounding_boxes = []

for i in range(int(num_detections)):
    boxes = boxes_array[i]
    ymin, xmin, ymax, xmax = boxes[0], boxes[1], boxes[2], boxes[3]
    location = {"ymin": ymin, "xmin": xmin, "ymax": ymax, "xmax": xmax}
    class_id = int(detection_classes[i])
    score = detection_scores[i]

    for lab in labels:
        if lab["id"] == class_id:
            label = lab["name"]

    object_data = {
        "location": location,
        "class_id": class_id,
        "score": score,
        "label": label,
    }
    bounding_boxes.append(object_data)


print(bounding_boxes[0])
