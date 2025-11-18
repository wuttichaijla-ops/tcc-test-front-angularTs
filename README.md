# tcc-test-front-angularTs

A modern frontend application built with Angular 17 and TypeScript, featuring a beautiful UI and best practices.

## Features

- ✅ Angular 17 with TypeScript
- ✅ Component-based architecture
- ✅ Routing with Angular Router
- ✅ Forms (Template-driven)
- ✅ Services with Dependency Injection
- ✅ HTTP Client integration
- ✅ Modern, responsive UI design
- ✅ Clean code structure

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/
│   │   │   ├── home.component.ts
│   │   │   ├── home.component.html
│   │   │   └── home.component.css
│   │   └── about/
│   │       ├── about.component.ts
│   │       ├── about.component.html
│   │       └── about.component.css
│   ├── services/
│   │   └── data.service.ts
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   ├── app.module.ts
│   └── app-routing.module.ts
├── index.html
├── main.ts
└── styles.css
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:4200
```

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build and watch for changes
- `npm test` - Run unit tests

## Technologies Used

- **Angular 17** - Frontend framework
- **TypeScript** - Programming language
- **RxJS** - Reactive programming
- **Angular Router** - Client-side routing
- **Angular Forms** - Form handling
- **Angular HTTP Client** - API communication

## Components

### Home Component
- Displays a list of items
- Allows adding new items
- Allows deleting items
- Demonstrates form handling and data management

### About Component
- Shows application features
- Displays technology stack information

## Services

### DataService
- Manages item data
- Provides methods for CRUD operations
- Simulates API calls with delays

## Development

This project uses Angular's standard development workflow. The application is configured with:
- TypeScript strict mode
- Modern ES2022 target
- Source maps for debugging
- Hot module replacement for development

## License

MIT
