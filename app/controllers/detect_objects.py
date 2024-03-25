import tensorflow as tf
import tensorflow_hub as hub
import os
import json

model = None


def load_model():
    global model
    print("Loading model...")
    model = hub.load(os.path.join("model", "saved_model"))
    print("Model successfully loaded!")


load_model()


def detect_objects(image_path):

    ## PREPARE THE IMAGE
    print("Starting image preparation...")
    image = tf.keras.utils.load_img(image_path)
    image_array = tf.keras.utils.img_to_array(image)
    image_array = tf.expand_dims(image_array, 0)
    image_array = tf.cast(image_array, tf.uint8)

    ## LOAD THE MODEL AND START THE DETECTION
    print("Detecting object...")
    detection = model(image_array)

    ## FORMAT THE LABELS FILE
    label_file = os.path.join("labels", "coco_labels.json")
    with open(label_file, "r") as f:
        labels = json.load(f)

    ## PREPARE THE DETECTION'S DATA FOR
    print("Preparing the detection's data...")
    boxes_array = detection["detection_boxes"].numpy()[0]
    detection_classes = detection["detection_classes"].numpy()[0]
    num_detections = detection["num_detections"].numpy()[0]
    detection_scores = detection["detection_scores"].numpy()[0]

    ## FORMAT THE DETECTION'S DATA
    print("Formating the detection's data...")
    bounding_boxes = []

    for i in range(int(num_detections)):
        boxes = boxes_array[i]
        ymin, xmin, ymax, xmax = boxes[0], boxes[1], boxes[2], boxes[3]
        location = {
            "ymin": float(ymin),
            "xmin": float(xmin),
            "ymax": float(ymax),
            "xmax": float(xmax),
        }
        class_id = int(detection_classes[i])
        score = float(detection_scores[i])

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
    print("Detecting job done!")
    return bounding_boxes[:5]
