---
title: Select field
---

A dropdown field that supports both static options and dynamic autocomplete through API endpoints.

## Options

| Option | Type | Description |
|--------|------|-------------|
| **`values`** | array | For static options. Entries can be objects with `value` and `label` keys (e.g. `[{ value: option_1, label: 'Option 1' }]`) or strings (e.g. `['Option 1']`). String entries will use the same value for both value and label. |
| **`multiple`** | boolean | Allow selecting multiple values. |
| **`creatable`** | boolean | Allow creating new options that aren't in the predefined list. |
| **`placeholder`** | string | Custom placeholder text for the select input. |
| **`cache`** | boolean | Whether to cache API results (defaults to `true`). |
| **`default`** | boolean | Whether to load options immediately when the component mounts (defaults to `true` if `minlength` is 0 or undefined). |
| **`fetch`** | object | Configuration for autocomplete functionality through an API endpoint. |
| **`fetch.url`** | string | The API endpoint URL. |
| **`fetch.method`** | string | HTTP method (defaults to "GET"). |
| **`fetch.params`** | object | Query parameters to include in the request. Use `{{input}}` to include the search term. |
| **`fetch.headers`** | object | Custom headers to send with the request. |
| **`fetch.results`** | string | Dot notation path to the results array in the response. |
| **`fetch.value`** | string | Template or field name to use as option value from each result (defaults to "id"). Supports template strings with field values. |
| **`fetch.label`** | string | Template or field name to use as option label from each result (defaults to "name"). Supports template strings with field values. |
| **`fetch.image`** | string | Template or field name for an image URL to display next to the option. Supports template strings with field values. |
| **`fetch.minlength`** | number | Minimum number of characters before triggering search. |

## Examples

A simple select box to pick a tag:

```yaml
- name: tag
  label: Tag
  type: select
  options:
    values: [ Tech, News, Sports ]
```

A select field with custom value/label pairs:

```yaml
- name: author
  label: Author
  type: select
  options:
    values:
      - value: bob
        label: Bob Smith
      - value: patricia
        label: Patricia Wills
      - value: alice
        label: Alice Brown
```

Allow selecting multiple tags:

```yaml
- name: tags
  label: Tags
  type: select
  options:
    multiple: true
    values: [ Tech, News, Sports ]
```

Search users through the GitHub API:

```yaml
- name: assignee
  label: Assignee
  type: select
  options:
    fetch:
      url: https://api.github.com/search/users
      params:
        q: "{{input}}"
      results: items
      value: login
      label: "{{login}}"
      image: avatar_url
      minlength: 2
      headers:
        Authorization: Bearer ghp_5NW8k9YzF3xLmP2vQbT4cJdR7aHnE1iKoU6s
```

Allow adding new tags while also showing existing ones:

```yaml
- name: tags
  label: Tags
  type: select
  options:
    creatable: true
    multiple: true
    values: [ Tech, News, Sports ]
```

Search with multiple parameters:

```yaml
- name: product
  label: Product
  type: select
  options:
    fetch:
      url: https://api.example.com/products
      params:
        search: "{{input}}"
        category: "electronics"
      results: data.products
      value: "{{id}}"
      label: "{{name}} ({{sku}})"
      image: thumbnail
```
```

These changes make the documentation more accurate and provide clearer examples that match how your component actually works. The biggest difference is replacing `fetch.query` with `fetch.params` and showing how to use template strings in the API configuration.
