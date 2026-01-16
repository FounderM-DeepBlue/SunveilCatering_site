# Sunveil Catering

A modern e-commerce website for **Sunveil Catering**, a Somali-owned artisan bakery based in Atlanta that sells pastries both direct-to-consumer (by the dozen with delivery) and through local retail partners.

## 🎨 Brand Identity

### Color System
- **Primary Colors:**
  - Forest Green: `#2d5f3b` (CTAs, headers, trust signals)
  - Deep Forest: `#1a3529` (navigation, footer, premium highlights)
  - Dark Moss: `#1a3524` (body text, borders)

- **Accent Colors:**
  - Amber: `#ba8919` (heritage storytelling, warmth, highlights)
  - Rust: `#6c4026` (call-out boxes, earthy texture elements)

- **Neutral:**
  - Off-white/cream backgrounds
  - White for cards and content areas

## 🛠️ Tech Stack

- **Frontend:**
  - React 19 with TypeScript
  - Vite for build tooling
  - Wouter for routing
  - Tailwind CSS 4 for styling
  - Radix UI components
  - Framer Motion for animations
  - TanStack Query for data fetching

- **Backend:**
  - Express.js
  - TypeScript
  - Drizzle ORM

- **Deployment:**
  - Azure Static Web Apps
  - GitHub Actions for CI/CD

## 📁 Project Structure

```
Sunveilcatering/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/        # Page components
│   │   ├── lib/          # Utilities and contexts
│   │   └── hooks/        # Custom React hooks
│   └── index.html
├── server/                # Express backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── static.ts         # Static file serving
├── shared/                # Shared types and schemas
├── script/                # Build scripts
└── .github/workflows/     # GitHub Actions workflows
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Sunveilcatering
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (if needed):
```bash
# Create .env file with required variables
# See .env.example for reference
```

### Development

Run the development server:

```bash
# Run both client and server
npm run dev

# Or run client only (Vite dev server)
npm run dev:client
```

The application will be available at `http://localhost:5000`

### Building for Production

```bash
npm run build
```

This will:
- Build the React client to the `build/` directory
- Bundle the Express server to `dist/index.cjs`

### Running Production Build

```bash
npm start
```

## 📄 Available Pages

- `/` - Homepage
- `/shop` - Product shop
- `/story` - Our Story page
- `/locations` - Store locator
- `/catering` - Catering information

## 🔧 Available Scripts

- `npm run dev` - Start development server (client + server)
- `npm run dev:client` - Start Vite dev server only
- `npm run build` - Build for production
- `npm start` - Run production build
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes

## 🌐 Deployment

The project is configured for deployment to **Azure Static Web Apps** via GitHub Actions.

### Deployment Configuration

- **Workflow:** `.github/workflows/azure-static-web-apps-victorious-wave-090adb810.yml`
- **Build Output:** `build/` directory
- **Configuration:** `staticwebapp.config.json`

### Custom Domain Setup

The project includes SPA routing configuration in `staticwebapp.config.json` to handle client-side routing on custom domains. Ensure:

1. Custom domain is properly configured in Azure Portal
2. DNS records are correctly set up
3. Domain is both **Validated** and **Assigned** in Azure Static Web Apps

### Deployment Token

The deployment token is stored as a GitHub secret:
- `AZURE_STATIC_WEB_APPS_API_TOKEN_VICTORIOUS_WAVE_090ADB810`

To update the token:
1. Go to Azure Portal → Static Web App → Overview → Manage deployment token
2. Copy the token
3. Update the secret in GitHub: Settings → Secrets and variables → Actions

## 🎯 Features

- **E-commerce Functionality:**
  - Product browsing and filtering
  - Shopping cart with drawer UI
  - Dozen box builder
  - Product showcase

- **Content Pages:**
  - Heritage storytelling
  - Store locator with maps
  - Catering information
  - Customer reviews

- **UI/UX:**
  - Responsive design
  - Smooth animations
  - Modern component library
  - Accessible components

## 📝 Configuration Files

- `staticwebapp.config.json` - Azure Static Web Apps configuration (routing, headers, etc.)
- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - UI component configuration

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

MIT

## 🙏 Acknowledgments

Built with modern web technologies and best practices for performance, accessibility, and user experience.
