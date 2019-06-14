const server = require("server");
const { get, error } = server.router;
const { render, status } = server.reply;

server([get("/", ctx => render("index.ejs"))]);
