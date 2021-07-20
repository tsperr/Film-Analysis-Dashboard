from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import top_tens

app = Flask(__name__)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/project_2"
mongo = PyMongo(app)

# Or set inline
# mongo = PyMongo(app, uri="mongodb://localhost:27017/phone_app")


@app.route("/")
def index():
    top_tens.scrape()
    top_ten = mongo.db.top_ten.find()
    print(top_ten)
    return render_template("index.html", top_ten=top_ten)


#@app.route("/null")
def scraper():
    top_ten = mongo.db.top_ten
    top_data = top_tens.scrape()
    return redirect("/", code=302)


if __name__ == "__main__":
    app.run(debug=True)