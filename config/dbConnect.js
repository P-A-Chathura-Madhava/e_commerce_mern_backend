const { default: mongoose } = require("mongoose");

const dbConnect = () => {
    try {
        const conn = mongoose.connect('mongodb://localhost:27017/eCommerce');
        console.log('Database connected');
    } catch (error) {
        console.log('Database not connected');
    }
};

module.exports = dbConnect;