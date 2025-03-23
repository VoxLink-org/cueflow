---
title: Image field
---

A field allowing users to upload and select images. By default, it uses [the media configuration](/docs/configuration#media), but can be customized using the field's options.

## Options

| Option | Type | Description |
| - | - | - |
| **`media`** | `string` | Name of the media configuration to use. If not specified, uses the first media configuration defined in your schema. |
| **`path`** | `string` | The default path when opening the file browser. Must be within the configured media folder. |
| **`multiple`** | `boolean` or `object` | Allow selecting multiple images. When set to `true`, allows unlimited images. When set to an object, can include `min` and `max` properties to constraint the number of images. |
| **`multiple.min`** | `number` | Minimum number of images that can be selected when `multiple` is enabled. |
| **`multiple.max`** | `number` | Maximum number of images that can be selected when `multiple` is enabled. |
| **`extensions`** | `string[]` | An array of file extensions that should be allowed. Only files with these extensions will be shown or accepted for upload. **Note**: this is on top of the allowed extensions/categories for the media selected for this field. |

## Examples

A simple image field using the default media configuration:

```yaml
- name: cover
  label: Cover Image
  type: image
```

Allow selecting multiple images with a limit:

```yaml
- name: gallery
  label: Image Gallery
  type: image
  options:
    multiple:
      max: 6
```

Specify a custom path and limit file types:

```yaml
- name: screenshots
  label: Screenshots
  type: image
  options:
    path: screenshots
    extensions: [jpg, png]
```

Use a specific media configuration and allow selecting SVG files using the category filter:

```yaml
- name: icon
  label: Icon
  type: image
  options:
    media: vector_assets
    categories: [image]
    extensions: [svg]
```
