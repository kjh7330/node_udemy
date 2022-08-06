const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
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
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write('<html><head><title>노드서버</title><head>'); // response 에 데이터 기록
    res.write('<body>');
    res.write('<h1>Hellow World</body>')
    res.write('</body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
