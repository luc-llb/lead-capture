# Lead Capture Frontend

A modern, responsive React application built with TypeScript and Vite for capturing and managing leads with seamless API integration.

**[Português](#português) | [English](#english)**

---

## English

### 📋 Overview

This frontend application provides an intuitive interface for lead capture with real-time form validation, animated backgrounds, and robust API integration. Built using modern React practices with TypeScript for type safety and Vite for optimal development experience.

### 🚀 Features

- **Modern UI/UX**: Clean, responsive design with animated backgrounds
- **Type Safety**: Full TypeScript implementation for better development experience
- **Real-time Validation**: Client-side form validation with instant feedback
- **API Integration**: Seamless backend communication with error handling
- **Loading States**: User-friendly loading indicators and disabled states
- **Error Management**: Comprehensive error handling with user-friendly messages
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Component Architecture**: Modular, reusable components

### 🏗️ Project Structure

```
frontend/
├── public/                       # Static assets
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── card/
│   │   │   ├── Card.tsx         # Main card container
│   │   │   └── Card.css         # Card styling
│   │   ├── StylizedButton/
│   │   │   ├── StylizedButton.tsx
│   │   │   └── StylizedButton.css
│   │   ├── StylizedForms/
│   │   │   ├── StylizedForms.tsx  # Main form component
│   │   │   └── StylizedForms.css
│   │   └── StylizedInput/
│   │       ├── StylizedInput.tsx
│   │       └── StylizedInput.css
│   ├── config/
│   │   └── api.ts              # API configuration
│   ├── hooks/
│   │   └── useLeads.ts         # Custom React hooks
│   ├── models/
│   │   └── Lead.tsx            # TypeScript interfaces
│   ├── services/
│   │   ├── apiService.ts       # Base API service
│   │   ├── leadService.ts      # Lead-specific operations
│   │   └── index.ts            # Service exports
│   ├── App.tsx                 # Main application component
│   ├── App.css                 # Global app styles
│   ├── index.css               # Global styles with animations
│   └── main.tsx                # Application entry point
├── .env                        # Environment variables
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
└── README.md                   # This file
```

### 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/luc-llb/lead-capture.git
   cd lead-capture/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Setup environment variables:**
   Create a `.env` file with:
   ```env
   VITE_API_BASE_URL=http://localhost:3000
   VITE_API_TIMEOUT=10000
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

### 🚀 Usage

#### Development Mode
```bash
npm run dev
```
Starts the development server on `http://localhost:5173` with hot module replacement.

#### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist` directory.

#### Preview Production Build
```bash
npm run preview
```
Serves the production build for testing.

#### Linting
```bash
npm run lint
```
Runs ESLint to check code quality.

### 🎨 Components

#### Card Component
- **Purpose**: Main container for the lead capture form
- **Features**: Centered layout, responsive design, shadow effects
- **Props**: `children`, `title` (optional)

#### StylizedInput Component
- **Purpose**: Custom input fields with consistent styling
- **Features**: Focus states, validation styling, responsive design
- **Props**: Standard HTML input props + custom styling

#### StylizedButton Component
- **Purpose**: Consistent button styling across the application
- **Features**: Hover effects, disabled states, loading indicators
- **Props**: `children`, `disabled`, `onClick`

#### StylizedForms Component
- **Purpose**: Main form handling lead capture
- **Features**: Form validation, API integration, error handling
- **State Management**: Uses custom hooks for API communication

### 🔌 API Integration

The application includes a robust API service layer:

#### Lead Service
```typescript
// Example usage
import { useLeadSubmission } from './hooks/useLeads';

const { loading, error, success, submitLead } = useLeadSubmission();

const handleSubmit = async (leadData) => {
  await submitLead(leadData);
};
```

#### Error Handling
- **Validation Errors**: Real-time field validation
- **Network Errors**: Connection timeout and retry logic
- **Server Errors**: User-friendly error messages
- **Loading States**: Visual feedback during API calls

### 🎯 Features in Detail

#### Form Validation
- **Required Fields**: Name, email, phone validation
- **Email Format**: Real-time email format checking
- **Visual Feedback**: Error messages and success indicators

#### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: 768px (tablet), 1024px (desktop)
- **Flexible Layout**: Adapts to different screen sizes

#### Animated Background
- **Gradient Animation**: Dynamic color transitions
- **Performance Optimized**: GPU-accelerated animations
- **Cross-browser**: Works on all modern browsers

### 🧪 Testing

#### Manual Testing
1. Start the backend server (`npm run dev` in backend folder)
2. Start the frontend (`npm run dev` in frontend folder)
3. Test form submission with valid/invalid data
4. Verify error handling and success states

#### API Testing
The application includes built-in API connection testing through the `useApiConnection` hook.

### 🔧 Configuration

#### Environment Variables
- `VITE_API_BASE_URL`: Backend API URL (default: http://localhost:3000)
- `VITE_API_TIMEOUT`: Request timeout in milliseconds (default: 10000)

#### TypeScript Configuration
- Strict mode enabled for better type safety
- Path mapping for cleaner imports
- Build optimization for production

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

Esta aplicação frontend fornece uma interface intuitiva para captura de leads com validação de formulário em tempo real, fundos animados e integração robusta com API. Construída usando práticas modernas do React com TypeScript para segurança de tipos e Vite para experiência de desenvolvimento otimizada.

### 🚀 Funcionalidades

- **UI/UX Moderna**: Design limpo e responsivo com fundos animados
- **Segurança de Tipos**: Implementação completa em TypeScript
- **Validação em Tempo Real**: Validação de formulário no cliente com feedback instantâneo
- **Integração com API**: Comunicação perfeita com backend e tratamento de erros
- **Estados de Carregamento**: Indicadores amigáveis e estados desabilitados
- **Gerenciamento de Erros**: Tratamento abrangente com mensagens amigáveis
- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e celular
- **Arquitetura de Componentes**: Componentes modulares e reutilizáveis

### 🛠️ Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/luc-llb/lead-capture.git
   cd lead-capture/frontend
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` com:
   ```env
   VITE_API_BASE_URL=http://localhost:3000
   VITE_API_TIMEOUT=10000
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

### 🚀 Uso

#### Modo Desenvolvimento
```bash
npm run dev
```
Inicia o servidor de desenvolvimento em `http://localhost:5173` com hot module replacement.

#### Build de Produção
```bash
npm run build
```
Cria um build otimizado para produção na pasta `dist`.

#### Visualizar Build de Produção
```bash
npm run preview
```
Serve o build de produção para testes.

#### Linting
```bash
npm run lint
```
Executa o ESLint para verificar a qualidade do código.

### 🎨 Componentes

#### Componente Card
- **Propósito**: Container principal para o formulário de captura de leads
- **Funcionalidades**: Layout centralizado, design responsivo, efeitos de sombra
- **Props**: `children`, `title` (opcional)

#### Componente StylizedInput
- **Propósito**: Campos de input personalizados com estilo consistente
- **Funcionalidades**: Estados de foco, estilo de validação, design responsivo
- **Props**: Props padrão de input HTML + estilo personalizado

#### Componente StylizedButton
- **Propósito**: Estilo consistente de botão em toda a aplicação
- **Funcionalidades**: Efeitos hover, estados desabilitados, indicadores de carregamento
- **Props**: `children`, `disabled`, `onClick`

#### Componente StylizedForms
- **Propósito**: Formulário principal para captura de leads
- **Funcionalidades**: Validação de formulário, integração com API, tratamento de erros
- **Gerenciamento de Estado**: Usa hooks personalizados para comunicação com API

### 🔌 Integração com API

A aplicação inclui uma camada robusta de serviços de API:

#### Serviço de Leads
```typescript
// Exemplo de uso
import { useLeadSubmission } from './hooks/useLeads';

const { loading, error, success, submitLead } = useLeadSubmission();

const handleSubmit = async (leadData) => {
  await submitLead(leadData);
};
```

#### Tratamento de Erros
- **Erros de Validação**: Validação de campo em tempo real
- **Erros de Rede**: Timeout de conexão e lógica de retry
- **Erros de Servidor**: Mensagens de erro amigáveis
- **Estados de Carregamento**: Feedback visual durante chamadas de API

### 🎯 Funcionalidades Detalhadas

#### Validação de Formulário
- **Campos Obrigatórios**: Validação de nome, email e telefone
- **Formato de Email**: Verificação de formato de email em tempo real
- **Feedback Visual**: Mensagens de erro e indicadores de sucesso

#### Design Responsivo
- **Mobile First**: Otimizado para dispositivos móveis
- **Breakpoints**: 768px (tablet), 1024px (desktop)
- **Layout Flexível**: Adapta-se a diferentes tamanhos de tela

#### Fundo Animado
- **Animação de Gradiente**: Transições dinâmicas de cores
- **Otimizado para Performance**: Animações aceleradas por GPU
- **Cross-browser**: Funciona em todos os navegadores modernos

### 🧪 Testando

#### Teste Manual
1. Inicie o servidor backend (`npm run dev` na pasta backend)
2. Inicie o frontend (`npm run dev` na pasta frontend)
3. Teste o envio do formulário com dados válidos/inválidos
4. Verifique o tratamento de erros e estados de sucesso

#### Teste de API
A aplicação inclui teste de conexão de API integrado através do hook `useApiConnection`.

### 🔧 Configuração

#### Variáveis de Ambiente
- `VITE_API_BASE_URL`: URL da API backend (padrão: http://localhost:3000)
- `VITE_API_TIMEOUT`: Timeout de requisição em milissegundos (padrão: 10000)

#### Configuração do TypeScript
- Modo strict habilitado para melhor segurança de tipos
- Mapeamento de caminhos para imports mais limpos
- Otimização de build para produção

### 🤝 Contribuindo

1. Faça um fork do repositório
2. Crie uma branch de feature (`git checkout -b feature/funcionalidade-incrivel`)
3. Commit suas mudanças (`git commit -m 'Adiciona funcionalidade incrível'`)
4. Push para a branch (`git push origin feature/funcionalidade-incrivel`)
5. Abra um Pull Request

### 📄 Licença

Este projeto está licenciado sob a Licença MIT.
