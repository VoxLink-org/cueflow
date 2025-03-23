---
title: UUID field
---

Generates a [Version 4 UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random)).

## Options

| Option | Type | Description |
| - | - | - |
| **`editable`** | `boolean` | If `false`, prevents the user from generating a new UUID after creation. Defaults to `true` |

## Example

```yaml
- name: identifier
  label: Identifier
  type: uuid
  options:
    editable: false
```
