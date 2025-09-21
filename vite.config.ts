import path from 'path';
import { defineConfig } from 'vite';


export default defineConfig(() => {
    const isInsecureDemo = process.env.INSECURE_DEMO === '1';
    
    return {
      plugins: [],
      server: {
        host: '0.0.0.0',
        port: 5000,
        allowedHosts: true as true
      },
      preview: {
        host: '0.0.0.0',
        port: 5000,
        strictPort: true
      },
      define: {
        'process.env.INSECURE_DEMO': JSON.stringify(isInsecureDemo),
        // Only expose API key if explicitly enabled for insecure demo mode
        ...(isInsecureDemo && {
          'process.env.GOOGLE_API_KEY': JSON.stringify(process.env.GOOGLE_API_KEY)
        })
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
