## Local Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Updates appear automatically as you edit files inside `src/app`.

## Deploying to Netlify

This project ships with a `netlify.toml` that configures the build for Next.js:

- Build command: `npm run build`
- Publish directory: `.next`
- Node version: `20`
- Netlify plugin: `@netlify/plugin-nextjs`

### Option 1: Netlify Git integration
1. Push your repository to GitHub.
2. In the Netlify dashboard, select **Add new site → Import an existing project**.
3. Connect the Git repository and keep the build settings that Netlify detects from `netlify.toml`.
4. Deploy — subsequent pushes to the configured branch will trigger new builds.

### Option 2: Netlify CLI
1. Install the CLI: `npm install -g netlify-cli`.
2. Authenticate: `netlify login`.
3. Initialize the site (one-time): `netlify init`.
4. Deploy a production build: `netlify deploy --prod`.

Refer to [docs.netlify.com](https://docs.netlify.com/integrations/frameworks/next-js/overview/) for more details on Next.js support.
