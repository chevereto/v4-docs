# Language

Chevereto uses gettext for its translations and the system comes with a lot of languages built-in which you can find in the `app/languages` folder.

## Add new languages

### OneSky

If you want to add a new language we encourage you to apply to [translation](http://translate.chevereto.com/), where you can easily contribute a new language which will get added to Chevereto **distribution**. OneSky features a complete suite for translations with no additional software required.

::: tip
Translations contributed will get added to the software.
:::

### Manually

Put your `.po` files at `app/languages` folder. Try copying an existing language and rename it to your language code. For example, to add a new language called `es` (Spanish) you would copy the `en.po` file and rename it to `es.po`.

::: warning
Considering using a [.po editor software](https://www.google.com/search?q=po%20editor) to create the translation file.
:::

Specialized software for handling PO files is recommended as this file on its header contains metadata that instructs how the language handle plural forms and more.

## Customizing language strings

All language strings can be customized to fit what you want to show to your visitors. You don't need to touch the theme at all for customizing displayed text.

The system works by overriding the target translation. For example, replacing `Upload and share your media` to "Upload, do it now!" by following this procedure:

### 1. Get the translation string (`msgid` and `msgstr` values)

- Go to the `app/languages` folder
- Open the file `en.po` (in this example we are overriding English language)
- Find this text: `Upload and share your media`
- Copy the `msgid` and the `msgstr` lines, you should get something like this:

```po
msgid "Upload and share your media"
msgstr ""
```

::: tip
The property `msgstr` is empty because English is the base language. If you open any other language you will see that value actually translated.
:::

### 2. Override translation string

- Go to the `app/languages/overrides` folder (create it if it doesn't exist)
- Create the file `app/languages/overrides/en.po` with these contents:

```po
msgid "Upload and share your media"
msgstr "Upload, do it now!"
```

You only need to replace `msgstr` because that is the translation string.

The result is that the system now will display `Upload, do it now!` instead of the default `Upload and share your media` and it will only affect `en` language.

::: warning
**Note:** You don't actually need a gettext editor for language overrides, but make sure to use double-quotes. If you need to put a double quote inside `msgstr` use `\"` (escaped double-quote).
:::

### 3. Adding more overrides

You can add as many string overrides as you want, just make sure to follow the same structure. For example, to also override the `Recent` string your `app/languages/overrides/en.po` file should look like this:

```po
msgid "Upload and share your media"
msgstr "Upload, do it now!"

msgid "Recent"
msgstr "New!"
```

## Cache languages

In Chevereto the `.po` files contain the translations, but these files aren't used at runtime. The system needs to cache these translations to make these available for the application.

Run the [langs command](../../application/reference/cli.md#langs) to cache language strings, including any override you have made.

```sh
app/bin/cli -C langs
```

::: warning Default cache
**Note:** You need to re-cache your languages for every system update **only** if you have added new languages or overrides.
:::
