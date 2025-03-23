---
title: Rich-text field
---

Rich-text editor powered by [TipTap (ProseMirror)](https://github.com/ueberdosis/tiptap), providing a powerful WYSIWYG experience with support for formatting, tables, images, and more.

## Options

| Option | Type | Description |
| - | - | - |
| **`media`** | `string` or `boolean` | Name of the media configuration to use for images. If not specified, uses the first media configuration defined in your schema. Set to `false` to disable image support. |
| **`path`** | `string` | The default path when opening the file browser for images. Must be within the configured media folder. |
| **`extensions`** | `string[]` | An array of file extensions that should be allowed for images. **Note**: These are intersected with the extensions defined in the media configuration, so only extensions allowed by both will be available. |

## Features

- **Text formatting**: Bold, italic, underline, strikethrough, code
- **Block types**: Headings (1-3), paragraphs, bulleted lists, numbered lists, blockquotes, code blocks
- **Text alignment**: Left, center, right, justify
- **Tables**: Insert and edit tables with options to add/remove rows and columns
- **Links**: Add, edit, and remove hyperlinks
- **Images**: Insert images from media library with support for alt text
- **Slash commands**: Type `/` to access quick commands for inserting various elements

## Examples

A simple rich-text field using the default media configuration:

```yaml
- name: body
  label: Body
  type: rich-text
```

Specify a custom path for images and limit file types:

```yaml
- name: content
  label: Content
  type: rich-text
  options:
    path: blog-images
    extensions: [jpg, jpeg, png]
```

Use a specific media configuration:

```yaml
- name: description
  label: Description
  type: rich-text
  options:
    media: product_images
```

Disable image support:

```yaml
- name: notes
  label: Notes
  type: rich-text
  options:
    media: false
```
