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
      name: First name
      type: string
    - name: last_name
      name: Last name
      type: string
    - name: email
      name: Email address
      type: string
    - name: phone
      name: Phone number
      type: string
```