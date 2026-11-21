# Weight Notes

A tiny offline app for writing down the weight you use on each gym machine. No reps, no accounts, no backend. Everything stays on your phone. About 40 KB.

## Add to iPhone

1. Publish the files (see below) and open the site in **Safari**.
2. Tap Share, then **Add to Home Screen**.

## Publish on GitHub Pages

1. Create a GitHub repository and upload everything in this folder (keep `.nojekyll`).
2. Settings, Pages, deploy from the `main` branch, root folder.
3. Open `https://<your-name>.github.io/<repo>/` in Safari.

## Updating from an older version

Replace the files in the repository. Then open the app twice (the first open fetches the update, the second shows it). Your data is kept and old exercises are migrated automatically.

## Using it

- **+** opens **Choose a type** first: Chest, Back, Shoulder, Tricep, Bicep, Legs, Core, or **Custom** (type your own, e.g. "Forearms"). Then the usual form: name, brand, lb/kg, starting weight, optional seat height and notes.
- Types are never guessed from the name. You can change the type later on the edit screen.
- Home groups exercises by type. Custom types get their own heading after the standard ones.
- Older exercises without a type appear under **Needs a group**. Open one, tap edit and pick a type.
- Each exercise has its own unit (lb or kg). Changing the unit only changes the label, it never converts numbers.
- Type decimals with a dot or a comma.

## Data migration

Earlier versions used different groups. On load they become: `shoulders` to Shoulder, `arms` to a custom "Arms", `other` or blank to "Needs a group". Nothing is deleted. Old backups import the same way.

## Files

- `index.html` the whole app
- `sw.js` offline cache (`weight-notes-v4`)
- `manifest.webmanifest`, `icons/` install info and icons
- `.nojekyll` makes GitHub Pages serve files as is

## Backup

Settings has Export and Import. Data is stored in the browser's localStorage under `weight-notes-v1`. Export a backup now and then, because clearing Safari website data erases it.

## Changing the type list

Edit the `GROUPS` array near the top of the script in `index.html`.
