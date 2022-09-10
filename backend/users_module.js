//Step 1: Database connection using connection string
const mongoose = require("mongoose");


const conn_str = "mongodb+srv://root:root@cluster0.dslyw.mongodb.net/tcet?retryWrites=true&w=majority"

mongoose.connect(conn_str, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("Connected successfully..."))
	.catch( (error) => console.log(error) );
	
	
//Step 2: Create Schema (similar to Java Class)
const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	city: String
})

//Step 3: Create collection Object (model)
// MAPPING 
const userObject = new mongoose.model("users", userSchema);

exports.User = userObject;