import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
const adj = ["arrogant","handsome","beautiful","Charming","big-hearted","Abuser","Beautiful-girl","Stupid","Weirdo","Pitiful"];
const noun = ["Ashish","Yash",,"shivam","gyanendra","umang","joseph","john","Bhardwaj"];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.get("/",(req,res)=>{
    res.render("index.ejs");
});
app.post("/submit",(req,res)=>{
    const randomadj = adj[Math.floor(Math.random()*adj.length)];
    const randomnoun = noun[Math.floor(Math.random()*noun.length)];
    res.render("index.ejs",{Noun:randomnoun,Adj : randomadj});
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});