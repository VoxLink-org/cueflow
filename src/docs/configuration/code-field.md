---
title: Code field
---

Code editor with syntax highlighting using [Codemirror](https://codemirror.net/).

## Options

| Option | Type | Description |
| - | - | - |
| **`language`** | `string` | The language for syntax highlight, can be `yaml`, `javascript` `json`, `html` or `markdown`. Default is `markdown`. |

## Example

```yaml
- name: body
  label: Body
  type: code
  options:
    language: html
```