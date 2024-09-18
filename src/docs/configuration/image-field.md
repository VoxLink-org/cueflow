---
title: Image field
---

A field allowing users to upload and select images. By default, it uses [the media configuration](/docs/configuration#media), but can be overriden using the field's options.

## Options

| Option | Type | Description |
| - | - | - |
| **`input`**| `string` | The path to the media folder relative to the root of the repo (e.g. `src/files/media`). |
| **`output`** | `string` | The path to the media folder relative to the root of the website (e.g. `files/media`). |
| **`path`** | `string` | The default path when opening the file browser. |
| **`extensions`** | `string` | An array of file extensions that should be displayed. If provided, any file with an extension not included in this list will not be shown to the user. |
| **`categories`** | `string` | Similar to `media.extensions`, but using categories of files: `image` (`jpg`, `jpeg`, `png`, `gif`, `svg`, `bmp`, `tif`, `tiff`), `document` (`pdf`, `doc`, `docx`, `ppt`, `pptx`, `vxls`, `xlsx`, `txt`, `rtf`), `video` (`mp4`, `avi`, `mov`, `wmv`, `flv`), `audio` (`mp3`, `wav`, `aac`, `ogg`, `flac`) and `compressed` (`zip`, `rar`, `7z`, `tar`, `gz`, `tgz`). If both `media.extensions` and `media.categories` are provided, `media.categories` will be ignored. |

## Example

Assuming that the media folder is set to `src/media` and we want to let the user pick multiple JPEG or PNG images out of the screenshots subfolder (`src/media/screenshots`):

```yaml
- name: cover
  label: Cover
  type: image
  list: true
  options:
    path: src/media/screenshots
    extensions: [ jpg, jpeg, png ]
```
