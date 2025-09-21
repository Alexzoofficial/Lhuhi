# AI Studio Live Audio App

## Overview
This is a real-time AI audio conversation application using Google's Gemini AI with live audio capabilities. The app allows users to have voice conversations with AI and features 3D visualizations.

## Project Architecture
- **Frontend**: Vite + TypeScript + Lit Elements
- **3D Visuals**: Three.js for audio visualizations
- **AI Integration**: Google Gemini API for live audio conversation
- **Build System**: Vite with ESM imports

## Configuration
- **Port**: 5000 (configured for Replit proxy)
- **Host**: 0.0.0.0 with allowedHosts: true for Replit compatibility
- **API Key**: Requires GEMINI_API_KEY environment variable

## Setup Instructions
1. Get a Gemini API key from https://ai.google.dev/
2. Add GEMINI_API_KEY to Replit Secrets or .env.local file
3. Run `npm run dev` to start the development server

## Recent Changes
- **2025-09-21**: Initial Replit environment setup
  - Configured Vite for Replit proxy compatibility (0.0.0.0:5000, allowedHosts: true)
  - Set up frontend workflow on port 5000
  - Installed all dependencies successfully
  - Project ready for deployment

## User Preferences
- Uses ESM imports and modern TypeScript
- Follows existing project structure and conventions
- Maintains security by using environment variables for API keys