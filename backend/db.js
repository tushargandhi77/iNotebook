const mongoose = require('mongoose');
// const mongoURI = "mongodb://127.0.0.1:27017/test"
const mongoURI = "mongodb+srv://inotebook:inotebook12345@cluster0.6tynf2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.set("strictQuery", false);
const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connect to mongose succesfully");
    })
}

module.exports = connectToMongo