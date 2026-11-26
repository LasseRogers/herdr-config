# herdr-config

Tokyo Night layout, theme and mods for [Herdr](https://herdr.dev). Uses [JetBrainsMono Nerd Font](https://www.nerdfonts.com/font-downloads).

```sh
H=~/.config/herdr-app
mkdir -p $H/{layouts,themes,mods}
ln -sfn $PWD/layouts/typecraft.json  $H/layouts/
ln -sfn $PWD/themes/tokyo-night.json $H/themes/
for m in mods/tc-*; do ln -sfn $PWD/$m $H/mods/; done
```

`tc-agents`, `tc-spaces` and `tc-tabs` are forks of Herdr 0.1.15 built-ins; the `upstream` branch holds the originals, so `git diff upstream main -- mods/` shows what changed.
