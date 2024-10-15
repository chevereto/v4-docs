# Theme

Chevereto's built-in theme is designed to offer a turn-key experience for users and you may customize it using several methods.

## Theme overrides

`content/legacy/themes/Peafowl/overrides/`

Theme overrides can be used to override any file in the theme.

Theme overrides works by detecting a file override which **replaces a given theme file**, so the system will use the override instead of the default file. Overrides are placed at `content/legacy/themes/Peafowl/overrides/` directory and follow the same structure as the theme.

For example, let's say you want to replace `content/legacy/themes/Peafowl/views/image.php`. To do this copy the file to `content/legacy/themes/Peafowl/overrides/views/image.php`, make some changes and you will notice that the system now use the override instead of the default file.

## Custom hooks

`content/legacy/themes/Peafowl/custom_hooks/`

Custom hooks allows to add or edit code in designated areas or segments of the theme.

List of available custom hooks:

- body_open.php
- footer.php
- head_after.php
- head_open.php
- head.php
- header.php
- share_links.php
- style.css

For example, to customize the share buttons using custom hooks:

- Go to the theme custom hooks folder at `content/legacy/themes/Peafowl/custom_hooks/`
- Make a copy of `share_links.sample.php` (do all your editing needed in this copy)
- Rename your working copy to `share_links.php`

Chevereto will detect your hooks and it will load these files.

## Clone default theme

If you need more customization you should clone the default "Peafowl" theme and do your work in this new theme.

To clone the default theme:

- Copy `content/legacy/themes/Peafowl/` and paste it in the same directory
- Name your new theme as anything you want (no white spaces)

Best way to keep a track of default theme changes is by creating a local git repo in your computer. Create a local git repo with last Chevereto version and commit each time you want to merge the code and will be able to see exactly all the changes line by line.
