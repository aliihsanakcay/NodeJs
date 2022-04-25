const Koa = require('koa');
const koaRouter = require('koa-router');

const app = new Koa();
const router = new koaRouter();

// response
router.get('index', '/', (context) => {
  context.status = 200;
  context.body = "<h1>INDEX sayfasına hoşgeldiniz.</h1>";
});

router.get('about', '/about', (context) => {
  context.status = 200;
  context.body = "<h1>ABOUT sayfasına hoşgeldiniz.</h1>";
});

router.get('contact', '/contact', (context) => {
  context.status = 200;
  context.body = "<h1>CONTACT sayfasına hoşgeldiniz.</h1>";
});

// registering routes to the application
app.use(router.routes()).use(router.allowedMethods());

let port = 3000;
app.listen(port, () => {
  console.log(`Server running at PORT ${port}`);
});