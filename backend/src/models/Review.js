import { Schema, model } from "mongoose";

/* 
campos:
Comment
rating
idClient

*/

const ReviewSchema = new Schema ({
    comment:{
type:String,
require: true,
maxLenght: 400
            },
    rating: {
        type:Number,
        require: true,
        min:0,
        max:5
    },
    idClient:{
        type: Schema.Types.ObjectId,
        ref: "Clients",
        require:true
    }

} ,{
    timestamps:true,
    strict:false
})

export default model ("Reviews", ReviewSchema)