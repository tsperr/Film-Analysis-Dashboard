from flask import Flask, render_template, redirect, jsonify
import numpy as np
import os
from flask_pymongo import PyMongo
from flask.json import JSONEncoder
from bson.json_util import loads, dumps
from bson import ObjectId 
import json

class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)
app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/project_2"
app.json_encoder=JSONEncoder

mongo = PyMongo(app)

#res = json.dumps(mongo, cls=JSONEncoder)

   # Client sends their string, we interpret it as an ObjectId
@app.route('/data')
def home():
    
    movie_data=mongo.db.IMDBdata.find()
    json_str = dumps(movie_data)
    record2 = loads(json_str)
    
    #return render_template("index.html", listings=record2)
    return jsonify(record2)

@app.route('/ratings')
def ratings_graphs():
    
    
    return render_template("index.html")


if __name__ == '__main__':    
    app.run(debug=True)

