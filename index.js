const express = require("express");
const path = require("path");
const cookieParser = require('cookie-parser');
const Razorpay = require("razorpay");
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
app.use(cors())

require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser());
app.use(express.json());

const mainRoutes = require("./routes/mainRoutes")
const fetchRoutes = require("./routes/fetchRoutes")
const userRoutes = require("./routes/userRoutes")

const {restrictToLogin} = require('./middlewares/auth')

const {connectToDb} = require("./Connection")
connectToDb("mongodb://127.0.0.1:27017/project");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/", userRoutes);
app.use("/", mainRoutes, restrictToLogin);
app.use("/", fetchRoutes, restrictToLogin);

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log("Server is listening at port:", port);
})