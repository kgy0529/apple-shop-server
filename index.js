var http=require('http');
var hostname='127.0.0.1';
var port="8000";

const server=http.createServer(function(req, res){
    const path=req.url;
    const method=req.method;

    if(path==="/products"){
        if(method==="GET"){
            res.writeHead(200, {"Content-Type": "application/json"});
            const products=JSON.stringify([
                {
                    name:"apple Mac",
                    price:399000,
                },
            ]);
            res.end(products)
        }else if(method==="POST"){
            res.end("생성 되었습니다.")
        }
    }
    res.end("bye")
})

server.listen(port, hostname);
console.log('apple-server on')