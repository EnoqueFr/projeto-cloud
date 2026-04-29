const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (req.url === '/') {
        res.end('<h1>Página Inicial</h1><p>Projeto de Nuvem - Rota 1</p><a href="/servicos">Serviços</a>');
    } else if (req.url === '/servicos') {
        res.end('<h1>Nossos Serviços</h1><p>Configuração de instâncias e deploys - Rota 2</p><a href="/sobre">Sobre</a>');
    } else if (req.url === '/sobre') {
        res.end('<h1>Sobre Mim</h1><p>Estudante de Desenvolvimento de Software - Rota 3</p><a href="/">Voltar</a>');
    } else {
        res.statusCode = 404;
        res.end('<h1>404</h1><p>Página não encontrada</p>');
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});