import os
from flask import (
    Flask, render_template, 
    redirect, request, session, url_for)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
if os.path.exists("env.py"):
    import env

app = Flask(__name__)

app.config["MONGO_DBNAME"] = os.environ.get("MONGO_DBNAME")
app.config["MONGO_URI"] = os.environ.get("MONGO_URI")
app.secret_key = os.environ.get("SECRET_KEY")

mongo = PyMongo(app)


# Home Page Route
@app.route("/")
def home_page():
    categories = mongo.db.categories.find()
    return render_template("home.html", categories=categories)


# Admin - Show list of ingredients and add ingredient
@app.route("/add_ingredient", methods=("GET", "POST"))
def add_ingredient():
    ingredients_list = list(mongo.db.ingredients.find().sort("ingredient_name", 1))

    if request.method == "POST":
        ingredient = {
            "ingredient_name": request.form.get("ingredient_name")
            }
        mongo.db.ingredients.insert_one(ingredient)
        return redirect(url_for("add_ingredient"))

    return render_template("admin.html", ingredients=ingredients_list)


# Admin - Edit Ingredient
@app.route("/edit_ingredient/<ingredient_id>", methods=["GET", "POST"])
def edit_ingredient(ingredient_id):
    if request.method == "POST":
        submit = {
            "ingredient_name": request.form.get("ingredient_name")
        }
        mongo.db.ingredients.update({"_id":ObjectId(ingredient_id)}, submit)
        return redirect(url_for("add_ingredient"))

    ingredient = mongo.db.ingredients.find_one({"_id": ObjectId(ingredient_id)})
    return render_template("edit_ingredient.html", ingredient=ingredient)


# Admin - Delete Ingredient
@app.route("/delete_ingredient/<ingredient_id>")
def delete_ingredient(ingredient_id):
    mongo.db.ingredients.remove({"_id": ObjectId(ingredient_id)})
    return redirect(url_for("add_ingredient"))


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            # DO NOT DEPLOY FINAL VERSION WITH debug=True
            debug=True)
