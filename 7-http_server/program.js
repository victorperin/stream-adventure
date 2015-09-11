var http = require('http');
var through = require('through2');



var server = http.createServer(function (req,res){
  if(req.method === 'POST'){
    var stream = through(write, end);
    req.pipe(stream).pipe(res);
  }
});

function write(buffer,encoding,next){
  this.push(buffer.toString().toUpperCase());
  next();
}

function end(done){
  done();
}

server.listen(process.argv[2]);
