# Notion Dashboard

### Sobre

O objetivo deste projeto é fornecer gráficos e estatísticas a partir de quadros do Notion

### Pré-requisitos

É necessário que uma chave de integração com o Notion seja criada. Para mais informações, acesse a página
[Notion Developers](https://developers.notion.com/docs/getting-started);

Para utilizar os recursos em cache, é necessário uma configuração-base do [Redis](https://redis.io/)

### Tecnologias

- Node.js
- TypeScript
- Express
- Redis

### Instalação do projeto (sem o docker)

Acesse a pasta do projeto e rode o comando para instalar as dependências npm:

    npm install

Criar arquivo .env e configurar as variáveis de ambiente, semelhantes ao arquivo ".env-example".

E, por fim, rode o projeto:

```
  npm start
```
