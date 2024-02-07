---
title: Examples
order: 3
---

A few examples of [configuration files](/docs/configuration).

## Jekyll blog

A simple Jekyll blog with posts in the `_posts` folder and media in `media`. It also expose the Jekyll config file (`_config.yml `), allowing the user to adjust a few global values (e.g. website title).

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
  - name: config
    label: Jekyll config
    path: _config.yml
    type: single
    fields:
      - name: title
        label: Website title
        type: string
      - name: description
        label: Website description
        type: string
        description: Will be provused for any page with no description.
      - name: url
        label: Website URL
        type: string
        pattern: ^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[^\s]*)?$
      - name: cover
        label: Preview image
        type: image
        description: Image used in the social preview on social networks (e.g. Facebook, Twitter...)
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

title: "Ronan Berder's blog"
email: "info@wiredcraft.com"
description: Rambles about entrepreneurship, China, tech and design
baseurl: ""
url: "https://ronanberder.com"
keywords:
- China
- design
- technology
- entrepreneurship

# SEO
twitter:
  username: hunvreus
logo: /images/logo.png
social:
  name: Ronan Berder
  links:
    - https://www.facebook.com/profile.php?id=100006671895640
    - https://twitter.com/hunvreus
    - https://cn.linkedin.com/in/ronanberder
    - https://github.com/hunvreus

# Build settings
exclude: ['README.md']
permalink: pretty

# Plugins
gems:
  - jekyll-sitemap
  - jekyll-seo-tag