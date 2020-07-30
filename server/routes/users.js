const router = require('express').Router();
const User = require("../models/user");
// const jwt = require('jsonwebtoken');
const {auth} = require("../middleware/auth");


router.route('/auth').get(auth , (req,res) =>{
    res.status(200).json({
        _id:req._id,
        isAuth:true,
        email:req.user.email,
        name:req.user.name,
        role:req.user.role
    })
})


router.route('/register').post((req,res) =>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email : email}, (err , user) => {
        if(!user){
            const newUser = User({
                name,
                email,
                password
            });
        
            newUser.save((err, obj) => {
                if (err){
                    res.json({
                        registerSuccess: false,
                        message : "Process Failed! Try Again",
                    })
                }
                else{
                    res.json({
                        registerSuccess: true,
                        message : "User Successfuly Registered",
                        // user : obj
                    })
                }
            })

        }else{
            return res.json(
                {
                    registerSuccess: false,
                    message : "User Already Exist"
                }
            )
        }
    }).catch(err => res.status(400).json({
        registerSuccess: false,
        message : err
    }))

    
});

router.route('/login').post( (req,res) => {
    User.findOne({email: req.body.email} , async (err,user) => {
        if(!user){
            return res.json({
                loginSuccess:false,
                message : "Invalid Email or Password"
            })
        }
        user.comparePassword(req.body.password,(err, isMatch) => {
            if(err){
                return res.json({
                    loginSuccess : false,
                    message : "Can't Login. Try Again!"
                })
            };
            if(!isMatch){
                return res.json({
                    loginSuccess : false,
                    message : "Invalid Email or Password"
                })
            }
            user.generateToken((err, user) => {
                if(err) {
                    return res.status(400).send(err)
                }
                else{
                res.cookie('x_auth' , user.token)
                .status(200)
                .json({
                    user : user,
                    loginSuccess:true 
                })
                }
            })
        })
        


    })
})

router.route('/logout').get(auth,(req,res) => {
    User.findOneAndUpdate({_id: req.user._id} , {token: ""} , (err, doc) => {
        if(err) return res.json({ success: false, err});
        return res.status(200).send({
            success:true
        })
    })
})

module.exports = router;