import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Automatically ensure logo image exists in public/images
const srcLogo = 'C:/Users/91904/.gemini/antigravity-ide/brain/0278f503-b4b4-428e-9e52-e80956ecd651/media__1786347622796.jpg';
const dstLogo = path.resolve(__dirname, 'public/images/rubesh-logo.jpg');

try {
  if (fs.existsSync(srcLogo)) {
    const dir = path.dirname(dstLogo);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.copyFileSync(srcLogo, dstLogo);
    console.log('[Vite Config] Copied logo image to public/images/rubesh-logo.jpg');
  }
} catch (e) {
  console.error('[Vite Config] Copy error:', e);
}

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  }
});
