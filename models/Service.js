const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    sellerReference: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, default: 0 },
    reviews: [{ type: String }],
    active: { type: Boolean, default: true }
}, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
