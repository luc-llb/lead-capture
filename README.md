# Lead Capture Platform

A modern, full-stack web application for lead capture and management with seamless [HubSpot CRM](https://app.hubspot.com) integration. Built with React + TypeScript frontend and Express.js + TypeScript backend.

**[Português](#português) | [English](#english)**

---

## English

### 📋 Overview

This platform provides a complete solution for lead capture and management, featuring a responsive React frontend and a robust Express.js backend with HubSpot CRM integration. The application offers real-time form validation, comprehensive error handling, and a modern user experience.

### 🏗️ Architecture

```
lead-capture/
├── frontend/           # React + TypeScript + Vite
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── services/   # API integration layer
│   │   ├── hooks/      # Custom React hooks
│   │   └── models/     # TypeScript interfaces
│   └── ...
├── backend/            # Express.js + TypeScript
│   ├── src/
│   │   ├── controllers/# API endpoints
│   │   ├── services/   # Business logic & CRM integration
│   │   ├── models/     # Data models
│   │   └── exceptions/ # Custom error handling
│   └── ...
└── README.md          # This file
```

### 🚀 Key Features

- **Modern Frontend**: React with TypeScript, Vite and CSS
- **Robust Backend**: Express.js with TypeScript and clean architecture
- **CRM Integration**: Native HubSpot API integration for lead management
- **Type Safety**: Full TypeScript implementation across the entire stack
- **Error Handling**: Comprehensive exception system with user-friendly messages
- **Responsive Design**: Mobile-first approach with animated backgrounds
- **Real-time Validation**: Client-side and server-side validation
- **CORS Support**: Configured for cross-origin requests during development

### 🛠️ Technology Stack

#### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **CSS** for styling
- **Custom Hooks** for state management
- **Responsive Design** with animated backgrounds

#### Backend
- **Node.js v22.14** 
- **Express.js** with TypeScript
- **HubSpot CRM** integration
- **Custom Exception Handling**
- **CORS** configuration

#### CRM Platform
- **HubSpot** for lead management and customer relationship management

### 🚀 Quick Start

#### Prerequisites
- Node.js v22.14 or higher
- npm or yarn
- HubSpot API credentials

#### 1. Clone the Repository
```bash
git clone https://github.com/luc-llb/lead-capture.git
cd lead-capture
```

#### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file with your HubSpot credentials
echo "CRM_API_URL=your_hubspot_api_url" > .env
echo "CRM_END_POINT=your_hubspot_endpoint" >> .env
echo "CRM_API_KEY=your_hubspot_api_key" >> .env
echo "PORT=3000" >> .env

npm run dev
```

#### 3. Frontend Setup
```bash
cd ../frontend
npm install

# Create .env file
echo "VITE_API_BASE_URL=http://localhost:3000" > .env
echo "VITE_API_TIMEOUT=10000" >> .env

npm run dev
```

#### 4. Access the Application
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000`

### 📡 API Documentation

The backend provides RESTful endpoints for lead management:

- `POST /leads` - Create a new lead
- Comprehensive error responses (400, 409, 500)
- HubSpot CRM synchronization

For detailed API documentation, see [Backend README](./backend/README.md).

### 🎨 Frontend Components

The frontend includes reusable, styled components:

- **Card Component**: Main container with responsive design
- **StylizedInput**: Custom input fields with validation styling
- **StylizedButton**: Consistent button styling with loading states
- **StylizedForms**: Complete form with API integration

For detailed component documentation, see [Frontend README](./frontend/README.md).

### 🔧 Development

#### Running in Development Mode
```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend  
cd frontend && npm run dev
```

#### Building for Production
```bash
# Backend
cd backend && npm run build

# Frontend
cd frontend && npm run build
```

### 🧪 Testing

1. Start both backend and frontend servers
2. Navigate to `http://localhost:5173`
3. Test lead form submission with various inputs
4. Verify HubSpot CRM integration
5. Check error handling scenarios

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

Esta plataforma fornece uma solução completa para captura e gestão de leads, com frontend React responsivo e backend Express.js robusto com integração ao [CRM HubSpot](https://app.hubspot.com). A aplicação oferece validação de formulário em tempo real, tratamento abrangente de erros e experiência de usuário moderna.

### 🏗️ Arquitetura

```
lead-capture/
├── frontend/           # React + TypeScript + Vite
│   ├── src/
│   │   ├── components/ # Componentes UI reutilizáveis
│   │   ├── services/   # Camada de integração API
│   │   ├── hooks/      # Hooks React customizados
│   │   └── models/     # Interfaces TypeScript
│   └── ...
├── backend/            # Express.js + TypeScript
│   ├── src/
│   │   ├── controllers/# Endpoints da API
│   │   ├── services/   # Lógica de negócio & integração CRM
│   │   ├── models/     # Modelos de dados
│   │   └── exceptions/ # Tratamento de erros customizado
│   └── ...
└── README.md          # Este arquivo
```

### 🚀 Funcionalidades Principais

- **Frontend Moderno**: React com TypeScript, Vite e CSS
- **Backend Robusto**: Express.js com TypeScript e arquitetura limpa
- **Integração CRM**: Integração nativa com API do HubSpot para gestão de leads
- **Segurança de Tipos**: Implementação completa em TypeScript em toda a stack
- **Tratamento de Erros**: Sistema abrangente de exceções com mensagens amigáveis
- **Design Responsivo**: Abordagem mobile-first com fundos animados
- **Validação em Tempo Real**: Validação client-side e server-side
- **Suporte CORS**: Configurado para requisições cross-origin durante desenvolvimento

### 🛠️ Stack Tecnológica

#### Frontend
- **React 18** com TypeScript
- **Vite** para desenvolvimento e build rápidos
- **CSS** para estilização
- **Hooks Customizados** para gerenciamento de estado
- **Design Responsivo** com fundos animados

#### Backend
- **Node.js v22.14**
- **Express.js** com TypeScript
- **HubSpot CRM** integração
- **Tratamento de Exceções Customizado**
- **Configuração CORS**

#### Plataforma CRM
- **HubSpot** para gestão de leads e relacionamento com clientes

### 🚀 Início Rápido

#### Pré-requisitos
- Node.js v22.14 ou superior
- npm ou yarn
- Credenciais da API do HubSpot

#### 1. Clone o Repositório
```bash
git clone https://github.com/luc-llb/lead-capture.git
cd lead-capture
```

#### 2. Configuração do Backend
```bash
cd backend
npm install

# Crie o arquivo .env com suas credenciais do HubSpot
echo "CRM_API_URL=sua_url_api_hubspot" > .env
echo "CRM_END_POINT=seu_endpoint_hubspot" >> .env
echo "CRM_API_KEY=sua_chave_api_hubspot" >> .env
echo "PORT=3000" >> .env

npm run dev
```

#### 3. Configuração do Frontend
```bash
cd ../frontend
npm install

# Crie o arquivo .env
echo "VITE_API_BASE_URL=http://localhost:3000" > .env
echo "VITE_API_TIMEOUT=10000" >> .env

npm run dev
```

#### 4. Acesse a Aplicação
- Frontend: `http://localhost:5173`
- API Backend: `http://localhost:3000`

### 📡 Documentação da API

O backend fornece endpoints RESTful para gestão de leads:

- `POST /leads` - Criar um novo lead
- Respostas de erro abrangentes (400, 409, 500)
- Sincronização com CRM HubSpot

Para documentação detalhada da API, veja [README do Backend](./backend/README.md).

### 🎨 Componentes do Frontend

O frontend inclui componentes estilizados e reutilizáveis:

- **Componente Card**: Container principal com design responsivo
- **StylizedInput**: Campos de input customizados com estilo de validação
- **StylizedButton**: Estilo consistente de botão com estados de carregamento
- **StylizedForms**: Formulário completo com integração API

Para documentação detalhada dos componentes, veja [README do Frontend](./frontend/README.md).

### 🔧 Desenvolvimento

#### Executando em Modo Desenvolvimento
```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend  
cd frontend && npm run dev
```

#### Build para Produção
```bash
# Backend
cd backend && npm run build

# Frontend
cd frontend && npm run build
```

### 🧪 Testando

1. Inicie os servidores backend e frontend
2. Navegue para `http://localhost:5173`
3. Teste o envio do formulário de leads com várias entradas
4. Verifique a integração com o CRM HubSpot
5. Teste cenários de tratamento de erros

### 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie uma branch de feature (`git checkout -b feature/funcionalidade-incrivel`)
3. Commit suas mudanças (`git commit -m 'Adiciona funcionalidade incrível'`)
4. Push para a branch (`git push origin feature/funcionalidade-incrivel`)
5. Abra um Pull Request

### 📄 Licença

Este projeto está licenciado sob a Licença MIT.
