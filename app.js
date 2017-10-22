var express = require("express"),
    app = express(),
    request = require("request");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
     res.render("search");
});

app.get("/results", function(req, res){
    var searchQuery = req.query.search;
    var url = "http://www.omdbapi.com/?apikey=thewdb&s=" + searchQuery;
    request(url , function(error, response, body){
            if(!error && response.statusCode == 200){
                var data = JSON.parse(body);
                res.render("results", {data: data});
                
            }
    })
    
});

app.get("*", function(req, res){
    res.render("error");
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("MOVIE APP SERVER SUCCESSFULLY ACTIVATED!");
});