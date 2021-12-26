const express= require('express');
const mongoose= require('mongoose');

const Personalshopper= require('../models/psdata.js');

const router= express.Router();

const getStudents = async (req, res) => {
    try {
        const personalshopper= await Personalshopper.find();
        
        res.status(200).json(personalshopper);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getspecPersonalshopper = async (req,res) => {
    const roll = req.params.roll;

    try {
        const stud = await Personalshopper.findOne({roll: roll});

        res.status(200).json(stud);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}

const createpersonalshopper =  async (req, res) => {
    console.log(req.body);
    const newpersonalshopper = new Personalshopper({
        name:req.body.name,
        location:req.body.location,
        evaluation:req.body.evaluation

    })
    try {
        await newpersonalshopper.save();

        res.status(201).json(newpersonalshopper);

    } catch(error) {
        res.status(400).json({ message : error.message});
    }

}

const updatepersonalshopper = async (req, res) => {
    const roll= req.params.roll;
    try{
        await Personalshopper.findOneAndUpdate({
            roll: roll,
        },
        {   
            name:req.body.name,
	    location:req.body.location,
	    evaluation:req.body.evaluation
        }
        )
        res.status(202).json({roll: roll});

    } catch (error) {
        res.status(401).json({message: error.message});
    }
    
}

const deletepersonalshopper = async (req, res) => {
    const roll= req.params.roll;

    try {
        await Personalshopper.findOneAndRemove({roll: roll});
        res.status(203).json({roll:roll});

    }catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getPersonalshopper= getPersonalshopper;
module.exports.createpersonalshopper= createpersonalshopper;
module.exports.getspecPersonalshopper= getspecPersonalshopper;
module.exports.updatepersonalshopper= updatepersonalshopper;
module.exports.deletepersonalshopper= deletepersonalshopper;
