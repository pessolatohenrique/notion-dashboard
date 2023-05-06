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

### Documentação por meio do Swagger

Para visualizar os endpoints criados, acessar o caminho

    /api-docs
    Exemplo: http://localhost:3000/api/docs/

### Execução de testes por meio do Jest

Criar arquivo .env.test e configurar as variáveis de ambiente, semelhantes ao arquivo ".env.test-example". Este arquivo será utilizado para geração de testes, baseados em TDD. O conteúdo da chave "JWT_KEY" deve ser uma String, que faz parte do processo de criação de um token

Execute os testes disponíveis, por meio do comando:

    npm run test

Caso queira executar os testes unitários, execute o seguinte comando:

    npm run test:unit

Caso queira executar os testes integrados, execute o seguinte comando:

    npm run test:integration

### Análise estática com ESLint

Para verificar os trechos de código que precisam ser revistos via análise estática, execute o comando:

    npm run lint

Para corrigir automaticamente os pontos da análise estática, execute o comando:

    npm run lint:fix

### Sonarqube - Análise estática e qualidade do código-fonte

É possível verificar sobre a qualidade do código utilizando o Sonarqube. Para isso, suba uma instância do Sonarqube via sistema operacional ou Docker, e execute o seguinte comando:

    docker run \
    --rm \
    -e SONAR_HOST_URL="<DOCKER-IP>:9000" \
    -e SONAR_SCANNER_OPTS="-Dsonar.projectKey=notion-dashboard \
    -Dsonar.typescript.lcov.reportPaths=coverage/lcov.info  \
    -Dsonar.exclusions=**/src/routes/**,**/src/redis/**,**/src/config/**,**/__tests__/**,**/__mocks__/**,**/src/middlewares/**,**/src/seeders/**,**/src/migrations/**,**/dist/**,**/index.js,**/jest.config.js" \
    -e SONAR_TOKEN="<GENERATED-TOKEN>" \
    -v "$(pwd):/usr/src" \
    sonarsource/sonar-scanner-cli