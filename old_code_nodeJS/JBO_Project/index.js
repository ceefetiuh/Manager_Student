let bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
let app = require("express")();
let http = require("http").createServer(app).listen(process.env.PORT);
let session = require('express-session');
app.use(require("express").static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.disable('etag');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 }
}));
let routerHome = require("./routers/routerHome");
let routerPage = require("./routers/routerPage");
let routerAPI = require("./routers/api");

app.use("/", routerHome);
app.use("/page", routerPage);
app.use("/api", routerAPI);

app.use(function(req, res) {
    res.status(404).render('error');
});