# Deployment Guide

## GitHub Pages Setup

The repository includes an automated GitHub Pages deployment workflow. Follow these steps to enable it:

### 1. Enable GitHub Actions

1. Go to your repository on GitHub.
2. Click **Settings** tab.
3. Navigate to **Actions > General**.
4. Ensure "Allow all actions and reusable workflows" is selected (or restrict to verified creators).
5. Click **Save**.

### 2. Configure GitHub Pages Source

1. In **Settings**, scroll to **Pages** (left sidebar).
2. Under **Source**, select **Deploy from a branch**.
3. Set **Branch** to `main` and **folder** to `/ (root)`.
4. Click **Save**.

### 3. Automatic Deployment

The workflow in `.github/workflows/pages.yml` will:
- Automatically trigger on every push to the `main` branch.
- Upload the site to GitHub Pages.
- Deploy it to `https://your-username.github.io/vanilla-home-page/`.

**First deployment** may take 1–2 minutes. Check the **Actions** tab to monitor progress.

### 4. Verify Deployment

1. Go to **Settings > Pages** and look for the deployment URL.
2. Or visit `https://your-username.github.io/vanilla-home-page/` directly.

---

## Manual Local Testing

Before pushing, test the site locally:

```bash
cd vanilla-home-page
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Pages not deploying | Check **Actions** tab for workflow errors. |
| 404 errors on subpages | Ensure relative links in HTML use `../` for nested pages. ✓ Already done. |
| Favicon not showing | Clear browser cache and hard refresh (Cmd+Shift+R on macOS, Ctrl+Shift+R on Windows/Linux). |
| Styles not loading | Check browser DevTools Console for 404 errors; verify relative CSS paths. |

---

## Future Customization

To add new pages or modify content:
1. Edit HTML files in the repo.
2. Commit and push to `main`.
3. Changes will automatically deploy within 1–2 minutes.

No build step is required—this is a pure static site.
