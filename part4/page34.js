import express from "express";
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.listen(8080, () => console.log("server started"));

const users = [
    {name: "John", email: "john@gmail.com", password: "123"},
    {name: "Jane", email: "jane@gmail.com", password: "456"}
];
app.get("/login", (req,res) => {
    res.render("login");
});
app.get("/register", (req,res) => {
    res.render("register");
});
app.get("/dashboard", (req,res) => {
    res.render("dashboard", { users: users });
})