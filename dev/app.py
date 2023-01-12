from flask import Flask, Response, send_from_directory, request, redirect, jsonify, flash, url_for
from werkzeug.utils import secure_filename
from datetime import datetime
import os, sys
import json
import atexit
import math
import random
import logging
import image_process
now = datetime.now()

class bc:
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    END = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'
def exit_handler():
    print(bc.GREEN + "t'as been closed" + bc.END)

print(bc.HEADER + "to host on the local network, run 'flask run --host=0.0.0.0'" + bc.END)


UPLOAD_FOLDER = "./in"
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'JPG', "PNG"}

out_json = {}


atexit.register(exit_handler)
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def root_dir():  # pragma: no cover
    return os.path.abspath(os.path.dirname(__file__))

def get_file(filename):
    try:
        src = os.path.join(root_dir(), filename)
        return open(src).read()
    except IOError as exc:
        return str(exc)

@app.route('/<path:path>')
def send_report(path):
    return send_from_directory('.', path)

@app.route("/", methods=['GET', 'POST'])
def route_home():
    return Response(get_file('index.html'))



@app.route('/uploader', methods = ['GET', 'POST'])
def upload_file():
    global out_json
    if request.method == 'POST':
        uploaded_files = request.files.getlist("file")
        for f in uploaded_files:
            print(f)
            f.save(os.path.join(UPLOAD_FOLDER, secure_filename(f.filename)))
            out_json = {}
        #f = request.files['file']
        
        return Response(get_file('index.html'))
		
@app.route('/clear_photos')
def clear_photos():
    global out_json
    #GET request
    # clear photos
    out_json = {}
    for filename in os.listdir(UPLOAD_FOLDER):
        os.remove(os.path.join(UPLOAD_FOLDER, filename))
        #print(filename)
    return Response(get_file('index.html'))




@app.route('/status')
def get_status():
    #GET request
    if request.method == 'GET':
        json_list = []
        for filename in os.listdir(UPLOAD_FOLDER):
            json_list.append(str(filename))
        return jsonify({"images": json_list, "folder": UPLOAD_FOLDER})  # serialize and use JSON headers

@app.route('/remove_photo', methods=['POST'])
def remove_photo():
    #POST request
    if request.method == 'POST':
        jsom = request.get_json()
        os.remove(os.path.join(UPLOAD_FOLDER, jsom['photo'] + "." + jsom["extension"]))
    return Response(get_file('index.html'))

@app.route('/post_json', methods=['POST'])
def post_json():
    global out_json
    #POST request
    if request.method == 'POST':
        jsom = request.get_json()
        datajson = open("data.json", "w")
        datajson.write(str(jsom).replace("'", '"'))
        out_json = image_process.heehee(jsom)
    return Response(get_file('index.html'))

@app.route('/get_processed', methods=['GET'])
def get_json():
    global out_json
    #POST request
    if request.method == 'GET':
        if (len(out_json) > 0):
            haha = open("server_message.txt", "w")
            haha.write("")
            haha.close()
        return jsonify(out_json)

@app.route('/server_message', methods=['GET'])
def get_server_message():
    #POST request
    if request.method == 'GET':
        haha = open("server_message.txt", "r")
        server_message = str(haha.read())
        #print(server_message)
        haha.close()
        return jsonify({"message": server_message})


#@app.route('/status')
#def get_status():
    #GET request
#    if request.method == 'GET':
#        return jsonify(gamesaves)  # serialize and use JSON headers
