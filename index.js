const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const mainRoutes = require("./routes/mainRoutes")
const fetchRoutes = require("./routes/fetchRoutes")

const {connectToDb} = require("./Connection")
connectToDb("mongodb://127.0.0.1:27017/project");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/", mainRoutes);
app.use("/", fetchRoutes);

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log("Server is listening at port:", port);
})