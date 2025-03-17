import { Schema, model } from "mongoose";

/* 
campos:
Comment
grade
Role
idEmployee

*/

const EvaluationSchema = new Schema ({
    comment:{
type:String,
require: true,
maxLenght: 400
            },
    grade: {
        type:Number,
        require: true,
        min:0,
        max:10
    },
    role:{
        type:String,
        require:true,
        maxLenght:50
    },
    idEmployee:{
        type: Schema.Types.ObjectId,
        ref: "Employee",
        require:true
    }

} ,{
    timestamps:true,
    strict:false
})

export default model ("Evaluations", EvaluationSchema)