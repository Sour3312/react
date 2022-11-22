const app = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const expres = app();
const port = 1000;
expres.use(bodyParser.urlencoded({ extended: false }));
//here bodeyparser is used beacuse 'req.body' was giving undefined
expres.use(app.json());
//to post the data from body(json)

expres.get("/", (req, res) => {
    console.log(app);
    console.log(expres);
    res.sendFile(path.join(__dirname + "/page.html"));
});

// reading
expres.get("/api/jsonFile", (req, res) => {
  res.json({
    ID: "2a0588d9-b4da-4e2e-ab74-db831715d07d",
    Message: "H1 sourav",
    Global: {
      NewConfirmed: 468033,
      TotalConfirmed: 630297176,
      NewDeaths: 2880,
      TotalDeaths: 6592027,
      NewRecovered: 0,
      TotalRecovered: 0,
      Date: Date.now(),
    },
  });
});

//create
expres.post("/api/postJson", (req, res) => {
  const usename = req.body.username;
  const passw = req.body.pass;

  res.json({
    username: usename,
    password: passw,
    Date:Date.now(),
    status:true
  });
});

expres.post("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/page.html"));
  console.log("posted sucessfully");
  console.log(req.body);
});

expres.post("/page2", (req, res) => {
  res.sendFile(path.join(__dirname + "/page2.html"));
  res.send(
    `<h3> H! ${req.body.username}</h3> <h3> your password is ${req.body.pass}</h3>`
  );
  console.log("posted sucessfully");
  console.log(req.body);
});

expres.get("/home", (req, res) => {
  res.send("<hr>home is on </hr>");
});

expres.listen(port, () => {
  console.log(`server is on at http://localhost:${port}`);
});
