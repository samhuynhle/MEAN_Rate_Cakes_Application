const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cakesdb', {userNewUrlParser: true});


var ReviewSchema = new mongoose.Schema({
    rating: {type: Number, required: true},
    comment: {type: String, required: true, minlength: [5, "Comments must be at least 4 characters"]},
}, {timpestamps: true});

var CakeSchema = mongoose.Schema({
    baker_name: {type: String, required: true, minlength: [2, "Baker Name must be at least 2 characters"]},
    cake_name: {type: String, required: true, minlength: [2, "Cake Name must be at least 2 characters"]},
    image_url: {type: String, required: true, minlength: [3, "Image Url must be at least 5 characters"]},
    average_rating: {type: Number},
    reviews: [ReviewSchema],
}, {timestamps: true});

const Cake = mongoose.model('Cake', CakeSchema);

module.exports = Cake;