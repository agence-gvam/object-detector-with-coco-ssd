from app import app
from flask import render_template, request, jsonify
import requests
import uuid
import os
from .controllers.detect_objects import detect_objects


@app.route("/", methods=["GET"])
def home():
    return render_template("index.html")


@app.route("/detect-objects-from-url", methods=["GET"])
def detect_objects_from_url():
    image_url = request.args.get("image_url")
    image_id = str(uuid.uuid4())
    response = requests.get(image_url)

    if response.status_code == 200:
        with open(os.path.join("tmp", image_id), "wb") as f:
            f.write(response.content)

        image_path = os.path.join("tmp", image_id)
        all_objects = detect_objects(image_path)
        os.remove(image_path)

    else:
        print("Error when downloading the image.")

    return jsonify(all_objects)


@app.route("/detect-objects-from-file", methods=["POST"])
def detect_objects_from_file():
    image_id = str(uuid.uuid4())
    image = request.files["file"]
    image_path = os.path.join("tmp", image_id)
    image.save(image_path)
    all_objects = detect_objects(image_path)
    os.remove(image_path)
    return jsonify(all_objects)
