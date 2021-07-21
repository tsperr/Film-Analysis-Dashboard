from flask import Flask, render_template, redirect, jsonify
import numpy as np
import os
from flask_pymongo import PyMongo
from flask.json import JSONEncoder
from bson.json_util import loads, dumps
from bson import ObjectId 
import json
from flask_cors import CORS
import top_tens

class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)
app = Flask(__name__, template_folder='templates')
CORS(app,support_credentials=True)
app.config["MONGO_URI"] = "mongodb://localhost:27017/project_2"
app.json_encoder=JSONEncoder
mongo = PyMongo(app)

@app.route("/")
def index():
    top_tens.scrape()
    top_ten = mongo.db.top_ten.find()
    return render_template("index.html", top_ten=top_ten)

@app.route("/top")
def data():
    top_tens.scrape()
    top_ten_data = mongo.db.top_ten.find()
    json_str = dumps(top_ten_data)
    record2 = loads(json_str)
    print(record2)
    return jsonify(record2)
     

if __name__ == "__main__":
    app.run(debug=True)