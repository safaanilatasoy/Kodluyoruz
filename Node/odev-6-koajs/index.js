const Koa = require("koa");
const app = new Koa();

// response
app.use(async (ctx) => {
  if(ctx.path == "/"){
    ctx.body = "index page"
  }else if(ctx.path == "/about"){
    ctx.body = "about page"
  }else if(ctx.path == "/contact"){
    ctx.body = "contact page"
  }else{
    ctx.body = "404 not found"
  }
});



const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});
