import os
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import datetime as dt
import numpy as np
import pandas as pd
import psycopg2
import h5py
from flask import Flask, render_template, request, jsonify
import psycopg2
import requests
from psycopg2 import OperationalError
import json


# from keras.models import load_model 

# model = load_model('modelV1.h5')



# Flask Setup
app = Flask(__name__)


# Set route : Home
@app.route("/")
def index():
    return render_template('index.html')


# Set route : Prediction
# @app.route("/prediction")
# def map_view():
#     return render_template("prediction.html")


@app.route("/results")
def dash_view():
    return render_template("results.html")

def ValuePredictor():
    with h5py.File("static/modelV1.h5", 'r') as hf:
        coef = hf['coef'][:]
        intercept = hf['intercept'][:]
        classes = hf['classes'][:]
    print(coef)
#   LogisticRegression = classifier
    # classifier.coef_ = coef
    # classifier.intercept_ = intercept
    # classifier.classes_ = classes
    # result = classifier.predict(to_predict_list)
    # return result[0]

# @app.route("/receiver", methods=["POST"])
# def postME():
#  data = request.get_json()
#  jsonifydata = jsonify(data)
#  print(jsonifydata)
#  deJSON(jsonifydata)
#  return jsonifydata

# def deJSON(data):
#     jdata = pd.read_json(data)
#     print(jdata)
#     return jdata

    # scaler = StandardScaler()
    # X_scaler = scaler.fit(df_inputs)
    # to_predict_list = X_scaler.transform(df_inputs)
    # print(to_predict_list)

#     # result = ValuePredictor(to_predict_list)       
#     # if int(result)== 1:
#     #     prediction ='Yes'
#     # else:
#     #     prediction ='No'           
#     return render_template("ddd.html", prediction_text = to_predict_list)
    


@app.route("/prediction", methods=["GET", "POST"])
def map_view():
    input_values = request.form
    print(input_values)
    return render_template("good_predict.html")
    




if __name__ == "__main__":
    app.run(debug=True)
    




# Set route : Results

# @app.route("/receiver", methods=["POST"])
# def postME():
#  data = request.get_json()
#  data = jsonify(data)
#  return data

# prediction function