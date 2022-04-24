const http = require('http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  console.log("Server oluşturuldu.");

  if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write(`<h2>Hakkımızda sayfasına hoşgeldiniz</h2>`);
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write(`<h2>İletişim sayfasına hoşgeldiniz</h2>`);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write(`<h2>Merhaba. Sitemize hoşgeldiniz</h2>`);
  }

  res.end();
});

let port = 5000;
server.listen(port, () => {
  console.log(`Server ${port} numaralı portu dinlemeye başladı.`);
});