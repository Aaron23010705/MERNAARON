const EvaluationController = {}

import EvaluationModel from "../models/Evaluations.js";

//Select
EvaluationController.getEvaluation = async (req,res) => {

    const evaluation =  await EvaluationModel.find().populate("idEmployee");
    res.json(evaluation)
   
}

EvaluationController.insertEvaluation = async (req,res) => {

    const {comment, grade, role, idEmployee} = req.body;
    const newEvaluation = new EvaluationModel({comment, grade, role, idEmployee})
    await newEvaluation.save();
    res.json ({message: "Evaluation saved"});
}

EvaluationController.updateEvaluation = async (req,res) => {
    const {comment, grade, role, idEmployee} = req.body;
     const updatedEvaluation = await EvaluationModel.findByIdAndUpdate(req.params.id,{comment, grade, role, idEmployee},{new:true})
     res.json ({message: "Evaluation updated"});

}

EvaluationController.deleteEvaluation= async (req,res) => {

    await EvaluationModel.findByIdAndDelete(req.params.id);
    res.json ({message: "Evaluation deleted"});

}

export default EvaluationController;