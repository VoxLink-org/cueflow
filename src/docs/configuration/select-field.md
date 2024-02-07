---
title: Select field
---

Dropdown field.

## Options

| Option | Type | Description |
| - | - | - |
| **`values`** | `array` | The list of values. Entries in the array can either be objects with `value` and `label` keys (e.g. `[ { value: option_1, label: 'Option 1' } ]`) or strings (e.g. `[ 'Option 1' ]`). A string entry is equivalent to an object with both `value` and `label` set to the value of the string. |

## Examples

A simple select box to pick a tag for the entry:

```yaml
- name: tag
  label: Tag
  options:
    values: [ Tech, News, Sports ]
```

A more complex list of values to pick an author:

```yaml
- name: author
  label: Author
  options:
    values:
    - value: bob
      label: Bob Smith
    - value: patricia
      label: Patricia Wills
    - value: alice
      label: Alice Brown
```