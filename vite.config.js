import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vitePluginSitemap from 'vite-plugin-sitemap'  // ✅ default import

export default defineConfig({
  plugins: [
    tailwindcss(),
    vitePluginSitemap({
      hostname: 'https://samrat-movies.com.np', // your deployed domain
      dynamicRoutes: [
        '/',             
        '/portfolio',
        '/online',
        '/services/tranning',
        '/services/wedding',
        '/services/studio',
        '/rental/camera',
        '/rental/projector',
        '/rental/drone',
        '/rental/studio',
        '/service/web',
        '/service/webdev',
        '/service/social',
        '/service/graphic',
        '/contact',
      ],
    }),
  ],
})
