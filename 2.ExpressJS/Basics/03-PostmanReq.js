import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>This is Home Page</h1>")
})

app.post("/register", (req, res) => {
    //Do something with the data
    res.sendStatus(201);
    res.send("Working")
    console.log("Working!!!");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page, get method")
})

app.put("/user/ayush", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/ayush", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/ayush", (req, res) => {
    //Deleting
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`${port} port is running`);
})