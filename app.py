import os
import re
from flask import (
    Flask, flash, render_template, 
    redirect, request, session, url_for, Markup)
from flask_pymongo import PyMongo
from bson.objectid import ObjectId
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime
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
    return render_template("add_recipe.html", ingredients=ingredients)


# Register user
@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        # Check if user already exists
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})
        if existing_user:
            # Found this Markup solution here:
            # https://stackoverflow.com/questions/58940246/flask-flashing-with-html-class
            message = Markup(
                            """
                            <div class='message-button alert alert-danger alert-dismissible fade show' role='alert'>
                                <p>Username already exists</p>
                                <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'><span aria-hidden='true'></span></button>
                            </div>
                            """)
            flash(message)
            return redirect( url_for("register") )

        # Variables to check both passwords
        password1 = request.form.get("reg_password")
        password2 = request.form.get("confirm_password")
        if password1 != password2:
            message = Markup(
                            """
                            <div class='message-button alert alert-danger alert-dismissible fade show' role='alert'>
                                <p>Passwords don't match</p>
                                <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'><span aria-hidden='true'></span></button>
                            </div>
                            """)
            flash(message)
            return redirect( url_for("register"))
        else:
            # Getting username and password to send over to Mongo DB
            register = {
                "username": request.form.get("username").lower(),
                "password": generate_password_hash(request.form.get("reg_password"))
            }
            # Insert new user creds into DB
            mongo.db.users.insert_one(register)
            session["user"] = request.form.get("username").lower()
            return redirect( url_for("profile", username=session["user"]) )

    return render_template("register.html")


# Login
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        # check if username exists in db
        existing_user = mongo.db.users.find_one(
            {"username": request.form.get("username").lower()})

        if existing_user:
            # ensure if hashed password matches user input
            if check_password_hash(
                existing_user["password"], request.form.get("password")):
                    session["user"] = request.form.get("username").lower()
                    return redirect(url_for(
                        "profile", username=session["user"]))

            else:
                # invalid password
                message = Markup(
                        """
                        <div class='message-button alert alert-success alert-dismissible fade show' role='alert'>
                            <p>Incorrect Username and/or Password</p>
                            <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'><span aria-hidden='true'></span></button>
                        </div>
                        """)
                flash(message)
                return redirect(url_for("login"))

        else:
            # If username does not exist show message
            message = Markup(
                    """
                    <div class='message-button alert alert-success alert-dismissible fade show' role='alert'>
                        <p>Incorrect Username and/or Password</p>
                        <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'><span aria-hidden='true'></span></button>
                    </div>
                    """)
            flash(message)
            return redirect(url_for("login"))

    return render_template("login.html")


# Profile
@app.route("/profile/<username>", methods=["GET", "POST"])
def profile(username):
    # grab the session user's username
    username = mongo.db.users.find_one(
        {"username": session["user"]})["username"]
    if session["user"]:
        return render_template("profile.html", username=username)
    else:
        print("Username: " + session["user"])


# Logout
@app.route("/logout")
def logout():
    # remove user from session cookies
    message = Markup(
            """
            <div class='message-button alert alert-success alert-dismissible fade show' role='alert'>
                <p>You have been logged out</p>
                <button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'>
                    <span aria-hidden='true'></span>
                </button>
            </div>
            """)
    flash(message)
    session.pop("user")
    
    return redirect(url_for("login"))


# Add recipe
@app.route("/add_recipe", methods=["GET", "POST"])
def add_recipe():
    if request.method == "POST":

        name = request.form.getlist("ingredient_name")
        qty = request.form.getlist("ingredient_qty")
        unit = request.form.getlist("ingredient_unit")
        item = list(zip(name, qty, unit))
        item_list = []

        for i in item:
            item_list.append({
                "ingredient_name": i[0],
                "ingredient_qty": i[1],
                "ingredient_unit": i[2]
            })

        recipe = {
            "category_name": request.form.get("category_name"),
            "recipe_name": request.form.get("recipe_name"),
            "recipe_description": request.form.get("recipe_description"),
            "ingredients": item_list,
            "creation_date": datetime.now(),
            "created_by": session["user"]
        }

        mongo.db.recipes.insert_one(recipe)
        return redirect( url_for("add_recipe") )
    

    ingredients = mongo.db.ingredients.find()
    categories = mongo.db.categories.find()
    creation_date = mongo.db.recipes.find().sort("creation_date", 1)
    return render_template("add_recipe.html", creation_date=creation_date, categories=categories, ingredients=ingredients)



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