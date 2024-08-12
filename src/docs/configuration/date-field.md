---
title: Date field
---

Either a date or a date and time field, similar to the [date](ttps://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) and [datetime](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local) inputs.

## Options

| Option | Type | Description |
| - | - | - |
| **`format`** | `string` | The date (or datetime) format (e.g. `dd/MM/yyyy`). This should be a valid [date-fns format string](https://date-fns.org/v3.6.0/docs/format). Default to `yyyy-MM-dd`, or `yyyy-MM-dd'T'HH:mm` if `time` is `true` (see below). |
| **`time`** | `string` | If `true`, the field will allow the user to pick a date and a time using a `<datetime>` field. Default is `false`. |
| **`min`** | `string` | The earliest date to accept. If undefined, there is no min date. **This must be formatted as a standard [min value for a date input (i.e. `YYYY-MM-DD`)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#min) or [min value for a datetime input (i.e. `YYYY-MM-DDThh:mm`)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#min)**. |
| **`min`** | `string` | The latest date to accept. If undefined, there is no max date. **This must be formatted as a standard [max value for a date input (i.e. `YYYY-MM-DD`)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#max) or [max value for a datetime input (i.e. `YYYY-MM-DDThh:mm`)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#max)**. |
| **`step`** | `string` | Defines the granularity of values: number of days, or number of seconds if `time` is set to `true`. Behavior is the same as step for [date](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date) and [datetime](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local) inputs. |

## Examples

A simple example for a date that must be be December 24, 2023 or after:

```yaml
- name: created
  label: Creation date
  type: date
  options:
    format: dd-MM-yyyy
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
