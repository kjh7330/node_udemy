const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.write('<html><head><title>노드서버</title><head>'); // response 에 데이터 기록
        res.write('<body>');
        res.write('<form action = "/message" method = "POST"><input type="text" name = "message"><button type = "submit">전송</button></form>')
        res.write('</body>')
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end',  ()=>{
            const paresdBody = Buffer.concat(body).toString();
            const message = paresdBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write('<html><head><title>노드서버</title><head>'); // response 에 데이터 기록
    res.write('<body>');
    res.write('<h1>Hellow World</body>')
    res.write('</body>');
    res.write('</html>');
    res.end();
};

// module.exports = {
//     handler : requestHandler,
//     someText : 'Some hard coded text'
// };

exports.handler = requestHandler;
exports.someText = 'Some hard coded text';