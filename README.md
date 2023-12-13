# Template de Projeto Back-end
Este é um template para projetos back-end utilizando `TypeScript`, `ts-node` e `ts-node-dev`, `ESLint`, `mysql2` e `Express`. Ele visa fornecer uma estrutura inicial para desenvolvedores que desejam iniciar um projeto back-end com essas tecnologias.

## Pré-requisitos
Certifique-se de ter o Node.js e o Docker instalados em sua máquina antes de prosseguir com o uso.

## Uso
1. Execute o servidor em modo de desenvolvimento:
```bash
docker exec -it api sh
npm run dev
```

2. Para compilar o código TypeScript:
```bash
npm run build
```

3. Para iniciar o servidor após a compilação:
```bash
npm start
```

## Estrutura do Projeto
```lua
template-backend/
│
├── envs/
│   ├── api.env/
│   └── database.env/
│
├── src/
│   ├── config/
│   │   └── db.ts
│   ├── controllers/
│   │   └── ...
│   ├── services/
│   │   └── ...
│   ├── models/
│   │   └── ...
│   ├── types/
│   │   └── ...
│   ├── routes/
│   │   └── ...
│   ├── app.ts
│   └── server.ts
│
├── tests/
│
├── .eslintrc.json
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```
