const express = require("express"); 
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser"); 
const methodOverride = require("method-override"); 

const app = express();

// mongoose.connect("mongodb://20.0.153.128:10999/kieranDB", { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true, 
//     }) 
// .then(() => console.log("MongoDB Connected")) 
// .catch((err) => console.error("MongoDB Connection Error:", err));
     
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json()); 
// app.use(methodOverride("_method")); 
// app.set("view engine", "ejs"); 

const studentSchema = new mongoose.Schema({ name: String, age: Number, course: String }); 
const Student = mongoose.model("Student", studentSchema); 

app.get("/", (req, res) => { 
    //res.redirect("/students"); 
    res.send("Hello from NCG");
    }); 

app.listen(3000, () => console.log("server is up and running on port 3000"));
 