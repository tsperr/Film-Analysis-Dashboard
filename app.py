from flask import Flask, render_template, redirect, jsonify
import numpy as np
import os
from flask_pymongo import PyMongo
from flask.json import JSONEncoder
from bson.json_util import loads, dumps
from bson import ObjectId 
import json
from flask_cors import CORS

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


# @app.route('/ratings')
# def ratings_graphs():
    
#     movie_data=mongo.db.IMDBdata.find()
#     json_str = dumps(movie_data)
#     record2 = loads(json_str)
#     return render_template("html/RatingsRevenue.html")

@app.route('/topten')
def scraper():

    movie = mongo.db.IMDBdata
    topten_data = top_tens.scrape()
    movie.update({}, toptens, upsert=True)
    return render_template("html/top10.html")


# @app.route('/budget')
# def budget():
    
#     movie_data=mongo.db.IMDBdata.find()
#     json_str = dumps(movie_data)
#     record2 = loads(json_str)
#     ##print(record2)
#     budget = []
#     for x in range(len(record2)):


#         item = record2[x]["budget"]
#         budget.append(item)
#         ##print(budget)
    
    

#     return jsonify(budget)

@app.route('/rate')
def rate():
    return render_template("html/RatingsRevenue.html")

@app.route('/map')
def map():
    return render_template("html/InternationalProduction.html")


if __name__ == '__main__':    
    app.run(debug=True)

