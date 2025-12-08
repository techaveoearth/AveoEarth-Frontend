# AveoEarth E-commerce Platform

## Overview
This is an e-commerce platform for sustainable and eco-friendly products built with Next.js 15 and React 19.

## Technology Stack
- **Framework**: Next.js 15.5.0 with App Router
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS v4
- **Icons**: Heroicons & Lucide React
- **Runtime**: Node.js 20.x

## Project Structure
- `src/app/` - Next.js pages and routing
- `src/components/` - Reusable React components
- `src/hooks/` - Custom React hooks for auth, cart, and orders
- `src/services/` - API service layer
- `src/lib/` - Utility libraries

## Development

### Running Locally
The application runs on port 5000 with the command:
```bash
npm run dev
```

The workflow "Start application" is configured to automatically start the dev server.

### Environment Variables
Environment variables are stored in `.env.local`. Key variables include:
- `NEXT_PUBLIC_APP_URL` - The application URL (set to http://localhost:5000 for Replit)
- `MONGODB_URI` - MongoDB connection string (needs to be configured)
- `ADMIN_ACCESS_KEY` - Admin dashboard access key

### Build and Production
```bash
npm run build  # Build for production
npm start      # Start production server
```

## Replit Configuration

### Frontend Setup
- The dev server is configured to run on `0.0.0.0:5000` to work with Replit's proxy
- Cross-origin requests are allowed via `allowedDevOrigins: ['*']` in next.config.mjs
- The workflow automatically restarts when changes are made

### Static Assets
The following static assets were imported from the GitHub repository:
- Images: logo.png, hero.png, hero1.png, hotdeals.png, beauty.jpg, fitness.jpg, home.jpg, petcare.jpg, placeholder-product.jpg, spoons.png, category1.png
- SVG icons: bookmark.svg, cart.svg, file.svg, globe.svg, next.svg, profile.svg, vercel.svg, window.svg
- Video: AveoBuddy.mp4
- Fonts: Poppins (Regular, Medium, SemiBold, Bold), ReemKufi-Regular

Placeholder images are used for some community page assets that weren't in the repository.

## Key Features
- Multi-role support (Buyer, Vendor, Admin)
- Shopping cart with persistent state
- Product catalog with sustainability metrics
- Vendor dashboard for product and order management
- Admin dashboard for platform management
- AI chatbot integration
- Address management
- Order tracking

## Database
The application is designed to work with MongoDB. The connection string needs to be configured in `.env.local`.

## Recent Changes (Dec 2024)
- Configured for Replit environment
- Updated dev server to run on port 5000
- Removed Turbopack due to symlink issues in Replit environment
- Added allowedDevOrigins configuration for cross-origin requests
- Set up deployment configuration for Replit
