import faqsModel from '../Models/faqsModel.js';

const faqsController = {};

//Select
  


faqsController.getFaqs = async (req,res) => {
    try{

    const faqs = await faqsModel.find();
    res.json(faqs)
    res.status(200).json(faqs);
    }catch (error) {
res.status(400).json({ message: "Error interno de el servidor", error });
    }
   
}

faqsController.insertfaqs = async (req,res) => {
//Pido las cosas que necesito
    const {question, answer, level, isActive } = req.body;
    //2- Guardo en la base de datos
    if(level < 1 || level > 5) {
        return res.status(400).json({ message: "El nivel debe estar entre 1 y 5" });
    }

    if(!question || !answer || !level || !isActive){
        return res.status(400).json({ message: "Todos los campos son obligatorios y deben tener el tipo correcto" });
    }

    if(question.length < 4 || answer.length < 4) {
        return res.status(400).json({ message: "La pregunta y la respuesta deben tener al menos 4 caracteres" });
    }

    const newFaqs = new faqsModel({question, answer, level, isActive })
    await newFaqs.save();

    //3- Respondo al cliente
    res.json ({message: "faqs saved"});
}

faqsController.updatefaqsModel = async (req,res) => {

    //Pido las cosas que necesito
    const {question, answer, level, isActive } = req.body;
    //2- Guardo en la base de datos pero antes valido que los datos sean correctos
     if(level < 1 || level > 5) {
        return res.status(400).json({ message: "El nivel debe estar entre 1 y 5" });
    }

    if(!question || !answer || !level || !isActive){
        return res.status(400).json({ message: "Todos los campos son obligatorios y deben tener el tipo correcto" });
    }

    if(question.length < 4 || answer.length < 4) {
        return res.status(400).json({ message: "La pregunta y la respuesta deben tener al menos 4 caracteres" });
    }

    //3- Actualizo la base de datos
     const updatedFaq = await faqsModel.findByIdAndUpdate(req.params.id,{question, answer, level, isActive },{new:true})
     res.json ({message: "faq upsdated"});

}

faqsController.deletefaqsModel = async (req,res) => {

    try{
    await faqsModel.findByIdAndDelete(req.params.id);
    res.json ({message: "client deleted"});
    res.status(200).json({ message: "FAQ eliminada correctamente" });
    } catch (error) {
        res.status(400).json({ message: "Error al eliminar la FAQ", error });
    }

}

export default faqsController;
