const express = require('express');
const app = express();
const bodyparser= require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 3000;


app.use(bodyparser.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))


mongoose.set('strictQuery', false)
const uri = "T4xpu2Vx7iRrPmfn";

 const connection_string = `mongodb+srv://mianglouch123:${uri}@cluster0.xmcegc2.mongodb.net/?retryWrites=true&w=majority`;

 mongoose.connect(connection_string).
then((res)=>{
    console.log('connection mongoose database');
}).
catch((err)=>{
    console.log('conection failed');
})


//Schema

const Calculator = new mongoose.Schema(
    {
        firstValue:{
            type:Number,
            required:true
            },
            secondValue:{
                type:Number,
                required:true
            },
            operation:{
                type:String,
                required:true
            },
            result:{
                type:Number,
                required:true
            }
}

)
//Model

const Calculate = new mongoose.model('calculator',Calculator);


app.post('/calculate',(req,res)=>{
    
      const {firstValue,secondValue,operation} = req.body;
      
      
    
    let firstParserValue = Number(firstValue);
    let secondParserValue = Number(secondValue);
    let resultOperation;
   


    switch(operation){
        case "+":
          resultOperation = (firstParserValue + secondParserValue);
         break;
        case  "-":
             resultOperation =  (firstParserValue - secondParserValue);
         break;

        case "*":
         resultOperation = (firstParserValue * secondParserValue);
         break;

        case "/":
            resultOperation =  (firstParserValue / secondParserValue);
         break;

         default:"set value"


        
    }

    console.log(resultOperation)
   const newCalculate = new Calculate({
    firstValue:firstParserValue,
    secondValue: secondParserValue,
    operation: operation,
    result:resultOperation,
   
   })

   newCalculate.save().
   then((result)=>{
    console.log('objeto guardado')
   }).catch((err)=>{
    console.log(err.name);

   })

    
    res.json({
     firstValue: firstParserValue,
     secondValued: secondParserValue,
     operation: operation,
     result: resultOperation,
  

    })

})


    
 app.listen(PORT,()=>{

        console.log("server is started in port " + PORT);
    
    })



