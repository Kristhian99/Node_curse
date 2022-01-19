const http = require('http');

const server = http.createServer( (req, res) => {
    console.log(req.method)
    res.write("dasd")
    res.end()
})
server.listen(8000)