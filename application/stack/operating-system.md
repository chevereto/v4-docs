# Operating system

Chevereto V4 is made for Unix-like systems and it is CI tested against [Ubuntu](https://ubuntu.com/) `ubuntu-latest`.

V4 documentation at this time is written for **Debian-based** systems. We **recommend** checking/contributing with system-specific commands.

## Non Debian-based

Non Debian-based systems should work fine with Chevereto V4 long as the system stack packages matches with the versions available on Debian.

Make sure to replace references in this documentation from **www-data** to the target web-server user.

## Windows and others

For non Unix-like systems as Windows we **recommend** using our [Docker](../../guides/docker/README.md) provisioning.

## Video processing

Chevereto V4.1 (Pulento) requires [FFmpeg](https://ffmpeg.org) to process video uploads. The FFmpeg binary must be available in the system path, you can check this by running `ffmpeg -version` in the terminal.
