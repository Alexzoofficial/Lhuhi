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

## 🔒 SECURITY FEATURES
This application is **secure by default** and requires a backend server to safely handle the Gemini API key. 

## Setup Instructions

**RECOMMENDED (Secure):** Implement a backend proxy server that:
1. Holds the GEMINI_API_KEY securely on the server side
2. Proxies requests to Google's Gemini Live API  
3. Serves the frontend from the same domain

**INSECURE DEMO MODE (Testing Only):**
⚠️ **WARNING**: This mode exposes your API key to all users!
1. Get a Gemini API key from https://ai.google.dev/
2. Add these to Replit Secrets:
   - `GEMINI_API_KEY=your_api_key_here`
   - `INSECURE_DEMO=1`
3. **IMPORTANT**: Keep your Repl private when using demo mode
4. Run `npm run dev` to start the development server

By default, the app will show an error message requiring a backend. Only when `INSECURE_DEMO=1` is set will it expose the API key for testing.

## Recent Changes
- **2025-09-21**: Initial Replit environment setup
  - Configured Vite for Replit proxy compatibility (0.0.0.0:5000, allowedHosts: true)
  - Set up frontend workflow on port 5000
  - Installed all dependencies successfully
  - Implemented secure-by-default configuration with opt-in insecure demo mode
  - Added runtime security guards to prevent accidental API key exposure

## User Preferences
- Uses ESM imports and modern TypeScript
- Follows existing project structure and conventions
- Prioritizes security with explicit opt-in for potentially unsafe configurations