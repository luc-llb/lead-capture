# Lead Capture API - Backend

A robust REST API built with Express.js and TypeScript for lead management and CRM integration.

**[Português](#português) | [English](#english)**

---

## English

### 📋 Overview

This backend service handles lead capture and management, featuring integration with HubSpot CRM. Built with modern TypeScript practices, comprehensive error handling, and clean architecture principles.

### 🚀 Features

- **Lead Management**: Create and manage leads with validation
- **CRM Integration**: Seamless HubSpot API integration
- **Error Handling**: Comprehensive exception system with custom error types
- **Type Safety**: Full TypeScript implementation
- **Clean Architecture**: Separation of concerns with controllers, services, and models
- **Validation**: Input validation for email format and required fields

### 🏗️ Project Structure

```
backend/
├── src/
│   ├── app.ts                      # Application entry point
│   ├── controllers/
│   │   └── LeadController.ts       # Lead management endpoints
│   ├── exceptions/
│   │   ├── BaseException.ts        # Base exception class
│   │   ├── BadRequestException.ts  # 400 error handling
│   │   ├── ConflictException.ts    # 409 error handling
│   │   └── index.ts               # Exception exports
│   ├── interfaces/
│   │   └── ILeadService.ts        # Service interface definition
│   ├── middlewares/
│   │   ├── errorHandler.ts        # Global error handling
│   │   └── index.ts              # Middleware exports
│   ├── models/
│   │   └── Lead.ts               # Lead data model
│   ├── routes/
│   │   └── index.ts              # Route definitions
│   └── services/
│       └── LeadService.ts        # Business logic and CRM integration
├── dist/                         # Compiled JavaScript files
├── .env                         # Environment variables
├── package.json                 # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

### 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone <REPOSITORY_URL>
   cd lead-capture/backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup environment variables:**
   Create a `.env` file with:
   ```env
   CRM_API_URL=your_hubspot_api_url
   CRM_END_POINT=your_hubspot_endpoint
   CRM_API_KEY=your_hubspot_api_key
   PORT=3000
   ```

### 🚀 Usage

#### Development Mode
```bash
npm run dev
```

#### Production Mode
```bash
# Build the project
npm run build

# Start the server
npm start
```

#### Watch Mode (Auto-compile)
```bash
npm run watch
```

The API will be available at `http://localhost:3000`

### 📡 API Endpoints

#### Create Lead
- **Endpoint**: `POST /leads`
- **Content-Type**: `application/json`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "11999999999"
}
```

**Success Response (201):**
```json
{
  "status": "success",
  "data": { ... },
  "message": "Lead created successfully"
}
```

**Error Response (400/409/500):**
```json
{
  "status": "error",
  "message": "Error description",
  "statusCode": 400,
  "timestamp": "2025-09-02T19:23:49.165Z",
  "path": "/leads"
}
```

### 🔧 Error Handling

The API implements comprehensive error handling:

- **400 Bad Request**: Invalid data, missing fields, format errors
- **409 Conflict**: Resource already exists (duplicate lead)
- **500 Internal Server Error**: Unexpected server errors

### 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### 📄 License

This project is licensed under the MIT License.

---

## Português

### 📋 Visão Geral

Este serviço backend gerencia captura e gestão de leads, com integração ao CRM HubSpot. Construído com práticas modernas de TypeScript, tratamento abrangente de erros e princípios de arquitetura limpa.

### 🚀 Funcionalidades

- **Gestão de Leads**: Criação e gerenciamento de leads com validação
- **Integração CRM**: Integração perfeita com a API do HubSpot
- **Tratamento de Erros**: Sistema abrangente de exceções com tipos de erro personalizados
- **Segurança de Tipos**: Implementação completa em TypeScript
- **Arquitetura Limpa**: Separação de responsabilidades com controllers, services e models
- **Validação**: Validação de entrada para formato de email e campos obrigatórios

### 🛠️ Instalação

1. **Clone o repositório:**
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd lead-capture/backend
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` com:
   ```env
   CRM_API_URL=sua_url_api_hubspot
   CRM_END_POINT=seu_endpoint_hubspot
   CRM_API_KEY=sua_chave_api_hubspot
   PORT=3000
   ```

### 🚀 Uso

#### Modo Desenvolvimento
```bash
npm run dev
```

#### Modo Produção
```bash
# Compilar o projeto
npm run build

# Iniciar o servidor
npm start
```

#### Modo Watch (Auto-compilação)
```bash
npm run watch
```

A API estará disponível em `http://localhost:3000`

### 📡 Endpoints da API

#### Criar Lead
- **Endpoint**: `POST /leads`
- **Content-Type**: `application/json`

**Corpo da Requisição:**
```json
{
  "name": "João Silva",
  "email": "joao@exemplo.com",
  "phone": "11999999999"
}
```

**Resposta de Sucesso (201):**
```json
{
  "status": "success",
  "data": { ... },
  "message": "Lead criado com sucesso"
}
```

**Resposta de Erro (400/409/500):**
```json
{
  "status": "error",
  "message": "Descrição do erro",
  "statusCode": 400,
  "timestamp": "2025-09-02T19:23:49.165Z",
  "path": "/leads"
}
```

### 🔧 Tratamento de Erros

A API implementa tratamento abrangente de erros:

- **400 Bad Request**: Dados inválidos, campos faltando, erros de formato
- **409 Conflict**: Recurso já existe (lead duplicado)
- **500 Internal Server Error**: Erros inesperados do servidor

### 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie uma branch de feature (`git checkout -b feature/funcionalidade-incrivel`)
3. Commit suas mudanças (`git commit -m 'Adiciona funcionalidade incrível'`)
4. Push para a branch (`git push origin feature/funcionalidade-incrivel`)
5. Abra um Pull Request

### 📄 Licença

Este projeto está licenciado sob a Licença MIT.