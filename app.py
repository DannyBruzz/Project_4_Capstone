import os
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import datetime as dt
import numpy as np
import pandas as pd
import psycopg2


from flask import Flask, render_template
import psycopg2
from psycopg2 import OperationalError

# from keras.models import load_model 

# model = load_model('modelV1.h5')



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


@app.route("/results")
def dash_view():
    return render_template("results.html")


if __name__ == "__main__":
    app.run(debug=True)



# prediction function
# def ValuePredictor(to_predict_list):
#     with h5py.File("modelV1.h5", 'r') as hf:
#         coef = hf['coef'][:]
#         intercept = hf['intercept'][:]
#         classes = hf['classes'][:]
#     LogisticRegression = classifier
#     classifier.coef_ = coef
#     classifier.intercept_ = intercept
#     classifier.classes_ = classes
#     result = classifier.predict(to_predict_list)
#     return result[0]

# @app.route("/prediction",  methods = ['POST'])
# def predict():
#     scaler = StandardScaler()
#     X_scaler = scaler.fit(df_inputs)
#     to_predict_list = X_scaler.transform(df_inputs)
#     result = ValuePredictor(to_predict_list)       
#     if int(result)== 1:
#         prediction ='Yes'
#     else:
#         prediction ='No'           
#     return render_template("ddd.html", prediction = prediction)




# @app.route("/prediction",  methods = ['POST'])
# def result():
#     if request.method == 'POST':
#         to_predict_list = request.form.to_dict()
#         to_predict_list = list(to_predict_list.values())
#         to_predict_list = list(map(int, to_predict_list))
#         result = ValuePredictor(to_predict_list)       
#         if int(result)== 1:
#             prediction ='Yes'
#         else:
#             prediction ='INo'           
#         return render_template("prediction.html", prediction = prediction)

# Set route : Results
