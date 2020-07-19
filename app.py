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
        name = request.form['name'].lower()
        cuisine = request.form['cuisine']
        description = request.form['description']
        url = request.form['url']

        collection.insert_one({"name": name,
                               "url": url,
                               "description": description,
                               "cuisine": cuisine})

        return render_template('index.html')


@app.route('/find_recipe', methods=["POST", "GET"])
def find_recipe():
    if request.method == "POST":
        search = request.form["search_1"]
        # cuisine_search = request.form["cuisine"]
        # print(cuisine_search)
        query = {"name": {"$regex": "^{}".format(search)}}
        recipies = collection.find(query)
        recipies_list = []
        for x in recipies:
            recipies_list.append(x)

        # print(recipies_list)
        return render_template('find_recipe.html', content=recipies_list)

    recipies = collection.find()
    recipies_list = []
    for x in recipies:
        recipies_list.append(x)

    # print(recipies_list)
    return render_template('find_recipe.html', content=recipies_list)


if __name__ == '__main__':
    app.run()
