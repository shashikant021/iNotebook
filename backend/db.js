const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://shashikantsahu487:Sahu%401234@cluster0.fxggr.mongodb.net/iNotebook"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully !");
})
}

module.exports = connectToMongo;
