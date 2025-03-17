
const reviewController = {}

import reviewModel from "../models/Review.js";

//Select
reviewController.getReview = async (req,res) => {

    const review =  await reviewModel.find().populate("idClient");
    res.json(review)
   
}

reviewController.insertReview = async (req,res) => {

    const {comment, rating, idClient} = req.body;
    const newReview = new reviewModel({comment, rating, idClient})
    await newReview.save();
    res.json ({message: "Review saved"});
}

reviewController.updateReview = async (req,res) => {
    const {comment, rating, idClient} = req.body;
     const updatedReview = await reviewModel.findByIdAndUpdate(req.params.id,{comment, rating, idClient},{new:true})
     res.json ({message: "Review updated"});

}

reviewController.deleteReview = async (req,res) => {

    await reviewModel.findByIdAndDelete(req.params.id);
    res.json ({message: "Review deleted"});

}

export default reviewController;