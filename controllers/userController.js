const router = require("express").Router();
const {User, Profile} = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

router.get("/",(req,res)=>{
    User.findAll({
        include:[
            {
                model:Profile

            }

        ]
    }).then(users=>{
        res.json(users)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            msg: " err error",
            err
        })
    })
    })

    

    // router.get("/home"(req,res)=>{
    //     res.send("home")
    // })
    module.exports = router;