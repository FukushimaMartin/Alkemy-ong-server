const { testimonials } =require ('../models');
const { createTestimonialSchema } = require('../util/testimonial.joi');

const getTestimonials=async (req,res)=>{
    try{
        const allTestimonials=await testimonials.findAll();
        return res.status(200).json(allTestimonials);
    }catch(err){
        return res.status(404).send({message:err.message})
    }
}

const findTestimonial=async (req,res)=>{
    try{
        const {id}=req.params;
        const testimonial=await testimonials.findByPk(id);
        if(!testimonial) return res.status(404).json({message:"Testimonial not found"});
        return res.status(200).json(testimonial);
    }catch(err){
        return res.status(404).send({message:err.message})
    }
}

const updateTestimonial=async (req, res)=>{    
    try{
        const testimonial= await testimonials.update(req.body, {where:{id:req.params.id}})                
        if(testimonial[0])return res.status(200).json(req.body)
        throw new Error ("Testimonial not found", 404)
    }catch(err){
        return res.status(404).json({message:err.message})
    }
}

async function createTestimonial(req, res) {
    try {    
        const { name, content, image } = req.body;
        await createTestimonialSchema.validateAsync({ name, content});
        const newTestimonial = await testimonials.create({ name, content, image });
        return res.status(201).json(newTestimonial);
    } catch (err) {
        return res.status(400).send({ message: err.message })
    }

}
const deleteTestimonial=async (req,res)=>{
    try{
        const result= await testimonials.destroy({where:{id:req.params.id}})
        if(!result)throw new Error("Elemento no encontrado", 404)
        return res.status(200).json({message:"Elemento eliminado con exito"})
    }catch(err){
        return res.status(404).json({message:err.message})
    }
}

module.exports = {
    updateTestimonial,
    createTestimonial,
    deleteTestimonial,
    getTestimonials,
    findTestimonial
}
