# Object Detector

This project is a object detector using Coco SSD through a Flask web server. It allows you to detect any object from any image file. Follow the step below to get started.


## Requirements
This project has been made using those tools :
* Python 3.12.2
* Pip 24.0
* Virtualenv 20.25.1
* Zoo Mdel : [SSD ResNet50 V1 FPN 1024x1024 (RetinaNet50)](https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/tf2_detection_zoo.md)



## Get started
### Install Python
Go in the [Python website](https://www.python.org/downloads/) and download the 3.12.2 Python's version. Open the package to install the software.

Open you terminal and run this command to check if Python has been successfully isntalled:
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

If a version is showed in the terminal, that means Pip is installed. You can updated it to the last version using this command:
```
python -m pip install --upgrade pip
```
or
```
python3 -m pip install --upgrade pip
```

If Pip is not isntalled, you can install it using htis command :
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
pip install virtualenv
```

### Clone and open the repo

Open your terminal, go to an appropriate folder & clone the repo using the command bellow:
```
git clone https://github.com/agence-gvam/object-detector-with-coco-ssd.git
```
Then, go into the project using this command:
```
cd object-detector-with-coco-ssd
```

### Create a virtual environment
Run this command in your treminal:
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
venv\Scripts\activate
```




### Pip version
Remind that this project has been created using Pip 24.0. I cannot guarantee it will work with another version. If you want to check you Pip version, run htis command:
```
pip --version
```
if the version is different from 24.0, you can install the 24.0 version using this command:
```
python get-pip.py pip==20.3.4
```



