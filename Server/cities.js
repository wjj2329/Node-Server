var http=require('http')
var url=require('url')
var server=http.createServer(function(req, res){
console.log(req);
var parsedUrl=url.parse(req.url, true);
console.log(parsedUrl);
if(/^\/api\/parsettime/.test(req.url)){
console.log("got parsetime");
}
res.writeHead(200, {'Content-Type':'application/json'});
var result=[{city:'Provo'},{city:'Price'}];
res.end(JSON.stringify(result));
});
server.listen(3000);
