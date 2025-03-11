---
title: Select field
---

A dropdown field that supports both static options and dynamic autocomplete through API endpoints.

## Options

| Option | Type | Description |
|--------|------|-------------|
| **values** | array | For static options. Entries can be objects with `value` and `label` keys (e.g. `[{ value: "option_1", label: "Option 1" }]`) or strings (e.g. `["Option 1"]`). String entries will use the same value for both value and label. |
| **multiple** | boolean | Allow selecting multiple values. |
| **creatable** | boolean | Allow creating new options that aren't in the predefined list. |
| **placeholder** | string | Custom placeholder text for the select input. |
| **fetch** | object | Configuration for autocomplete functionality through an API endpoint. |
| **fetch.url** | string | The API endpoint URL. |
| **fetch.method** | string | HTTP method (defaults to "GET"). |
| **fetch.query** | string | The query parameter name for the search term. |
| **fetch.headers** | object | Custom headers to send with the request. |
| **fetch.path** | string | Dot notation path to the results array in the response. |
| **fetch.value** | string | Field to use as option value from each result (defaults to "id"). |
| **fetch.label** | string | Field to use as option label from each result (defaults to "name"). |
| **fetch.minlength** | number | Minimum number of characters before triggering search. |

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
      query: q
      path: items
      value: login
      label: login
      minlength: 2
      headers:
        Accept: application/vnd.github.v3+json
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
```
