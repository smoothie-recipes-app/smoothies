const express =require('express')
const router = express.Router()
const Favourites = require('../models/favourites')



router.post('/upload', (req, res) => {
    Favourites.findOne({title : req.body.title , user : req.body.user}, (err , fav) => {
        if(!fav){
            const favourite = new Favourites(req.body)
            favourite.save((err)=> {
                if(err) return res.status(400).json({success : false , message : err})
                return res.status(200).json({success : true , message : 'Added to Favourites'})
            })
        }else{
            return res.json(
                {
                    success: false,
                    message : "Favourite Already Exist"
                }
            )
        }
    }).catch(err => res.status(400).json({
        success: false,
        message : "Process Failed! Try Again"
    }))
})

router.post('/getFavourites', (req, res) => {
    Favourites.find({ user: req.body._id })
    .exec((err , favourites) => {
        if(err) return res.status(400).json({success : false , err})
        res.status(200).json({success : true , favourites})
    })
    

})


module.exports = router