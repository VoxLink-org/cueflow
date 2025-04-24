---
title: Reference field
---

A field that allows selecting items from another collection through an autocomplete dropdown.

## Options

| Option | Type | Description |
|--------|------|-------------|
| **`collection`** | string | Name of the collection to reference. |
| **`multiple`** | boolean | Allow selecting multiple references. |
| **`search`** | string | The field names to search in the referenced collection (defaults to "name"). |
| **`value`** | string | Template to use for the reference value (defaults to "{path}"). |
| **`label`** | string | Template to use for the display label (defaults to "{name}"). |
| **`image`** | string | Optional template for an image URL to display next to options. |

## Examples

Reference a single page:

```yaml
- name: featured_post
  label: Featured Post
  type: reference
  options:
    collection: posts
```

Reference multiple authors:

```yaml
- name: authors
  label: Authors
  type: reference
  options:
    collection: authors
    multiple: true
```

Customize the display with templates:

```yaml
- name: related_products
  label: Related Products
  type: reference
  options:
    collection: products
    multiple: true
    search: "title,description"
    value: "{id}"
    label: "{title} - ${price}"
    image: "{featured_image}"
```
