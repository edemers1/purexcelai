# PureXcel AI — Website

Multi-page React (Vite) site focused on AI-driven growth for healthcare software & service organizations.

## Quick Start
```bash
npm i
npm run dev
```
Build:
```bash
npm run build
npm run preview
```

## Pages
- Home, Solutions, Industries, Pricing, Resources (ROI calculator), About, Contact

## Logo
Place your logo at `public/logo.png`. A default is included.

## Web3Forms (Contact Form)
1. Sign up at https://web3forms.com and copy your **Access Key**.
2. Open `src/App.jsx`, find the Contact form, and replace:
   ```html
   <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
   ```
3. Update the `redirect` hidden input to your domain.
4. Deploy and test the form.

## Deploy (Vercel)
1. Push this folder to GitHub.
2. Import the repo into Vercel.
3. Add your custom domain (e.g., purexcel.ai).

## Notes
- Router uses `HashRouter` to work on static hosting without server rewrites.
- No external CSS frameworks required.
