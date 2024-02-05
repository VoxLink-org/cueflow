---
title: Examples
order: 3
---

```YAML
media: images
media_prefix: '/'

content:
  - name: posts
    label: Posts
    type: collection
    path: '_posts'
    view:
      fields: [ title, published, date ]
    fields:
      - name: published
        label: Published
        type: boolean
        default: true
      - name: date
        label: Date
        type: date
      - name: title
        label: Title
        type: string
      - name: body
        label: Body
        type: rich-text
```
