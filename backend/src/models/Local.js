import { Schema, model } from "mongoose";

const localSchema = new Schema(
{ name:{
type:String,
require:true,
maxLength:100
},
adress:{
    type:String,
    require:true,
    maxLength:600
},
telephone:{
    type: String,
    requiere:true,
    maxLenght:200
},
schedule:{
type: String,
require: true,
maxLenght:100
}
},{
    timestamps:true,
    strict:true
}
)
export default model ("Local", localSchema);
