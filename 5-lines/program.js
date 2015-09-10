var through = require('through2');
var split = require('split');


var stream = through(write, end);
var number = 1;
process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);


function write(buffer,encoding,next){
  this.push(
    (
      number % 2 === 0?
      buffer.toString().toUpperCase() : buffer.toString().toLowerCase()
    )
    +"\n"
  );

  number++;
  next();
}

function end(done){
  done();
}
