# Utilities

Chevereto uses some command-line utilities to perform certain tasks. These utilities are not required for the basic operation of Chevereto, but they are recommended for optimal performance and functionality.

The binaries should be available at the system path, alternatively you can configure the [binary location](../configuration/environment.md#binary-paths) manually.

## FFmpeg

`ffmpeg` `ffprobe`

- [FFmpeg website](https://ffmpeg.org)

Chevereto requires FFmpeg and FFprobe to process video uploads. These tools are used to generate video thumbnails and detect video metadata.

![FFmpeg folder](../../src/third-party/ffmpeg/ffmpeg-folder.png)

## ExifTool

`exiftool`

- [ExifTool website](https://exiftool.org)

Chevereto requires ExifTool to lossless strip image metadata.

## ExifTran

`exiftran`

- [fbida project](https://www.kraxel.org/blog/linux/fbida/)

Chevereto requires ExifTran to lossless auto-orientate images.
