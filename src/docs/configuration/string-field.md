---
title: String field
---

Single line text.

## Options

| Option | Type | Description |
| - | - | - |
| **`minlength`** | `integer` | If defined, sets the minimum length in characters.  |
| **`maxlength`** | `integer` | If defined, sets the maximum length in characters.  |

## Examples

```yaml
- name: description
  label: Description
  type: string
  options:
    minlength: 20
    maxlength: 160
```
