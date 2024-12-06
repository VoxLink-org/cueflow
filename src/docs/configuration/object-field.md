---
title: Object field
---

A list of nested fields. You can use [any of the fields defined for content](#fields), including `object` itself, allowing you to nest fields as much as needed.

## Options

*No options.*

## Example

```yaml
- name: contact
  label: Contact information
  type: object
  fields:
    - name: first_name
      label: First name
      type: string
    - name: last_name
      label: Last name
      type: string
    - name: email
      label: Email address
      type: string
    - name: phone
      label: Phone number
      type: string
```