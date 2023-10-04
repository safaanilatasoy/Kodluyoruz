
// * ─── Node Js Ödev 5 - Sunucu Oluşturma ───────────────────────────────────────

const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;


    if(url === "/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h1>Welcome to Index Page</h1>");
        res.write("<p>Sitemap<p>");
        res.write('<ul>');
        res.write('<li><a href="/">Homepage</a></li>');
        res.write('<li><a href="/about">About</a></li>');
        res.write('<li><a href="/contact">Contact</a></li>');
        res.write('</ul>');
        

    }else if(url === "/about"){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Welcome to About Page</h1>");
        res.write("<p>Hello, My name is Anil<p>");

    }else if(url === "/contact"){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Welcome to Contact Page</h1>");
        res.write("<p>Phone Number: 3231231231</p><p>Mail: xxxx@gmail.com</p>");
    }else{
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 Not Found</h1>");
    }

    res.end();
});

const port = 5000;


server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});