---
title: File field
---

A field allowing users to upload and select any type of file. By default, it uses [the media configuration](/docs/configuration#media), but can be customized using the field's options.

## Options

| Option | Type | Description |
| - | - | - |
| **`media`** | `string` | Name of the media configuration to use. If not specified, uses the first media configuration defined in your schema. |
| **`path`** | `string` | The default path when opening the file browser. Must be within the configured media folder. |
| **`multiple`** | `boolean` or `object` | Allow selecting multiple files. When set to `true`, allows unlimited files. When set to an object, can include `min` and `max` properties to constraint the number of files. |
| **`multiple.min`** | `number` | Minimum number of files that must be selected when `multiple` is enabled. |
| **`multiple.max`** | `number` | Maximum number of files that can be selected when `multiple` is enabled. |
| **`extensions`** | `string[]` | An array of file extensions that should be allowed. **Note**: this is on top of the allowed extensions/categories for the media selected for this field. |
| **`categories`** | `string[]` | Filter files by category: `image` (`jpg`, `jpeg`, `png`, `gif`, `svg`, `bmp`, `tif`, `tiff`), `document` (`pdf`, `doc`, `docx`, `ppt`, `pptx`, `vxls`, `xlsx`, `txt`, `rtf`), `video` (`mp4`, `avi`, `mov`, `wmv`, `flv`), `audio` (`mp3`, `wav`, `aac`, `ogg`, `flac`), `compressed` (`zip`, `rar`, `7z`, `tar`, `gz`, `tgz`), `code` (various programming languages), `font` (font files), and `spreadsheet` (spreadsheet files). **Note**: this is on top of the allowed extensions/categories for the media selected for this field|

## Examples

A simple file field using the default media configuration:

```yaml
- name: attachment
  label: Attachment
  type: file
```

Allow selecting multiple files with a limit:

```yaml
- name: documents
  label: Documents
  type: file
  options:
    multiple:
      max: 5
```

Specify a custom path and limit file types to PDFs:

```yaml
- name: resources
  label: Resources
  type: file
  options:
    path: downloads
    extensions: [pdf]
```

Allow only document files using the category filter:

```yaml
- name: resources
  label: Resources
  type: file
  options:
    categories: [document]
```

Allow uploading compressed archives:

```yaml
- name: downloads
  label: Downloads
  type: file
  options:
    multiple: true
    categories: [compressed]
```
