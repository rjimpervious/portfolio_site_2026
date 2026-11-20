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

## 3. Point the DNS records at GitHub (in Cloudflare)
The domain is registered at GoDaddy, but its nameservers point to **Cloudflare**, so the DNS records are managed in Cloudflare. In the Cloudflare dashboard, open **rjlopez.me → DNS → Records** and add these records:

| Type  | Name | Content                 | Proxy status       |
|-------|------|-------------------------|--------------------|
| A     | @    | 185.199.108.153         | **DNS only** (grey cloud) |
| A     | @    | 185.199.109.153         | **DNS only**       |
| A     | @    | 185.199.110.153         | **DNS only**       |
| A     | @    | 185.199.111.153         | **DNS only**       |
| CNAME | www  | rjimpervious.github.io  | **DNS only**       |

- Set the proxy status to **DNS only**, not Proxied (orange cloud). GitHub has to see its own IP addresses both to verify the domain and to issue the HTTPS certificate.
- Delete any other `A`, `AAAA` or `CNAME` record for `@` or `www` that points somewhere else.
- **Don't touch** the `MX` and `TXT` records, which handle email such as `contact@rjlopez.me`.
- Optional, for IPv6: add `AAAA` records for `@` pointing to `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153` and `2606:50c0:8003::153`, also set to DNS only.

## 4. Turn on HTTPS
DNS changes usually take minutes, but can take up to 24 hours. Once the Pages settings show the DNS check as successful, tick **Enforce HTTPS**.

> Optional: email for `contact@rjlopez.me` is a separate service and isn't covered by these steps. Keep any existing `MX` records at GoDaddy unchanged.
