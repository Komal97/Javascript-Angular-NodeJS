const http=require("http");

// const server=http.createServer(takeRequestGiveResponse);
// function takeRequestGiveResponse(request,response){
//     response.write("Hello user");
//     response.end();
// }
// server.listen(5000);

http.createServer((req,res)=>{

    var url=req.url;   //here in req.url ,url is a key while other url is a variable

//--------------------------------- Used in GET method -------------------------------------------
  //  var urlobj=require("url");
  //  var urlDetails=urlobj.parse(url,true);
  //  console.log("url is :",url);
  //  console.log("urldetails is :",urlDetails);
// ----------------------------------------------------------------------------------------------

    if(url=='/hello'){
        res.write("Hello User !!");
        res.end();
    }
    else if(url=="/welcome"){
        res.write("Welcome User !!");
        res.end();
    }
    else if(url=="/userjson"){
        var userObject = [{id:1001,name:'Ram',salary:49999},{id:1002,name:'Shyam',salary:39999},{id:1003,name:'Mike',salary:29999}];
        res.end(JSON.stringify(userObject)); //because we can write data either in text or in binary 
        //object here has the referance of the machine we are using ie address of this file ,so we camt send it ,
        //so we convert it into string form
    }
    else if(url=="/index.html"){
        res.writeHead(200,{'content-type':'text/html'});
        const path=require("path");
        var fullpath=path.join(__dirname,"/public"+url);
        const fs=require("fs");
        var readStream=fs.createReadStream(fullpath);
        readStream.pipe(res);
    }

    // ---------------------------------- Used in POST method-----------------------------------------
    else if(url=="/login"){
        var postdata="";
        req.on("data",(chunk)=>{
            postdata+=chunk;
        });

        req.on("end",()=>{
            console.log("Data collected ",postdata);
            const queryString=require("querystring");
            var queryStringObject=queryString.parse(postdata);
            console.log("QueryString is ",queryString);
            console.log("QueryStringObject is ",queryStringObject);
            var userid=queryStringObject.userid;
            var pwd=queryStringObject.password;
            if(userid==pwd){
                res.write("Welcome "+userid);
            }
            else{
                res.write("Invalid username or password !!");
            }
            res.end();
        }) 
    }

    // -----------------------------------------------------------------------------------------------

    // ---------------------------------- Used in GET method------------------------------------------

    // else if(urlDetails.pathname=="/login"){
    //     var userid=urlDetails.query.userid;
    //     var pwd=urlDetails.query.password;
      
    //     if(userid==pwd){
    //         res.write("Welcome "+userid);
    //     }
    //     else{
    //         res.write("Invalid username or password !!");
    //     }
    //     res.end();
    // }
    // -----------------------------------------------------------------------------------------------
    else {
        res.write("Wrong url !!");
        res.end();
    }
}).listen(process.env.PORT||5000,()=>{
    console.log("Server Start...");
})