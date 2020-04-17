import express, { request, response } from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
})

app.listen(3333);

// Criar arquivo de configuração da conversão de arquivos .ts em .js => yarn tsc --init

// Transformar um arquivo .ts em .js => yarn tsc src/index.ts

// Trasnformar todos os arquivos .ts em .js (depois de gerar o arquivo de config) => yarn tsc
