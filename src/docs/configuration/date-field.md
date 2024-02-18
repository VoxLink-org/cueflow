---
title: Date field
---

Either a date or a date and time field, similar to the [date](ttps://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) and [datetime](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local) inputs.

## Options

| Option | Type | Description |
| - | - | - |
| **`format`** | `string` | The date (or datetime) format (e.g. `DD/MM/YYYY`). This should be a valid [Day.js format string](https://day.js.org/docs/en/parse/string-format#list-of-all-available-parsing-tokens). Default to `YYYY-MM-DD`, or `YYYY-MM-DDTHH:mm` if `time` is `true` (see below). |
| **`time`** | `string` | If `true`, the field will allow the user to pick a date and a time using a `<datetime>` field. Default is `false`. |
| **`min`** | `string` | The earliest date to accept. If undefined, there is no min date. **This must be formatted as defined in the `format` option**. |
| **`max`** | `string` | The latest date to accept. If undefined, there is no max date. **This must be formatted as defined in the `format` option**. |
| **`step`** | `string` | Defines the granularity of values: number of days, or number of seconds if `time` is set to `true`. Behavior is the same as step for [date](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) and [datetime](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local) inputs. |

## Examples

A simple example for a date that must be be December 24, 2023 or after:

```yaml
- name: created
  label: Creation date
  type: date
  options:
    format: DD-MM-YYYY
    min: 24-12-2023 # Must be on or after December 24, 2023. Notice it uses the format defined above.
```

Another example with time:

```yaml
- name: start_time
  label: Starts at 
  options:
    time: true
    format: DD-MM-YYYY HH:mm
```
