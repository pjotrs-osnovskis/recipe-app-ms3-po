import os
from flask import (
    Flask, flash, render_template, 
    redirect, request, session, url_for)
if os.path.exists("env.py"):
    import env

app = Flask(__name__)

@app.route("/")
def hello():
    return render_template("base.html")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
            port=int(os.environ.get("PORT")),
            # DO NOT DEPLOY FINAL VERSION WITH debug=True
            debug=True)
