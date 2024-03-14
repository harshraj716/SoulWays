const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    id: String,
    name: String,
    capital: String,
    about: String,
    climate: String,
    history: String,
    time: String,
    food: String,
    img: [String],
    products: [{
        name: String,
        description: String,
        image: String,
        category: String
    }],
    tourist: [{
        name: String,
        info: String,
        images: String,
        location: String
    }]
});

const Destination = mongoose.model('Destination', destinationSchema);

module.exports = Destination;
