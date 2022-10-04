const mongoose = require('mongoose')

const ConnectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/dbExample", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Connected to database ...");
    }catch(e) {console.log(e)}
}

module.exports = ConnectDB;
