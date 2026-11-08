import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import type { IncomingMessage, ServerResponse } from 'node:http';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import { homeJsonLd } from './src/lib/seo';
import { handleContact } from './src/server/contactHandler';

function readRawBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk: Buffer | string) => {
      chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function silverbackStructurePlugin() {
  return {
    name: 'silverback-structure',
    transformIndexHtml(html: string) {
      const json = JSON.stringify(homeJsonLd()).replace(/</g, '\\u003c');
      const tag = `<script type="application/ld+json" id="silverback-jsonld">${json}</script>`;
      return html.replace('</head>', `    ${tag}\n  </head>`);
    },
    configureServer(server: { middlewares: { use: (handler: (req: IncomingMessage, res: ServerResponse, next: () => void) => void) => void } }) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0];
        if (url !== '/api/contact') {
          next();
          return;
        }

        void (async () => {
          const rawBody = req.method?.toUpperCase() === 'POST' ? await readRawBody(req) : null;
          const header = req.headers['content-type'];
          const result = handleContact({
            method: req.method || 'GET',
            contentType: typeof header === 'string' ? header : null,
            rawBody: rawBody || null,
          });
          res.statusCode = result.status;
          res.setHeader('content-type', 'application/json; charset=utf-8');
          res.setHeader('cache-control', 'no-store');
          if (result.status === 405) res.setHeader('Allow', 'POST');
          res.end(JSON.stringify(result.body));
        })().catch(next);
      });
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), silverbackStructurePlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
