/*
 Campos:
 name
 description
 price
 stock
*/


//No se tiene que importar toda la librería, por lo que entre llaves definimos exactamente que queremos de la librería
import { Schema, model } from "mongoose";

const productsSchema = new Schema(
{ name:{
type:String,
require:true,
maxLength:100
},
description:{
    type:String,
    maxLength:600
},
price:{
    type: Number,
    requiere:true,
    min:0
},
stock:{
type: Number,
require: true,
min:0
}
}
)
