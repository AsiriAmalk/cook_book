from flask import Flask, render_template, request

import pymongo
import os

app = Flask(__name__)
client = pymongo.MongoClient(os.environ.get('MONGO_URI'))

db = client["cookbook"]
collection = db["dish"]


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/save', methods=["GET", "POST"])
def save():
    if request.method == "POST":
        name = request.form['name']
        cuisine = request.form['cuisine']
        description = request.form['description']
        url = request.form['url']

        collection.insert_one({"name": name,
                               "url": url,
                               "description": description,
                               "cuisine": cuisine})

        return render_template('index.html')


@app.route('/find_recipe')
def find_recipe():
    return render_template('find_recipe.html')


if __name__ == '__main__':
    app.run(debug=True)
