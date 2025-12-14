# AlmoxApp - Frontend

Este repositório contém o código do frontend da aplicação AlmoxApp, desenvolvido em Next.js.

## Estrutura
- app/ → páginas e rotas (App Router)
- public/ → arquivos estáticos
- styles/ → estilos globais
- package.json → dependências e scripts
- tsconfig.json → configuração do TypeScript
- next.config.js → configuração do Next.js

## Pré-requisitos
- Node.js (versão LTS recomendada: 24.x via NVM)
- npm ou yarn

## Configuração
1. Instale as dependências:
```
npm install
```

2. Configure variáveis de ambiente em .env.local (se necessário):
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Rodando a aplicação
### Desenvolvimento
```
npm run dev
# disponível em http://localhost:3000
```

### Produção
```
   npm run build
   npm run start
```