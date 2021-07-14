import pandas as pd
import os
import pymongo
In [2]:
# Create connection variable
conn = 'mongodb://localhost:27017'

# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn)

# Connect to a database. Will create one if not already available.
db = client['project_2']

# Create collection
db_c = db['IMDBdata']

def csv_to_json(filename, header=None):
    data = pd.read_csv(filename, header=header)
    return data.to_dict('records')

db_c.insert_many(csv_to_json('movie_data.csv', header = 0))