# Weight Notes (PWA)

A tiny app for tracking the weight you lift on each exercise and how it climbs. No account, no backend, no cost. Everything is saved on the device, and the app works offline after the first visit.

## What's in this folder

```
index.html              the whole app (HTML, CSS and JavaScript)
manifest.webmanifest    name, icons and standalone display mode
sw.js                   service worker (offline support)
icons/                  app icons (192, 512, maskable 512, Apple touch icon 180)
.nojekyll               tells GitHub Pages to serve the files as they are
```

All paths are relative, so the app works from a GitHub Pages project URL like `https://YOURNAME.github.io/weight-notes/`.

## Deploy to GitHub Pages

You need a free GitHub account. Pages is free for public repositories.

### Option A: in the browser (no command line)

1. Go to github.com, click **+** (top right), then **New repository**.
2. Name it `weight-notes`, set it to **Public**, and click **Create repository**.
3. On the empty repository page, click **uploading an existing file**.
4. Drag in everything from this folder: `index.html`, `manifest.webmanifest`, `sw.js`, `.nojekyll` and the whole `icons` folder. (If your file manager hides `.nojekyll`, skip it. The app works without it.)
5. Click **Commit changes**.
6. Open the repository's **Settings**, then **Pages** in the left sidebar.
7. Under **Build and deployment**, set **Source** to **Deploy from a branch**. Choose branch **main** and folder **/ (root)**, then click **Save**.
8. Wait a minute or two. Refresh the Pages settings page and it will show your address:
   `https://YOURNAME.github.io/weight-notes/`

### Option B: with git

From inside this folder:

```bash
git init
git add .
git commit -m "Weight Notes"
git branch -M main
git remote add origin https://github.com/YOURNAME/weight-notes.git
git push -u origin main
```

Then do steps 6 to 8 above.

## Install on iPhone

1. Open your Pages address in **Safari** (it must be Safari for installing).
2. Tap the **Share** button, then **Add to Home Screen**, then **Add**.
3. Open the app from the new home screen icon. It opens full screen with no browser bars.

**Install before you enter data.** On iPhone, the home screen app and Safari keep separate storage. If you add exercises in a Safari tab first, they won't appear in the installed app. If that happens, open Settings in the Safari tab, tap Export backup, then open the installed app and use Import backup.

Open the app once while online so it can save itself for offline use. After that it works in airplane mode.

## Backups

Your records live only on your phone. If you delete the app, clear website data, or switch phones, they are gone. Open **Settings**, then **Export backup** now and then. On iPhone this opens the share sheet, where you can pick **Save to Files**. To restore, use **Import backup** and choose the file. Importing replaces what's on the device, and the app asks you to confirm first.

## Changing the app later

Edit the files, then upload or push them again. Users get the new version the second time they open the app after you deploy (the app shows the saved copy first, then refreshes it in the background). If you add new files that must work offline, add their paths to the `ASSETS` list in `sw.js` and change `CACHE` from `weight-notes-v1` to `weight-notes-v2`.

## Fonts

The app uses the fonts already on the device (San Francisco for text and Avenir Next Condensed for the big numbers on iPhone), so there are no font files to download. To use another font, add it as a local file and a `@font-face` rule in `index.html`, and add the file path to `ASSETS` in `sw.js`.

## Troubleshooting

- **The Pages address shows a 404.** Pages can take a few minutes the first time. Check that Settings, Pages shows the branch `main` and folder `/ (root)`, and that `index.html` is at the top level of the repository, not inside another folder.
- **Changes don't show up.** Close the app fully (swipe it away) and open it twice.
- **No "Add to Home Screen" option.** Use Safari, not Chrome or an in-app browser.
- **The app asks for the unit again.** The storage was cleared, or you opened a different copy (Safari tab vs. installed app). Import a backup.
