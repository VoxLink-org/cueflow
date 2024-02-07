---
title: Rich-text field
---

Rich-text editor powered by [TipTap (ProseMirror)](https://github.com/ueberdosis/tiptap).

## Options

| Option | Type | Description |
| - | - | - |
| **`format`** | `string` | Format in which the field is saved, either `html` or `markdown`. Set to `markdown` by default. |
| **`image`** | `object` | Options for the image feature. |
| **`image.input`**| `string` | The path to the media folder relative to the root of the repo (e.g. `src/files/media`). |
| **`image.output`** | `string` | The path to the media folder relative to the root of the website (e.g. `files/media`). |
| **`image.path`** | `string` | The default path when opening the file browser. This also defines where files are uploaded when dropping images in the field. |
| **`image.extensions`** | `string` | An array of file extensions that should be displayed. If provided, any file with an extension not included in this list will not be shown to the user. |
| **`image.categories`** | `string` | Similar to `media.extensions`, but using categories of files: `image` (`jpg`, `jpeg`, `png`, `gif`, `svg`, `bmp`, `tif`, `tiff`), `document` (`pdf`, `doc`, `docx`, `ppt`, `pptx`, `vxls`, `xlsx`, `txt`, `rtf`), `video` (`mp4`, `avi`, `mov`, `wmv`, `flv`), `audio` (`mp3`, `wav`, `aac`, `ogg`, `flac`) and `compressed` (`zip`, `rar`, `7z`, `tar`, `gz`, `tgz`). If both `media.extensions` and `media.categories` are provided, `media.categories` will be ignored. |

## Examples

Let's assume we want to have a rich-text editor for the body of our blog posts and make sure the user uploads only JPEG and PNG images to the `src/media/posts` subfolder:

```yaml
- name: body
  label: Body
  options:
    image:
      path: src/media/posts
      extensions: [ jpg, jpeg, png ]
```