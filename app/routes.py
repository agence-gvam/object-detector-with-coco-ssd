from app import app
from flask import render_template, request, jsonify
import requests
import uuid
import os
from .controllers.detect_objects import detect_objects


@app.route("/", methods=["GET"])
def home():
    return render_template("index.html")


@app.route("/detect-objects", methods=["GET"])
def get_image():
    image_url = request.args.get("image_url")

    image_id = str(uuid.uuid4())
    # image_name = image_url.split("/").pop(-1)
    # image_name = image_name + "-" + id

    response = requests.get(image_url)

    if response.status_code == 200:
        with open(os.path.join("tmp", image_id), "wb") as f:
            f.write(response.content)

        image_path = os.path.join("tmp", image_id)
        all_objects = detect_objects(image_path)

    else:
        print("Error when downloading the image.")

    # print(all_objects)
    return jsonify(all_objects)
