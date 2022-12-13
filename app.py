import os
import numpy as np
import pandas as pd
from flask import Flask, render_template, request
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
import h5py



# Flask Setup
app = Flask(__name__)

imput_list = []
default_df = {
    'Upper_Age': 0, 
    'Lower_Age' : 0, 
    'Holding_Policy_Type': 0, 
    'Reco_Policy_Cat': 0,
    'Reco_Policy_Premium': 0, 
    'Accomodation_Type_Owned': 0,
    'Accomodation_Type_Rented': 0, 
    'Reco_Insurance_Type_Individual':0,
       'Reco_Insurance_Type_Joint':0, 
       'Is_Spouse_No':0, 
       'Is_Spouse_Yes':0,
       'Health_Indicator_0':0,
        'Health_Indicator_1':0, 
        'Health_Indicator_2':0,
       'Health_Indicator_3':0, 
       'Health_Indicator_4':0, 
       'Health_Indicator_5':0,
       'Health_Indicator_6':0, 
       'Health_Indicator_7':0, 
       'Health_Indicator_8':0,
       'Health_Indicator_9':0, 
       'Holding_Policy_Duration_0':0,
       'Holding_Policy_Duration_1':0, 
       'Holding_Policy_Duration_10':0,
       'Holding_Policy_Duration_11':0, 
       'Holding_Policy_Duration_12':0,
       'Holding_Policy_Duration_13':0, 
       'Holding_Policy_Duration_14plus' :0,
       'Holding_Policy_Duration_14':0, 
       'Holding_Policy_Duration_2':0,
       'Holding_Policy_Duration_3':0, 
       'Holding_Policy_Duration_4':0,
       'Holding_Policy_Duration_5':0, 
       'Holding_Policy_Duration_6':0,
       'Holding_Policy_Duration_7':0, 
       'Holding_Policy_Duration_8':0,
       'Holding_Policy_Duration_9':0
}
# Set route : Home
@app.route("/")
def index():
    return render_template('index.html')

@app.route("/modelresult")
def ValuePredictor(to_predict_list):
    with h5py.File("static/modelV1.h5", 'r') as hf:
        coef = hf['coef'][:]
        intercept = hf['intercept'][:]
        classes = hf['classes'][:]
        classifier = LogisticRegression()
        classifier.coef_ = coef
        classifier.intercept_ = intercept
        classifier.classes_ = classes
        result = classifier.predict(to_predict_list)
        predicted_result = result[0]
        print(predicted_result)
    return render_template("modelresult.html", predicted_result= predicted_result)

def scaledf(dict):
    data_inputs = pd.DataFrame(dict, index=[0])
    scaler = StandardScaler()
    X_scaler = scaler.fit(data_inputs)
    to_predict_list = X_scaler.transform(data_inputs)
    ValuePredictor(to_predict_list)
    # print(to_predict_list)


def df_create(list):
    if list[0] == "Owned":
        default_df["Accomodation_Type_Owned"] = 1
    else:
        default_df["Accomodation_Type_Rented"] = 1
    if list[1] == "Individual":
        default_df["Reco_Insurance_Type_Individual"] = 1
    else:
        default_df["Reco_Insurance_Type_Joint"] = 1
    if list[2] == "Yes":
        default_df["Is_Spouse_Yes"] = 1
    else:
        default_df["Is_Spouse_No"] = 1
    if list[3] == "0":
        default_df["Health_Indicator_0"] = 1
    elif list[3] == "1":
        default_df["Health_Indicator_1"] = 1
    elif list[3] == "2":
        default_df["Health_Indicator_2"] = 1
    elif list[3] == "3":
        default_df["Health_Indicator_3"] = 1
    elif list[3] == "4":
        default_df["Health_Indicator_4"] = 1
    elif list[3] == "5":
        default_df["Health_Indicator_5"] = 1
    elif list[3] == "6":
        default_df["Health_Indicator_6"] = 1
    elif list[3] == "7":
        default_df["Health_Indicator_7"] = 1
    elif list[3] == "8":
        default_df["Health_Indicator_8"] = 1
    else:
        default_df["Health_Indicator_9"] = 1
    if list[4] == "A":
        default_df["Holding_Policy_Type"] = 1
    elif list[4] == "B":
        default_df["Holding_Policy_Type"] = 2
    elif list[4] == "C":
        default_df["Holding_Policy_Type"] = 3
    else:
        default_df["Holding_Policy_Type"] = 4
    
    default_df["Upper_Age"] = int(list[5])
    default_df["Lower_Age"] = int(list[6])
    default_df["Reco_Policy_Cat"] = int(list[7])

    if list[8] == "0":
        default_df["Holding_Policy_Duration_0"] = 1
    elif list[8] == "1":
        default_df["Holding_Policy_Duration_1"] = 1
    elif list[8] == "2":
        default_df["Holding_Policy_Duration_2"] = 1
    elif list[8] == "3":
        default_df["Holding_Policy_Duration_3"] = 1
    elif list[8] == "4":
        default_df["Holding_Policy_Duration_4"] = 1
    elif list[8] == "5":
        default_df["Holding_Policy_Duration_5"] = 1
    elif list[8] == "6":
        default_df["Holding_Policy_Duration_6"] = 1
    elif list[8] == "7":
        default_df["Holding_Policy_Duration_7"] = 1
    elif list[8] == "8":
        default_df["Holding_Policy_Duration_8"] = 1
    elif list[8] == "9":
        default_df["Holding_Policy_Duration_9"] = 1
    elif list[8] == "10":
        default_df["Holding_Policy_Duration_10"] = 1
    elif list[8] == "11":
        default_df["Holding_Policy_Duration_11"] = 1
    elif list[8] == "12":
        default_df["Holding_Policy_Duration_12"] = 1
    elif list[8] == "13":
        default_df["Holding_Policy_Duration_13"] = 1
    elif list[8] == "14":
        default_df["Holding_Policy_Duration_14"] = 1
    else:
        default_df["Holding_Policy_Duration_14+"] = 1
    default_df["Reco_Policy_Cat"] = int(list[9])
    scaledf(default_df)
    # print(default_df)
   


@app.route("/results")
def dash_view():
    return render_template("results.html")



@app.route("/prediction", methods=["GET", "POST"])
def map_view():
    if request.method == "POST":
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
        inputer = imput_list[0]
        df_create(inputer)   
    return render_template("good_predict.html")
    




if __name__ == "__main__":
    app.run(debug=True)
    




    # result = ValuePredictor(to_predict_list)       
    # if int(result)== 1:
    #     prediction ='Yes'
    # else:
    #     prediction ='No'           
    # return render_template("ddd.html", prediction_text = to_predict_list)
    