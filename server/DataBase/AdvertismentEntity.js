const mongoose = require('mongoose');

const AdvertismentSchema = new mongoose.Schema({
    screenId: Number,
    name: String,
    template: String,
    length: Number,
    timeFrame: [
        {
            dates: {
                start: String,
                end: String
            },
            days: [Number],
            time: {
                start: String,
                end: String
            }
        }
    ],
    images: [String],
    text: [String]
});

// Create model from the schema
const AdvertismentModel = mongoose.model('Advertisments', AdvertismentSchema);

module.exports = {
    AdvertismentSchema,
    AdvertismentModel
};