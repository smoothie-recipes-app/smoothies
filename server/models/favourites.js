const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FavouritesSchema = Schema({
    user : {
        type : String,
    },
    title : {
        type : String,
    },

    image : {
        type : String,
    },
    ingredientLines : {
        type : Array,
        default : []
    }
} , {timestamps : true});



const Favourites = mongoose.model('Favourites',FavouritesSchema); 

module.exports = Favourites;