---
title: Text field
---

## Options

| Option | Type | Description |
| - | - | - |
| **`minlength`** | `integer` | If set, defines the minimum length in characters.  |
| **`maxlength`** | `integer` | If set, defines the maximum length in characters.  |
| **`autoresize`** | `integer` | If set, defines the maximum length in characters.  |
| **`rows`** | `integer` | If set, defines the maximum length in characters.  |

## Examples

```yaml
- name: tweet
  label: Tweet
  type: text
  options:
    maxlength: 140
```