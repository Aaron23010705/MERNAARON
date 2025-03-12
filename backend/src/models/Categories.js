import { Schema, model } from "mongoose";

const categoriesSchema = new Schema(
{ name:{
type:String,
require:true,
maxLength:100
},
description:{
    type:String,
    maxLength:600
},
status:{
    type: Boolean,
    requiere:true
},
img:{
type: String,
require: false
}
},{
    timestamps:true,
    strict:false
}
)

export default model ("Categories", categoriesSchema);
