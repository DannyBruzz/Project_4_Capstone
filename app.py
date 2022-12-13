import os
import numpy as np
import pandas as pd
from flask import Flask, render_template, request



# Flask Setup
app = Flask(__name__)

imput_list = []
# Set route : Home
@app.route("/")
def index():
    return render_template('index.html')


@app.route("/results")
def dash_view():
    return render_template("results.html")

 
# @app.route("/prediction")
# def predict_view():
#     return render_template("good_predict.html")   


@app.route("/prediction", methods=["GET", "POST"])
def map_view():
    input_values = request.form
    imput_list.append(
        (input_values.get("Accomodation"),
        input_values.get("Insurance_Type"),
        input_values.get("spouse"),
        input_values.get("health"),
        input_values.get("policy_type"),
        input_values.get("up_age"),
        input_values.get("low_age"),
        input_values.get("recomended"),
        input_values.get("policy_duration"),
        input_values.get("premium")
        )
    )
    print(imput_list)
    return render_template("good_predict.html")
    

if __name__ == "__main__":
    app.run(debug=True)
    


