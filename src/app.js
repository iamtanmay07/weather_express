const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const hbs = require("hbs");

// paths
const static_path = path.join(__dirname, "../public"); //absolute path of static pages.
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

// setting up the site serving using static 
app.use(express.static(static_path));
// setting up view engin
app.set('view engine' , 'hbs');
// setting up partials
app.set("views", template_path);
hbs.registerPartials(partials_path);


app.get("/", (req, res) => {
    res.render('index');
})

app.get("/about", (req, res) => {
    res.render('about');
})

app.get("/weather", (req, res) => {
    res.render('weather');
})


app.get("*", (req, res) => {
    res.render('404page', {
        errorMsg: "Oops! Page not found, Click Here to go" // passing object
    })
})

app.listen(port, ()=> {
    console.log(`listening to port ${port}`);
})

