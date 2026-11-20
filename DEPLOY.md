# Deploying rjlopez.me (free, GitHub Pages)

## 1. Push the code to GitHub
1. Create a new **public** repository on GitHub, for example `rjimpervious/rjlopez.me`. Leave it empty, without a README.
2. From this folder, run:
   ```bash
   git remote add origin https://github.com/rjimpervious/rjlopez.me.git
   git push -u origin main
   ```

## 2. Turn on GitHub Pages
1. In the repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.
2. The workflow in `.github/workflows/deploy.yml` builds and deploys the site on every push to `main`. You can watch it in the **Actions** tab.
3. On the same Pages screen, set **Custom domain** to `rjlopez.me` and save. The `public/CNAME` file keeps this setting across deploys.

## 3. Point the GoDaddy DNS records at GitHub
In GoDaddy, open **My Products → rjlopez.me → DNS**:

| Type  | Name | Value                   |
|-------|------|-------------------------|
| A     | @    | 185.199.108.153         |
| A     | @    | 185.199.109.153         |
| A     | @    | 185.199.110.153         |
| A     | @    | 185.199.111.153         |
| CNAME | www  | rjimpervious.github.io  |

Delete any existing `A` record for `@` that points elsewhere, such as GoDaddy's "Parked" record. Also delete any existing `www` CNAME.

## 4. Turn on HTTPS
DNS changes usually take minutes, but can take up to 24 hours. Once the Pages settings show the DNS check as successful, tick **Enforce HTTPS**.

> Optional: email for `contact@rjlopez.me` is a separate service and isn't covered by these steps. Keep any existing `MX` records at GoDaddy unchanged.
