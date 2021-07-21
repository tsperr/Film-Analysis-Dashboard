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

#res = json.dumps(mongo, cls=JSONEncoder)

   # Client sends their string, we interpret it as an ObjectId
@app.route('/data')
def data():
    
    movie_data=mongo.db.IMDBdata.find()
    json_str = dumps(movie_data)
    record2 = loads(json_str)
    ##print(record2)
    return jsonify(record2)

@app.route('/')
def home():
    return render_template('index.html')

    
#     movie_data=mongo.db.IMDBdata.find()
#     json_str = dumps(movie_data)
#     record2 = loads(json_str)
#     return render_template("html/RatingsRevenue.html")

# @app.route('/topten')
# def scraper():

#     movie = mongo.db.IMDBdata
#     topten_data = top_tens.scrape()
#     movie.update({}, toptens, upsert=True)
#     return render_template("html/top10.html")

@app.route("/topten")
def scrape1():
    top_tens.scrape()
    top_ten = mongo.db.top_ten.find()
    return render_template("html/topten.html", top_ten=top_ten)
    
@app.route("/top")
def scrape2():
    top_tens.scrape()
    top_ten_data = mongo.db.top_ten.find()
    json_str = dumps(top_ten_data)
    record2 = loads(json_str)
    print(record2)
    return jsonify(record2)
    

@app.route('/rate')
def rate():
    return render_template("html/RatingsRevenue.html")

@app.route('/map')
def map():
    return render_template("html/InternationalProduction.html")

@app.route('/about')
def about_page():
    return render_template("html/about.html")

if __name__ == '__main__':    
    app.run(debug=True)

