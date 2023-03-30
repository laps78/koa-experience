const Koa = require('koa');
const app = new Koa();
const koaBody = require('koa-body');
const router = require('./router');

const port = 3535;

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMehods());

app.listen(port, (ctx) => {
  console.log("server started!!!");
});

