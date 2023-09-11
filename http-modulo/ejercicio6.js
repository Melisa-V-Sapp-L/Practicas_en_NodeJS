const http = require("http");

const port = process.env.PORT || 3000;
const ip = process.env.IP || "127.0.0.1";


const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`<html><body><h1>Miraclelab! 2022</h1></body></html>`);
};

const server = http.createServer(requestListener);
server.listen(port, ip, () => {
    console.log(`Server is running on http://${ip}:${port}`);
});
