

const express=require("express");
const res = require("express/lib/response");
const app=express();
const date=require(__dirname+"/date.js");

let Tasks=[];
let workItems=[];
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.get("/",function(req,res){
    let day=date.getDate();

    res.render("list",{listTitle: day,items:Tasks});
     
});


app.post("/",function(req,res){
    console.log(req.body);
    console.log(req.body.list);
    if (req.body.list=="Work List"){
        let item=req.body.task;
        workItems.push(item);
        res.redirect("/work");
    

    }
    else{
    item=req.body.task;
    
    Tasks.push(item);
    res.redirect("/");
    };


});

app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List",items:workItems});

});

app.post("/work",function(req,res){
    console.log(req.body);


});

app.get("/about",function(req,res){
    res.render("about");
});


app.listen(3000,function(){
    console.log("server is runnnig");
});