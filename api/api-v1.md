# 🖼 API Version 1.1

💡 Chevereto API V1 was introduced in Chevereto V2 and it allows to upload pictures as guest (or as logged user) to a Chevereto website.

✅ Chevereto V4 updates API V1 to 1.1 introducing support for **user API keys** as more upload parameters including title, width, and more.

## Key

API V1.1 works with an user key, which is available at `/settings/api`. Admin user can set the public API key at the [Dashboard panel](https://v4-admin.chevereto.com/dashboard/api.html).

## Request method

API V1 calls can be done using the POST or GET request methods.

👉 POST request method is **recommended**.

## Request URL

```plain
http://mysite.com/api/1/upload/
```

## Authorization

API V1.1 supports header authorization by passing the `X-API-Key` header with an API key.

```plain
X-API-Key: chv_asd_somekeyhere
```

## Parameters

### Required Parameters

| Name   | Description                                                                                                          |
| ------ | -------------------------------------------------------------------------------------------------------------------- |
| source | A image URL or a [base64](https://en.wikipedia.org/wiki/Base64) encoded image string. Also supports FILES["source"]. |

### Optional Parameters

| Name        | Description                                                   |
| ----------- | ------------------------------------------------------------- |
| title       | Image title                                                   |
| description | Image description                                             |
| album_id    | Image album id, must be owned by the user (encoded string)    |
| category_id | Category id (integer)                                         |
| width       | Target resize width (automatic height)                        |
| expiration  | [Expiration](#expiration-table) time to auto-delete the image |
| nsfw        | Not safe for work flag (integer `0`, `1`)                     |
| format      | Return format, values `json`, `redirect`, `txt`               |

### Legacy Parameters

| Name | Description                                       |
| ---- | ------------------------------------------------- |
| key  | The API key (see [Authorization](#authorization)) |

### Expiration table

Following values can be used for `expiration` parameter.

| Value | Expires after |
| ----- | ------------- |
| PT5M  | 5 minutes     |
| PT15M | 15 minutes    |
| PT30M | 30 minutes    |
| PT1H  | 1 hour        |
| PT3H  | 3 hours       |
| PT6H  | 6 hours       |
| PT12H | 12 hours      |
| P1D   | 1 day         |
| P2D   | 2 days        |
| P3D   | 3 days        |
| P4D   | 4 days        |
| P5D   | 5 days        |
| P6D   | 6 days        |
| P1W   | 1 week        |
| P2W   | 2 weeks       |
| P3W   | 3 weeks       |
| P1M   | 1 month       |
| P2M   | 2 months      |
| P3M   | 3 months      |
| P4M   | 4 months      |
| P5M   | 5 months      |
| P6M   | 6 months      |
| P1Y   | 1 year        |

### Compatibility with ImgBB API

💡 ImgBB is a popular service based on Chevereto V3.

✅ Any existing [ImgBB API client](https://github.com/search?q=imgbb) is compatible with Chevereto V4's API V1.1, simple as change the domain name.

## Example call

```plain
POST http://mysite.com/api/1/upload/
```

## API response

API V1 responses will vary depending on the **format** parameter:

| Format   | Output                                     |
| -------- | ------------------------------------------ |
| json     | Image upload info in JSON format (default) |
| txt      | Image direct URL in text/plain format      |
| redirect | Redirects to the image viewer URL          |

When using JSON the response output will contain the `status_txt` and `status_code` properties.

## Example response (JSON)

```json
{
    "status_code": 200,
    "success": {
        "message": "image uploaded",
        "code": 200
    },
    "image": {
        "name": "example",
        "extension": "png",
        "size": 53237,
        "width": 1151,
        "height": 898,
        "date": "2014-06-04 15:32:33",
        "date_gmt": "2014-06-04 19:32:33",
        "storage_id": null,
        "description": null,
        "nsfw": "0",
        "md5": "c684350d722c956c362ab70299735830",
        "storage": "datefolder",
        "original_filename": "example.png",
        "original_exifdata": null,
        "views": "0",
        "id_encoded": "L",
        "filename": "example.png",
        "ratio": 1.2817371937639,
        "size_formatted": "52 KB",
        "mime": "image/png",
        "bits": 8,
        "channels": null,
        "url": "http://127.0.0.1/images/2014/06/04/example.png",
        "url_viewer": "http://127.0.0.1/image/L",
        "thumb": {
            "filename": "example.th.png",
            "name": "example.th",
            "width": 160,
            "height": 160,
            "ratio": 1,
            "size": 17848,
            "size_formatted": "17.4 KB",
            "mime": "image/png",
            "extension": "png",
            "bits": 8,
            "channels": null,
            "url": "http://127.0.0.1/images/2014/06/04/example.th.png"
        },
        "medium": {
            "filename": "example.md.png",
            "name": "example.md",
            "width": 500,
            "height": 390,
            "ratio": 1.2820512820513,
            "size": 104448,
            "size_formatted": "102 KB",
            "mime": "image/png",
            "extension": "png",
            "bits": 8,
            "channels": null,
            "url": "http://127.0.0.1/images/2014/06/04/example.md.png"
        },
        "views_label": "views",
        "display_url": "http://127.0.0.1/images/2014/06/04/example.md.png",
        "how_long_ago": "moments ago"
    },
    "status_txt": "OK"
}
```

## Example response (txt)

```plain
http://127.0.0.1/images/2014/06/04/example.png
```
