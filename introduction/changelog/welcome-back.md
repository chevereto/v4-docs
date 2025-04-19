# Welcome back

Have used Chevereto before? That's awesome!

We have prepared a short summary in what you can expect coming from older versions of the software.

## From Chevereto V3

[V3.X releases](https://releases.chevereto.com/3.X/)

The user interface has evolved to a mature status, with new icons, gestures, keyboard shortcuts and many more. The experience is snappier as it supports PHP 8 and is built on top of [Chevere](https://chevere.org/).

Coming from V3, users will experience a better user interface design, improved debug experience, more system reliability and speed. V4 also introduced theme palettes, support for more login providers, user based API, two-factor authentication and database encryption.

### Chevereto V4 vs V3

<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item m-0" src="https://www.youtube.com/embed/ytw2Ep1Xm1A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

The following tables summarizes the significative differences between Chevereto V3 and Chevereto V4.

| System                                | V4  | V3  |
| ------------------------------------- | --- | --- |
| [PHP](../../application/stack/php.md) | 8   | 7.4 |

|                                           | V4 Path                            | V3 Path           |
| ----------------------------------------- | ---------------------------------- | ----------------- |
| Settings                                  | /app/env.php                       | /app/settings.php |
| Composer                                  | /app/composer.json                 | /composer.json    |
| [CLI](../../application/reference/cli.md) | /app/bin/legacy                    | /cli.php          |
| Themes                                    | /content/legacy/themes             | /app/themes       |
| Peafowl                                   | /content/legacy/themes/Peafowl/lib | /lib              |

### Settings setup

Chevereto V4 deprecates `app/settings.php` in favor of [environment variables](../../application/configuration/environment.md) for [configuring](../../application/configuration/configuring.md) the application.

Your existing application settings must be migrated to enable Chevereto V4 to connect to the database and configure the system.

## From Chevereto-Free

As [Chevereto-Free](https://github.com/rodber/chevereto-free) is a fork of [Chevereto V3.16](https://releases.chevereto.com/3.X/3.16/3.16.0), it adds on top of that branch.

The code at V4 is notorious newer as V4 was released on 2022. Chevereto-Free contains code old as 2020.

Coming from Chevereto-Free, users will experience a solid software system with active software support offering, a mature design, multi-languages and all-features included.

## From Chevereto V2

[V2.X releases](https://releases.chevereto.com/2.X/)

Adding on [From Chevereto V3](#from-chevereto-v3), the system now supports multi-user and the user interface has been dramatically improved. The software got albums, profiles, search, explore and an admin dashboard.

Coming from V2, users will experience that Chevereto is more than a simple one-click image host but a full-featured media hosting solution.

## From Chevereto V1

[V1.X releases](https://releases.chevereto.com/1.X/)

Adding on [From Chevereto V2](#from-chevereto-v2), the software went from an mvp to a real project.

Coming from V1, users will experience that the software is not longer is a robust media hosting solution.
