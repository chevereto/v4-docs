# 🖼 API Version 1

Chevereto API v1 allows to upload pictures as guest to your Chevereto powered website.

API v1 do not rate limit. You should use this API for your own applications or systems, this API is **not intended for public usage**.

## Key

API v1 works with a single API key that you can set at the [Dashboard panel](https://v4-admin.chevereto.com/dashboard/api.html).

## Call

### Request method

API v1 calls can be done using the POST or GET request methods but since GET request are limited by the maximum allowed length of an URL you should prefer the POST request method.

### Request URL

```plain
http://mysite.com/api/1/<action>/
```

### Parameters

- key The API v1 key, it can be set in your admin dashboard settings.
- action What you want to do [values: upload].
- source Either a image URL or a [base64](https://en.wikipedia.org/wiki/Base64) encoded image string. You can also use FILES["source"] in your request.
- format Sets the return format [values: json (default), redirect, txt].

### Example call

```plain
GET http://mysite.com/api/1/upload/?key=12345&source=http://somewebsite/someimage.jpg&format=json
```

Note: Use POST when uploading local files. Url encoding may alter the base64 source due to encoded characters or URL request length limit due to GET request.

## API response

API v1 responses will vary depending on the **format** parameter:

- `json` Display all the image uploaded information in JSON format. [default]
- `txt` Returns the image direct URL in text/plain format.
- `redirect` Redirects to the image viewer URL.

When using JSON the response output will contain the `status_txt` and `status_code` properties.

### Example response (JSON)

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

### Example response (txt)

```plain
http://127.0.0.1/images/2014/06/04/example.png
```
