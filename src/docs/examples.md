---
title: Examples
order: 3
---

A few examples of [configuration files](/docs/configuration).

## Jekyll blog

A simple Jekyll blog with posts in the `_posts` folder and media in `media`.

```yaml
media: media
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

## 11ty blog

An 11ty blog with all of the code (content, templates, ...) in the `src` subfolder. It sets one collection for blog posts in `src/posts`, and one single file to manage the globa site data at `src/_data/site.json` (for things like website title, description, etc).

```yaml
media:
  input: src/media
  output: /media
content:
  - name: posts
    label: Posts
    type: collection
    path: 'src/posts'
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
  - name: 

```