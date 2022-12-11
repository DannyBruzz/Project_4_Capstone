let default_df = {
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

console.log(default_df)

d3.select("#done").on("click", amendDF)

function amendDF() {
       let e = document.getElementById("inlineFormCustomSelect");
       let value = e.value;
       let text = e.options[e.selectedIndex].text;
       console.log(value, text)
       if (value == "1"){
              default_df.Accomodation_Type_Owned = default_df.Accomodation_Type_Owned.toString().replace(0, 1)
       }
       else if (value == "2"){
              default_df.Accomodation_Type_Rented = default_df.Accomodation_Type_Rented.toString().replace(0, 1)
       }

       let q2 = document.getElementById("inlineFormCustomSelect2");
       let value2 = q2.value;
       let text2 = q2.options[q2.selectedIndex].text;
       console.log(value2, text2)
       if (value2 == "1"){
              default_df.Reco_Insurance_Type_Individual = default_df.Reco_Insurance_Type_Individual.toString().replace(0, 1)
       }
       else if (value2 == "2"){
              default_df.Reco_Insurance_Type_Joint = default_df.Reco_Insurance_Type_Joint.toString().replace(0, 1)
       }
       
       let q3 = document.getElementById("inlineFormCustomSelect3");
       let value3 = q3.value;
       let text3 = q3.options[q3.selectedIndex].text;
       console.log(value3, text3)
       if (value3 == "1"){
              default_df.Is_Spouse_Yes = default_df.Is_Spouse_Yes.toString().replace(0, 1)
       }
       else if (value3 == "2"){
              default_df.Is_Spouse_No = default_df.Is_Spouse_No.toString().replace(0, 1)
       }

       let q4 = document.getElementById("q4");
       let value4 = q4.value;
       console.log(value4)
       if (value4 == "0"){
              default_df.Health_Indicator_0 = default_df.Health_Indicator_0.toString().replace(0, 1)
       }
       else if (value4 == "1"){
              default_df.Health_Indicator_1 = default_df.Health_Indicator_1.toString().replace(0, 1)
       }
       else if (value4 == "2"){
              default_df.Health_Indicator_2 = default_df.Health_Indicator_2.toString().replace(0, 1)
       }
       else if (value4 == "3"){
              default_df.Health_Indicator_3 = default_df.Health_Indicator_3.toString().replace(0, 1)
       }
       else if (value4 == "4"){
              default_df.Health_Indicator_4 = default_df.Health_Indicator_4.toString().replace(0, 1)
       }
       else if (value4 == "5"){
              default_df.Health_Indicator_5 = default_df.Health_Indicator_5.toString().replace(0, 1)
       }
       else if (value4 == "6"){
              default_df.Health_Indicator_6 = default_df.Health_Indicator_6.toString().replace(0, 1)
       }
       else if (value4 == "7"){
              default_df.Health_Indicator_7 = default_df.Health_Indicator_7.toString().replace(0, 1)
       }
       else if (value4 == "8"){
              default_df.Health_Indicator_8 = default_df.Health_Indicator_8.toString().replace(0, 1)
       }
       else if (value4 == "9"){
              default_df.Health_Indicator_9 = default_df.Health_Indicator_9.toString().replace(0, 1)
       }

       let q5 = document.getElementById("q5");
       let value5 = q5.value;
       console.log(value5)
       default_df.Holding_Policy_Type = default_df.Holding_Policy_Type.toString().replace(0, value5)


       let q6 = document.getElementById("q6");
       let value6 = q6.value;
       console.log(value6)
       default_df.Upper_Age = default_df.Upper_Age.toString().replace(0, value6)

       let q7 = document.getElementById("q7");
       let value7 = q7.value;
       console.log(value7)
       default_df.Lower_Age = default_df.Lower_Age.toString().replace(0, value7)


       let q8 = document.getElementById("q8");
       let value8 = q8.value;
       console.log(value8)
       default_df.Holding_Policy_Type = default_df.Holding_Policy_Type.toString().replace(0, value8)
      
       let q9 = document.getElementById("q9");
       let value9 = q9.value;
       console.log(value4)
       if (value9 == "0"){
              default_df.Holding_Policy_Duration_0 = default_df.Holding_Policy_Duration_0.toString().replace(0, 1)
       }
       else if (value9 == "1"){
              default_df.Holding_Policy_Duration_1 = default_df.Holding_Policy_Duration_1.toString().replace(0, 1)
       }
       else if (value9 == "2"){
              default_df.Holding_Policy_Duration_2 = default_df.Holding_Policy_Duration_2.toString().replace(0, 1)
       }
       else if (value9 == "3"){
              default_df.Holding_Policy_Duration_3 = default_df.Holding_Policy_Duration_3.toString().replace(0, 1)
       }
       else if (value9 == "4"){
              default_df.Holding_Policy_Duration_4 = default_df.Holding_Policy_Duration_4.toString().replace(0, 1)
       }
       else if (value9 == "5"){
              default_df.Holding_Policy_Duration_5 = default_df.Holding_Policy_Duration_5.toString().replace(0, 1)
       }
       else if (value9 == "6"){
              default_df.Holding_Policy_Duration_6 = default_df.Holding_Policy_Duration_6.toString().replace(0, 1)
       }
       else if (value9 == "7"){
              default_df.Holding_Policy_Duration_7 = default_df.Holding_Policy_Duration_7.toString().replace(0, 1)
       }
       else if (value9 == "8"){
              default_df.Holding_Policy_Duration_8 = default_df.Holding_Policy_Duration_8.toString().replace(0, 1)
       }
       else if (value9 == "9"){
              default_df.Holding_Policy_Duration_9 = default_df.Holding_Policy_Duration_9.toString().replace(0, 1)
       }
       else if (value9 == "10"){
              default_df.Holding_Policy_Duration_10 = default_df.Holding_Policy_Duration_10.toString().replace(0, 1)
       }
       else if (value9 == "11"){
              default_df.Holding_Policy_Duration_11 = default_df.Holding_Policy_Duration_11.toString().replace(0, 1)
       }
       else if (value9 == "12"){
              default_df.Holding_Policy_Duration_12 = default_df.Holding_Policy_Duration_12.toString().replace(0, 1)
       }
       else if (value9 == "13"){
              default_df.Holding_Policy_Duration_13 = default_df.Holding_Policy_Duration_13.toString().replace(0, 1)
       }
       else if (value9 == "14"){
              default_df.Holding_Policy_Duration_14 = default_df.Holding_Policy_Duration_14.toString().replace(0, 1)
       }
       else if (value9 == "14+"){
              default_df.Holding_Policy_Duration_14plus = default_df.Holding_Policy_Duration_14plus.toString().replace(0, 1)
       }
       
       let q10 = document.getElementById("q10");
       let value10 = q10.value;
       console.log(value10)
       default_df.Reco_Policy_Premium = default_df.Reco_Policy_Premium.toString().replace(0, value10)


       console.log(default_df)

}


