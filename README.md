# Unleash Feature Flag POC

This repository contains a Proof of Concept implementation of Unleash feature flags with:

- **Backend**: REST API with Unleash client integration
- **Frontend**: Angular application with Unleash SDK

## Architecture
┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│ Angular │────▶│ Backend │────▶│ Unleash │
│ Frontend │ │ API │ │ Server │
└─────────────┘ └─────────────┘ └─────────────┘

text

## Prerequisites
- Node.js (v16+)
- npm or yarn
- Angular CLI (v15+)
- Docker (optional)

## Quick Start

### Using Docker (Recommended)
`ash
docker-compose up -d
Manual Setup
Backend
bash
cd backend
npm install
cp .env.example .env
npm start
Frontend
bash
cd frontend
npm install
cp .env.example .env
ng serve
Access Points
Frontend: http://localhost:4200

Backend API: http://localhost:3000

Unleash UI: http://localhost:4242 (if using Docker)

Features Demonstrated
✅ Feature flag evaluation

✅ Dynamic UI updates

✅ A/B testing setup

✅ Kill switch implementation

✅ Gradual rollout strategies

Environment Variables
Backend (.env)
text
UNLEASH_URL=http://localhost:4242
UNLEASH_API_KEY=your-api-key
PORT=3000
Frontend (.env)
text
UNLEASH_URL=http://localhost:4242
UNLEASH_CLIENT_KEY=your-client-key
API_URL=http://localhost:3000
Testing Feature Flags
Access Unleash admin UI

Create/toggle flags

See changes reflected in real-time

Project Structure
text
├── backend/          # Node.js/Express backend
│   ├── src/
│   │   ├── config/   # Unleash configuration
│   │   ├── routes/   # API endpoints
│   │   └── index.js
│   └── package.json
└── frontend/         # Angular application
    ├── src/
    │   ├── app/
    │   │   ├── services/  # Unleash service
    │   │   ├── components/
    │   │   └── app.module.ts
    │   └── environments/
    └── angular.json
License
MIT
