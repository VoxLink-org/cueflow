---
title: Text field
---

Multi-line text.

## Options

| Option | Type | Description |
| - | - | - |
| **`minlength`** | `integer` | If set, defines the minimum length in characters.  |
| **`maxlength`** | `integer` | If set, defines the maximum length in characters.  |
| **`autoresize`** | `boolean` | If `true`, will automatically increase the height to fit the content of the field. `true` by default. |
| **`rows`** | `integer` | Visible height of the field in rows. Set to `20` by default. |

## Examples

```yaml
- name: tweet
  label: Tweet
  type: text
  options:
    maxlength: 140
```