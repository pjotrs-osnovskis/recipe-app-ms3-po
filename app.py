import os
import re
from flask import (
    Flask, flash, render_template, 
    redirect, request, session, url_for, Markup)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
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



# Search - NOT WORKING YET!
@app.route("/search", methods=("GET", "POST"))
def search():
    query = request.form.get("query")
    ingredients = list(mongo.db.ingredients.find({"$text": {"$search": query}}))
    return render_template("admin.html", ingredients=ingredients)


# Register user
@app.route("/register", methods=["GET", "POST"])
def register():

    if request.method == "POST":

        # Check if user already exists
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})
        if existing_user:
            message = Markup(
                            """
                            <div class='message-button alert alert-danger alert-dismissible fade show' role='alert'>
                                <p>Username already exists</p>
                                <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'><span aria-hidden='true'></span></button>
                            </div>
                            """)
            flash(message)
            return redirect( url_for("register") )

        # Get new user creds
        register = {
            "username": request.form.get("username").lower(),
            "password": generate_password_hash(request.form.get("password"))
        }
        # Insert new user creds into DB
        mongo.db.users.insert_one(register)

        session["user"] = request.form.get("username").lower()
        message = Markup(
                """
                <div class='message-button alert alert-success alert-dismissible fade show' role='alert'>
                    <p>Registration Successfull</p>
                    <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'><span aria-hidden='true'></span></button>
                </div>
                """)
        flash(message)
        return redirect( url_for("register", username=session["user"]))
    return render_template("register.html")



# Admin - List ingredients
@app.route("/get_ingredients")
def get_ingredients():
    ingredients = list(mongo.db.ingredients.find().sort("ingredient_name", 1))
    return render_template("admin.html", ingredients=ingredients)


# Admin -  add ingredient
@app.route("/add_ingredient", methods=("GET", "POST"))
def add_ingredient():
    if request.method == "POST":
        ingredient = {
            "ingredient_name": request.form.get("ingredient_name")
            }
        mongo.db.ingredients.insert_one(ingredient)
        return redirect(url_for("add_ingredient"))
    return render_template("admin.html")


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