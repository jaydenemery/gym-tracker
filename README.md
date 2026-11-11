# Weight Notes (PWA)

A tiny app for tracking the weight you lift on each exercise and how it climbs. No account, no backend, no cost. Everything is saved on the device, and the app works offline after the first visit.

## What it does

- **Home** groups your exercises under Chest, Back, Shoulders, Arms, Legs, Core and Other. Each card shows the current weight, the change since you started, and a vertical gauge for how recently you updated it. The gauge is full right after an update and turns yellow, orange and red as weeks pass (28, 56 and 84 days).
- **Muscle group** is suggested from the exercise name (for example "Leg Curl" becomes Legs). It is a built-in keyword list, not AI, so it works offline and never sends anything anywhere. Tap a group chip to override it.
- **Per-exercise unit.** Each exercise has its own unit (lb or kg), chosen when you create it, so a kg stack and lb plates can live side by side. Weights are saved exactly as typed. Changing an exercise's unit later asks whether to convert the saved weights (rounded to 0.25 kg or 0.5 lb) or keep the numbers and only change the label.
- **Update weight** has +/- quick buttons and a field you can type into. Decimals work with either a comma or a dot. The field is not auto-selected when it opens.
- **Setup** card on each exercise: a free-text seat height (letters allowed, like "5 notch" or "3 stack") and a notes box. Tap Edit on the card to change them quickly.
- **Editing:** tap the pencil to change an exercise's name, brand, muscle group or unit. Tap any history row to fix its weight or date, or delete it.
- **Haptics:** a light tap on button presses. Turn it off in Settings.
- **Backup:** Settings has Export backup and Import backup.

## What's in this folder

```
index.html              the whole app (HTML, CSS and JavaScript)
manifest.webmanifest    name, icons and standalone display mode
sw.js                   service worker (offline support)
icons/                  app icons (192, 512, maskable 512, Apple touch icon 180)
.nojekyll               tells GitHub Pages to serve the files as they are
```

All paths are relative, so the app works from a GitHub Pages project URL like `https://YOURNAME.github.io/weight-notes/`.

## Updating an existing deployment

Replace the files in your repository with the ones in this folder (upload them again, or `git add . && git commit && git push`). Then open the installed app, close it fully by swiping it away, and open it again twice. The first open fetches the new version in the background and the second one shows it.

Your data carries over. Version 1 data is upgraded automatically: each exercise keeps its unit, and a muscle group is guessed from its name (anything unknown goes under Other). Old backup files import fine too.

## Deploy to GitHub Pages (first time)

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

## About haptics

iPhone Safari has no official vibration API. The app uses a known workaround (it briefly toggles a hidden switch control when you tap), which gives a light tick on recent iOS versions. It is not guaranteed, and an iOS update could stop it. On Android it uses the normal vibration call. If you don't feel anything, check that Haptics is On in Settings and that your iPhone's system haptics are enabled (Settings, Sounds & Haptics).

## Changing the app later

If you add new files that must work offline, add their paths to the `ASSETS` list in `sw.js` and change `CACHE` (currently `weight-notes-v2`) to the next number.

## Fonts

The app uses the fonts already on the device (San Francisco on iPhone), so there are no font files to download.

## Troubleshooting

- **The Pages address shows a 404.** Pages can take a few minutes the first time. Check that Settings, Pages shows the branch `main` and folder `/ (root)`, and that `index.html` is at the top level of the repository, not inside another folder.
- **Changes don't show up.** Close the app fully (swipe it away) and open it twice.
- **No "Add to Home Screen" option.** Use Safari, not Chrome or an in-app browser.
- **The app asks for the unit again.** The storage was cleared, or you opened a different copy (Safari tab vs. installed app). Import a backup.
