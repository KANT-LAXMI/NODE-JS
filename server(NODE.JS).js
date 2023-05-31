const http=require('http')
const url=require('url')
var server=http.createServer(function(req,resp){
    var q=url.parse(req.url,true)
    console.log(q)
    resp.writeHeader(200,{"content-type":"text/html"})
    switch(q.pathname) {
        case "/home":
            resp.write("Java is to JavaScript what car is to Carpet" );
            resp.end("Code is like humor. When you have to explain it, it’s bad.")
            break;
        case "/aboutUs":
            resp.write("Fix the cause, not the symptom" );
            resp.end("Before software can be reusable it first has to be usable.")
            break;
        default:
            resp.write("Strip your website down to the basics and do a few things really well." );
            resp.end("I’m very font of you because you are just my type.")
            break;

    }
   
})
server.listen(3002,console.log("SERVER STARTED AT 3002 PORT"))