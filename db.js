const mongoose = require('mongoose');

const connectMongoDB = async() => {

    try {
        
        await mongoose.connect("mongodb+srv://kat369:Kathiravan1995@project-m-tool.xjuxrpd.mongodb.net/infodazz")
        console.log("DB Connection successful")

    } catch (error) {
        console.log("DB connection failed")
    }


}

module.exports = connectMongoDB