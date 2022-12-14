# Project_4_Capstone

## Background

HQF (Health Quokka Fund) has received the below dataset of a recent ad campaign targeting existing policy holders with a recommended insurance product. They would like to know whether the campaign was successful, who was most likely to respond to them and whether the success of the campaign can be predicted.


## Process

Extracting:  
* Dataset extracted from Kaggle wesite into Google Collab notebook.

Transforming Data:  
* Data filtered to one city, which has 8973 values
* Unnnecessary columns deleted, as well as any duplicates
* Visualisation csv created with target column
* Model csv created without target column

Model Testing:  
* Model csv loaded into Google Collab notebook with Pyspark and sklearn utilised
* Data scaled and transformed via StandardScaler
* Model undergoes hyperparameter tuning via LogisticRegression, RandomForestClassifier, ExtraTreesClassifier & AdaBoostClassifier
* Tuned model saved in h5 file

Visualisations:
* Visualisations csv loaded into Tableau
* Tableau workbook saved to Tableau public (url: https://public.tableau.com/app/profile/danny1843/viz/Project4_16703288498090/SpouseTotal)

Web Development:
* Flask, HTML, CSS, Javascript & Githubpages used
* Home/index page provides brief information on project requirements
* Prediction page provides inputs for model prediction, as well as the final output
* Results page runs Tableau workbook within webpage
* Javascript page transforms inputs into numerical df, then sends to app page, where model is run

## Content:

```
Project_4_Capstone

├── Notebooks
│   ├── model_create.ipynb
│   ├── tester.ipynb
│   └── Visuals.ipynb
├── InputData
│   ├── city1.csv
│   ├── test.csv
│   └── quokka.jpg
├── Static
│   ├── style.css
│   └── modelV1.h5
├── Templates
│   ├── good_predict.html
│   ├── index.html
│   └── results.html
├── README.md
├── Project_4_Proposal.docx
├── .gitignore
├── app2.py

```


## Source

Description of dataset: https://www.kaggle.com/code/manabendrarout/lets-find-a-job-eda-visualize-fe-ensemble/notebook
Dataset Source: https://www.kaggle.com/datasets/imsparsh/jobathon-analytics-vidhya
