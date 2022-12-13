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
              default_df["Accomodation_Type_Owned"] = 1
       }
       else if (value == "2"){
              default_df["Accomodation_Type_Rented"] = 1
       }

       let q2 = document.getElementById("inlineFormCustomSelect2");
       let value2 = q2.value;
       let text2 = q2.options[q2.selectedIndex].text;
       console.log(value2, text2)
       if (value2 == "1"){
              default_df["Reco_Insurance_Type_Individual"] = 1
       }
       else if (value2 == "2"){
              default_df["Reco_Insurance_Type_Joint"] = 1
       }
       let q3 = document.getElementById("inlineFormCustomSelect3");
       let value3 = q3.value;
       let text3 = q3.options[q3.selectedIndex].text;
       console.log(value3, text3)
       if (value3 == "1"){
              default_df["Is_Spouse_Yes"] = 1
       }
       else if (value3 == "2"){
              default_df["Is_Spouse_No"] = 1
       }

       let q4 = document.getElementById("q4");
       let value4 = q4.value;
       console.log(value4)
       if (value4 == "0"){
              default_df["Health_Indicator_0"] = 1
       }
       else if (value4 == "1"){
              default_df["Health_Indicator_1"] = 1
       }
       else if (value4 == "2"){
              default_df["Health_Indicator_2"] = 1
       }
       else if (value4 == "3"){
              default_df["Health_Indicator_3"] = 1
       }
       else if (value4 == "4"){
              default_df["Health_Indicator_4"] = 1
       }
       else if (value4 == "5"){
              default_df["Health_Indicator_5"] = 1
       }
       else if (value4 == "6"){
              default_df["Health_Indicator_6"] = 1
       }
       else if (value4 == "7"){
              default_df["Health_Indicator_7"] = 1
       }
       else if (value4 == "8"){
              default_df["Health_Indicator_8"] = 1
       }
       else if (value4 == "9"){
              default_df["Health_Indicator_9"] = 1
       }

       let q5 = document.getElementById("q5");
       let value5 = q5.value;
       let new5 = parseInt(value5)
       default_df["Holding_Policy_Type"] = new5


       let q6 = document.getElementById("q6");
       let value6 = q6.value;
       let new6 = parseInt(value6)
       console.log(new6)
       default_df["Upper_Age"] = new6

       let q7 = document.getElementById("q7");
       let value7 = q7.value;
       let new7 = parseInt(value7)
       console.log(new7)
       default_df["Lower_Age"] = new7


       let q8 = document.getElementById("q8");
       let value8 = q8.value;
       let new8 = parseInt(value8)
       console.log(new8)
       default_df["Holding_Policy_Type"] = new8
      
       let q9 = document.getElementById("q9");
       let value9 = q9.value;
       console.log(value4)
       if (value9 == "0"){
              default_df["Holding_Policy_Duration_0"] = 1
       }
       else if (value9 == "1"){
              default_df["Holding_Policy_Duration_1"] = 1
       }
       else if (value9 == "2"){
              default_df["Holding_Policy_Duration_2"] = 1
       }
       else if (value9 == "3"){
              default_df["Holding_Policy_Duration_3"] = 1
       }
       else if (value9 == "4"){
              default_df["Holding_Policy_Duration_4"] = 1
       }
       else if (value9 == "5"){
              default_df["Holding_Policy_Duration_5"] = 1
       }
       else if (value9 == "6"){
              default_df["Holding_Policy_Duration_6"] = 1
       }
       else if (value9 == "7"){
              default_df["Holding_Policy_Duration_7"] = 1
       }
       else if (value9 == "8"){
              default_df["Holding_Policy_Duration_8"] = 1
       }
       else if (value9 == "9"){
              default_df["Holding_Policy_Duration_9"] = 1
       }
       else if (value9 == "10"){
              default_df["Holding_Policy_Duration_10"] = 1
       }
       else if (value9 == "11"){
              default_df["Holding_Policy_Duration_11"] = 1
       }
       else if (value9 == "12"){
              default_df["Holding_Policy_Duration_12"] = 1
       }
       else if (value9 == "13"){
              default_df["Holding_Policy_Duration_13"] = 1
       }
       else if (value9 == "14"){
              default_df["Holding_Policy_Duration_10"] = 1
       }
       else if (value9 == "14+"){
              default_df["Holding_Policy_Duration_14plus"] = 1
       }
       
       let q10 = document.getElementById("q10");
       let value10 = q10.value;
       console.log(value10)
       num10 = parseInt(value10)
       default_df["Reco_Policy_Premium"] = num10
       
       let df_inputs = default_df

       console.log(df_inputs)
       // attempt(df_inputs)
}

// function attempt(data){
//        fetch("/receiver", 
//        {
//        method: 'POST',
//        headers: {
//        'Content-type': 'application/json',
//        'Accept': 'application/json'
//        },
//        body:JSON.stringify(data)}).then(res=>{
//        if(res.ok){
//        return res.json()
//        }else{
//        alert("something is wrong")
//        }
//        })


// function toFlask(data){
// ajax({
//        url: '/your_url',
//        data: {'new_freq':data},
//        type: 'POST',
//    dataType: 'json',
//        success: function(response){
//            console.log(response);
//        },
//        error: function(error){
//            console.log(error);
//        }
//    });
// }
// function toFlask(data){
//        fetch(`${window.origin}/your_url`, {
//               method: "POST",
//               credentials: "include",
//               body: JSON.stringify(data),
//               cache: "no-cache",
//               headers: new Headers({
//                 "content-type": "application/json"
//               })
//             })
// }