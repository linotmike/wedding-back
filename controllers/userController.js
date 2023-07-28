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

  router.post("/login", async(req,res)=>{
    console.log(req.body);
    try{
        const user = await User.findOne({
            where:{
                username:req.body.username
            }
        })
        if(!userData){
            console.log("no user with this username");
            res.status(400).json({msg:"invalid username or password"})
        }else if(!bcrypt.compareSync(req.body.password,user.password)){
            return res.status(400).json({msg:"invalid password"})

    } else {
        const token = jwt.sign({
            userId:user.id,
            username:user.username,
            
        },process.env.JWT_SECRET,{
            expiresIn: "2h"
        })
        res.json({
            token,
            user: userData
        })
    }
  }
  catch(err){
    console.log(err);
    res.status(500).json(err)
  }
  })  

    

 router.post("/",(req,res)=>{
    console.log(req.body);
    User.create(req.body)
    .then(newUser=>{
        const token = jwt.sign({
            userId:newUser.id,
            username:newUser.username
        },process.env.JWT_SECRET,{
            expiresIn: "2h"
        })
        res.json({
            token,
            user: newUser
        })
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
         msg:"err err",
         err
        })
    })

 })
    module.exports = router;