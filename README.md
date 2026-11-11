# herdr-config

Tokyo Night layout for [Herdr](https://herdr.dev): spaces grouped by machine,
agent cards with pixel-art avatars, Files/Changes/Usage in the tab bar.

## Install

```sh
git clone git@github.com:LasseRogers/herdr-config.git
cp -r herdr-config/{layouts,themes,mods} ~/.config/herdr-app/
```

Open Herdr and switch to the `typecraft` layout with `Ctrl+Shift+L`.

## Contents

```
layouts/typecraft.json   layout
themes/tokyo-night.json  theme
mods/tc-agents/          agent cards, avatars in avatars/
mods/tc-spaces/          spaces grouped by machine
mods/tc-tabs/            tab bar
mods/tc-usage/           usage panel
```

The `tc-*` mods are forks of Herdr's built-in mods and may need updating after a Herdr release.
