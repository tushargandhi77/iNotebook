const mongoose = require('mongoose');
// const mongoURI = "mongodb://127.0.0.1:27017/test"
const mongoURI = "mongodb://127.0.0.1:27017/test?connectTimeoutMS=1000&authSource=otherdb"
mongoose.set("strictQuery", false);
const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connect to mongose succesfully");
    })
}

module.exports = connectToMongo