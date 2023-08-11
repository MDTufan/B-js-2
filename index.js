const http =require('http');

const port=3000;
const hostName='127.0.0.1'

const myser = http.createServer((req,res)=>{
    res.writeHead(202,{'content-type':'text/plain'});
    res.write('server is runing 44 200');
    res.end();
});

myser.listen( port, hostName,()=>{
  console.log(`http://${hostName}:${port}`);
})