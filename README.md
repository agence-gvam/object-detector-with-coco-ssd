# Object Detector

This project is an object detector using COCO-SSD through a Flask web server. It allows you to detect any object from any image file. Follow the steps below to get started.


## Requirements
This project has been made using these tools :
* Python 3.12.2
* Pip 24.0
* Virtualenv 20.25.1
* Detection Model Zoo : [SSD ResNet50 V1 FPN 1024x1024 (RetinaNet50)](https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/tf2_detection_zoo.md)



## Get started
### Install Python
Go to the [Python website](https://www.python.org/downloads/) and download the 3.12.2 Python version. Open the package to install the software.

Open your terminal and run this command to check if Python has been successfully installed:
```
python3 --version
```

If so, the terminal will show you the Python version that you have installed

### Install 

### Install Pip
Since Python 3.4 version, Pip is automatically installed with Python. You can check it by running this command in the terminal:
```
pip --version
```
or
```
pip3 --version
```

If a version is shown in the terminal, that means Pip is installed. You can upgrade it to the last version using this command:
```
python -m pip install --upgrade pip
```
or
```
python3 -m pip install --upgrade pip
```

If Pip is not installed, you can install it using this command :
```
python get-pip.py
```

### Install Virtualenv
Open your terminal and run this command:
```
pip install virtualenv
```
or
```
pip3 install virtualenv
```

### Clone and open the repo

Open your terminal, go to an appropriate folder & clone the repo using the command below:
```
git clone https://github.com/agence-gvam/object-detector-with-coco-ssd.git
```
Then, go into the project using this command:
```
cd object-detector-with-coco-ssd
```

### Create a virtual environment
Run this command in your terminal:
```
python -m venv <folder_name>
```
or
```
python3 -m venv <folder_name>
```
<folder_name> is the name of the folder that will contains the virtual environment in your project. Replace it by the name you want (I used to use venv as <folder_name>).

### Activate the virtual environment
If you are on a Mac/Linux computer, run this command in the terminal to activate the virtual environment:
```
source <venv_folder_name>/bin/activate
```

If you are on a Windows computer, run this command:
```
<venv_folder_name>\Scripts\activate
```




### Pip version
Remember that this project has been created using Pip 24.0. I cannot guarantee it will work with another version. If you want to check you Pip version, run this command:
```
pip --version
```
if the version is different from 24.0, you can install the 24.0 version using this command:
```
python get-pip.py pip==20.3.4
```

### Install the modules
This project comes with a few modules. Run this command to install all of them:
```
pip install -r requirements.txt
```

### ML Model
Download the Detection Model Zoo "[SSD ResNet50 V1 FPN 1024x1024 (RetinaNet50)]([https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/tf2_detection_zoo.md](http://download.tensorflow.org/models/object_detection/tf2/20200711/ssd_resnet50_v1_fpn_1024x1024_coco17_tpu-8.tar.gz))"
If the link does not work, go to the [TensorFlow 2 Detection Model Zoo](https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/tf2_detection_zoo.md) page and download the "SSD ResNet50 V1 FPN 1024x1024 (RetinaNet50)".

Once the download is complete:
1. Unzip the folder
2. Copy all the files
3. Create a new folder in the project root directory named "model". You can do this by running this command:
   ```
   mkdir model
   ```
4. Paste all the files in this new folder

## Run the server
Make sure that you are in the project root directory and the virtual environment is activated. Then, run this command to start the server:
```
python run.py
```
The server will start running. It can take a few time cause of the model's loading. It will be completely running when it will display these informations:

- Loading model...
- Model successfully loaded!
- WARNING:werkzeug: * Debugger is active!
- INFO:werkzeug: * Debugger PIN: XXX-XXX-XXX

Go to [http://127.0.0.1:5000](http://127.0.0.1:5000) and start using the model.

## How to use the model
On the webpage, there is an image, an URL input and a button. The URL input accept only image files in .jpeg, .jpg, .png or .webp format from the web (picked from an external website). But you can also use your own images stored on your computer. To do this, just drag and drop any image file onto the image displayed on the webpage. This feature also works with images from the internet.


