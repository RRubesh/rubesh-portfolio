import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    fs: {
      allow: ['.', 'C:/Users/91904/.gemini/antigravity-ide/brain/d27fdabb-705e-4342-9e4d-2b4b4f797c49']
    }
  }
});
