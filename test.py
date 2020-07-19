import pymongo
from pymongo import MongoClient

client = pymongo.MongoClient(
    'mongodb+srv://asiri_1:1234@cluster0.yove0.mongodb.net/cookbook?retryWrites=true&w=majority')

db = client["user"]
collection = db["dish"]

collection.insert_one({"_id": 0, "name": "asiri"})
