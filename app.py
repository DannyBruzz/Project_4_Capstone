import os

import datetime as dt
import numpy as np
import pandas as pd
import psycopg2


from flask import Flask, render_template
import psycopg2
from psycopg2 import OperationalError



# Flask Setup
app = Flask(__name__)


# Set route : Home
@app.route("/")
def index():
    return render_template('index.html')

# Set route : Prediction
@app.route("/prediction")
def map_view():
    return render_template("prediction.html")

# Set route : Results
@app.route("/results")
def dash_view():
    return render_template("results.html")


if __name__ == "__main__":
    app.run(debug=True)