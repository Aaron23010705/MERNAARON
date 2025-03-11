import { Schema, model } from "mongoose";

const localsSchema = new Schema(
    { name: {
type:String,
 require:true,
 maxLength:100
},
lastName:{
    type:String,
    require:true,
    maxLenght:100
},
birthday: {
    type:String,
    require:true,
    maxLenght:100
},

email:{
type:String,
require:true,
maxLenght:100
},
password:{
    type:String,
     require:true,
     maxLenght:100
},

telephone:{
type:String,
require:true,
maxLenght:10
},
dui:{
type:String,
require:true,
maxLenght:15
},
isVerified:{
    type:Boolean,
    require:true

} }, 
{
timestamps:true,
strict:true
})

export default model ("Clients", localsSchema );