# Portfolio

Este é um projeto de portfolio pessoal desenvolvido com uma arquitetura moderna, separando o frontend e backend em diferentes módulos.

## Estrutura do Projeto

-   `frontend/`: Aplicação frontend
-   `backend/`: Servidor backend
-   `core/`: Módulo core com funcionalidades compartilhadas
-   `.github/`: Configurações de CI/CD e GitHub Actions

## Pré-requisitos

-   Node.js
-   npm ou yarn

## Instalação

1. Clone o repositório:

```bash
git clone [URL_DO_SEU_REPOSITORIO]
cd portfolio
```

2. Instale as dependências do frontend:

```bash
cd frontend
npm install
```

3. Instale as dependências do backend:

```bash
cd ../backend
npm install
```

## Desenvolvimento

Para rodar o projeto em ambiente de desenvolvimento:

1. Frontend:

```bash
cd frontend
npm run dev
```

2. Backend:

```bash
cd backend
npm run dev
```

## Deploy

O projeto está configurado para deploy usando Docker e Fly.io. Consulte o arquivo `Dockerfile` e `fly.toml` para mais detalhes.

## Contribuição

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
