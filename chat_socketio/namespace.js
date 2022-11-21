const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);

server.listen(3000, () => {
  console.log("connect 3000");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/namespace.html");
});

const namespace1 = io.of("/namespace1");
namespace1.on("connection", (socket) => {
  namespace1.emit("news", { hello: "Someone connected at namespace1" });
});

const namespace2 = io.of("/namespace2");
namespace2.on("connection", (socket) => {
  namespace2.emit("news", { hello: "Someone connected at Namespace2" });
});
