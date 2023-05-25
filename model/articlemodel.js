const mongoose = require("mongoose")
const Schema = mongoose.Schema

const articleSchema = new Schema({
   
    article: {type: String, required: true},
    author: {type: String, required: true},
    keywords: {type: String, required: true},
    abstract: {type: String, required: true},
    referance: {type: String, required: true},
    
},{
    timestamps:true
})

module.exports = mongoose.model("articles", articleSchema)