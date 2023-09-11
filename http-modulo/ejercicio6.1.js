const http = require("http");
const fs = require('fs').promises;

const port = process.env.PORT || 3000;
const ip = process.env.IP || "127.0.0.1";


const requestListener = function (req, res) {
    fs.readFile(__dirname + "/miraclelab.html")
        .then(contents => {
            res.setHeader("Content-Type", "text/html");
            res.writeHead(200);
            res.end(contents);
        })
        .catch(error => {
            res.writeHead(500);
            res.end(error);
            return;
        });
};

const server = http.createServer(requestListener);
server.listen(port, ip, () => {
    console.log(`Server is running on http://${ip}:${port}`);
});