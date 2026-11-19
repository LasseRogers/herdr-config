# herdr-config

Tokyo Night layout, theme and mods for [Herdr](https://herdr.dev).

```sh
H=~/.config/herdr-app
ln -s $PWD/layouts/typecraft.json  $H/layouts/
ln -s $PWD/themes/tokyo-night.json $H/themes/
for m in mods/tc-*; do ln -s $PWD/$m $H/mods/; done
```

`tc-agents`, `tc-spaces` and `tc-tabs` are forks of Herdr 0.1.15 built-ins and may break on upgrade.
