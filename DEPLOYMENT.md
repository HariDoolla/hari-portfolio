# Deploy to haridoolla.com

This guide covers deploying your portfolio to **Vercel** (recommended) and connecting your custom domain **haridoolla.com**.

## Step 1 — Add your profile photo

Save the photo you shared as:

```
public/profile.jpg
```

The site will show your photo in the Hero and About sections. Until you add it, initials "DH" appear as a fallback.

## Step 2 — Push to GitHub

```bash
cd C:\Users\harid\portfolio
git add .
git commit -m "Portfolio site for haridoolla.com"
```

Create a new repository on GitHub (e.g. `haridoolla-portfolio`), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/haridoolla-portfolio.git
git branch -M main
git push -u origin main
```

## Step 3 — Deploy on Vercel (Free)

1. Go to [vercel.com](https://vercel.com) and sign up with GitHub.
2. Click **Add New → Project**.
3. Import your `haridoolla-portfolio` repository.
4. Vercel auto-detects Vite — keep defaults:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. You'll get a URL like `haridoolla-portfolio.vercel.app`.

### Or deploy via CLI

```bash
npm i -g vercel
cd C:\Users\harid\portfolio
vercel login
vercel --prod
```

## Step 4 — Connect haridoolla.com

### If you already own haridoolla.com

1. In Vercel → your project → **Settings → Domains**.
2. Add `haridoolla.com` and `www.haridoolla.com`.
3. Vercel shows DNS records. At your domain registrar (GoDaddy, Namecheap, etc.):

| Type  | Name | Value              |
|-------|------|--------------------|
| A     | @    | `76.76.21.21`      |
| CNAME | www  | `cname.vercel-dns.com` |

4. Wait 5–60 minutes for DNS propagation.
5. Vercel will issue a free SSL certificate automatically.

### If you don't own the domain yet

1. Buy **haridoolla.com** from [Namecheap](https://namecheap.com), [GoDaddy](https://godaddy.com), or [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/).
2. Follow Step 4 above.

## Alternative: Netlify (Free)

1. Go to [netlify.com](https://netlify.com) → **Add new site → Import from Git**.
2. Build command: `npm run build`, publish directory: `dist`.
3. Add custom domain under **Domain settings**.

## Alternative: GitHub Pages (Free)

Add to `vite.config.ts`:

```ts
export default defineConfig({
  base: '/haridoolla-portfolio/', // your repo name
  // ...
})
```

Then use the `peaceiris/actions-gh-pages` GitHub Action. Custom domains require a `CNAME` file — Vercel is simpler for haridoolla.com.

## Post-deploy checklist

- [ ] Profile photo at `public/profile.jpg`
- [ ] Resume at `public/resume.pdf`
- [ ] Test dark/light theme toggle
- [ ] Test project modals on mobile
- [ ] Verify https://haridoolla.com loads with SSL
