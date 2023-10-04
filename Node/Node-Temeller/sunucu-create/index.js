const http = require('http');

const server = http.createServer((req,res) => {

    const url = req.url;  // taking the url

    // routing
    if (url === "/") {  
      res.writeHead(200,{'Content-Type':'text/html'})
      res.write("<h1> Index Page </h1>");
    } else if (url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("About Page");
    } else if (url === "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("Contact Page");
    }else{
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 Not Found</h1>");
    }

    
    res.end();
});


const port = 3000;

server.listen(port, () => {
    console.log(`Sunucu port ${port}'de başlatıldı.`);
}); // 3000 portunu dinle