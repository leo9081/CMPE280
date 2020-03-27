const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res)=>{
        User.find().then(users => res.json(users))
            .catch(err=>res.status(400).json('Error:' + err));
    }
)

router.route('/add').post((req, res)=>{
    const firstname = req.body.firstName;
    const lastname = req.body.lastName;
    const gender = req.body.gender;
    const age = Number(req.body.age);
    const notes = req.body.notes;
    const photo = req.body.photo;
    const height = Number(req.body.height);
    const weight = Number(req.body.weight);
    const bodytemperature = Number(req.body.bodytemperature);
    const pulserate = Number(req.body.pulserate);
    const bp = Number(req.body.bp);
    const medications = req.body.medications;

        const newUser = new User({firstname,
            lastname, gender, age,
            notes,photo,height,weight,
            bodytemperature,pulserate,
            bp,medications});

        newUser.save().then(()=>res.json('user Added!')).catch(err=>res.status(400).json('Error' + err));
    }
)

module.exports = router