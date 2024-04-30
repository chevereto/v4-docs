# API Version 1.1

Chevereto API V1 was introduced in Chevereto V2 and it allows to upload pictures as guest to a Chevereto website.

Chevereto V4 updates API V1 to 1.1 introducing support for **user API keys** and more upload parameters including title, width, and more.

## Key

API V1.1 works with an user key which is available for each user at `/settings/api`. Admin user can set the public API key for guest uploads at the [Dashboard panel](https://v4-admin.chevereto.com/settings/guest-api.html#public-api-key).

## Request method

API V1 calls can be made using POST or GET request methods.

POST request method is **recommended**.

## Request URL

```plain
http://mysite.com/api/1/upload
```

## Authorization

API V1.1 supports header authorization by passing the `X-API-Key` header with an API key.

```plain
X-API-Key: chv_asd_somekeyhere
```

## Parameters

### Required Parameters

| Name   | Description                                                                                                            |
| ------ | ---------------------------------------------------------------------------------------------------------------------- |
| source | A image URL or a [base64](https://en.wikipedia.org/wiki/Base64) encoded image string. Also supports `FILES["source"]`. |

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

ImgBB is a popular image hosting service 100% based on Chevereto (V3).

Any existing [ImgBB API client](https://github.com/search?q=imgbb) is compatible with Chevereto V4's API V1.1, simple as change the domain name.

## Example call

```plain
POST http://mysite.com/api/1/upload
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
    "name": "cannon-zoom-lens",
    "extension": "jpeg",
    "size": 296362,
    "width": 1920,
    "height": 1280,
    "date": "2024-03-20 15:49:31",
    "date_gmt": "2024-03-20 18:49:31",
    "title": "cannon zoom lens",
    "description": null,
    "nsfw": 0,
    "storage_mode": "datefolder",
    "md5": "fde3bfd2a50ce00f0be0c32ec7088240",
    "source_md5": null,
    "original_filename": "cannon-zoom-lens.jpg",
    "original_exifdata": "{\"FileName\":\"chvtempQmM74X\",\"FileDateTime\":\"1710960571\",\"FileSize\":\"296362\",\"FileType\":\"2\",\"MimeType\":\"image\\/jpeg\",\"SectionsFound\":\"\",\"COMPUTED\":{\"html\":\"width=\\\"1920\\\" height=\\\"1280\\\"\",\"Height\":\"1280\",\"Width\":\"1920\",\"IsColor\":\"1\"},\"IPTC\":[],\"width\":\"1920\",\"height\":\"1280\"}",
    "views": 0,
    "category_id": null,
    "chain": 7,
    "thumb_size": 35327,
    "medium_size": 48481,
    "expiration_date_gmt": null,
    "likes": 0,
    "is_animated": 0,
    "is_approved": 1,
    "is_360": 0,
    "file": {
      "resource": {
        "type": "path"
      }
    },
    "id_encoded": "vZxn",
    "filename": "cannon-zoom-lens.jpeg",
    "mime": "image/jpeg",
    "url": "http://localhost/images/2024/03/20/cannon-zoom-lens.jpeg",
    "url_viewer": "http://localhost/image/cannon-zoom-lens.vZxn",
    "path_viewer": "/image/cannon-zoom-lens.vZxn",
    "url_short": "http://localhost/image/vZxn",
    "image": {
      "filename": "cannon-zoom-lens.jpeg",
      "name": "cannon-zoom-lens",
      "mime": "image/jpeg",
      "extension": "jpeg",
      "url": "http://localhost/images/2024/03/20/cannon-zoom-lens.jpeg",
      "size": 296362
    },
    "thumb": {
      "filename": "cannon-zoom-lens.th.jpeg",
      "name": "cannon-zoom-lens.th",
      "mime": "image/jpeg",
      "extension": "jpeg",
      "url": "http://localhost/images/2024/03/20/cannon-zoom-lens.th.jpeg",
      "size": 35327
    },
    "medium": {
      "filename": "cannon-zoom-lens.md.jpeg",
      "name": "cannon-zoom-lens.md",
      "mime": "image/jpeg",
      "extension": "jpeg",
      "url": "http://localhost/images/2024/03/20/cannon-zoom-lens.md.jpeg",
      "size": 48481
    },
    "size_formatted": "296.4 KB",
    "display_url": "http://localhost/images/2024/03/20/cannon-zoom-lens.md.jpeg",
    "display_width": "500",
    "display_height": 333,
    "views_label": "views",
    "likes_label": "likes",
    "how_long_ago": "moments ago",
    "date_fixed_peer": "2024-03-20 18:49:31",
    "title_truncated": "cannon zoom lens",
    "title_truncated_html": "cannon zoom lens",
    "is_use_loader": false,
    "delete_url": "http://localhost/image/vZxn/delete/9ed729f18b596631068d19f3d22bd5fff3a2a1d4c57d13cd"
  },
  "status_txt": "OK"
}
```

## Example response (txt)

```plain
http://127.0.0.1/images/2014/06/04/example.png
```
