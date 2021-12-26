const express = require("express");

const  personalshopper_Act = require("../controllers/personalshopper"); 

const router = express.Router();

router.get('/', personalshopper_Act.getPersonalshopper);
router.get('/:roll', personalshopper_Act.getspecPersonalshopper);
router.post('/', personalshopper_Act.createpersonalshopper);
router.patch('/:roll', personalshopper_Act.updatepersonalshopper);
router.delete('/:roll', personalshopper_Act.deletepersonalshopper);

module.exports=router;
