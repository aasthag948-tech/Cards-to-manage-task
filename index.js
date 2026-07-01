const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));

const filesDir = path.join(__dirname, "files");

app.get('/', function(req, res){
    const files = fs.readdirSync(filesDir);
    const tasks = files.map(file => {
        const content = fs.readFileSync(path.join(filesDir, file), "utf-8");
        const [title, ...detailLines] = content.split("\n");
        return { filename: file, title, details: detailLines.join("\n") };
    });
    res.render("index.ejs", { tasks });
});

app.get('/task/:filename', function(req, res){
    const filename = req.params.filename;
    const content = fs.readFileSync(path.join(filesDir, filename), "utf-8");
    const [title, ...detailLines] = content.split("\n");
    res.render("task.ejs", { title, details: detailLines.join("\n") });
});

app.post('/create', function(req, res){
    const { title, details } = req.body;
    const filename = title.split(" ").join("_") + ".txt";
    fs.writeFileSync(path.join(filesDir, filename), title + "\n" + details);
    res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});