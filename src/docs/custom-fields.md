---
title: Custom fields
order: 4
---
Fields define how content gets displayed and edited. Pages CMS comes with a few built-in fields, but you can also add your own custom fields.

## The fields folder

All fields are saved in the `src/fields` folder:

```Plaintext
fields/
├─ core/
│  ├─ boolean/
│  ├─ code/
│  ├─ date/
│  ├─ image/
│  ├─ number/
│  ├─ ...
├─ custom/
│  ├─ README.md
├─ registry.js
```

*   `core/` is where all the built-in fields are saved (e.g. boolean, code, date). The names of the fields subfolders match the types used in the configuration file (e.g. `type: boolean`).
    
*   `custom/` (empty by default) is used to host the subfolders for custom fields.
    
*   `registry.js` is a helper function to create registries for the fields.

## Individual fields

Each field folder (e.g. `fields/core/boolean`) should include an `index.ts` or `index.tsx` file that can export:

- `schema`: a [Zod schema](https://zod.dev/) used to process the field when saving. This is used for validation and format coertion.
- `supportsList`: a boolean defining whether or not the field handles lists internally rather than using the default list behavior. Check `fields/core/image` for an example.
- `read`: a function used to convert the field value when reading from a file (e.g. `fields/core/date` will convert from the `format` defined for that date field to a standard ISO 8601 date/datetime).
- `write`: a function used to convert the field value when writing to a file (e.g. `fields/core/date` will convert from a standard ISO 8601 date/datetime to the `format` defined for that date field).
- `EditComponent`: a React component used to edit the field.
- `ViewComponent`: a React component used to display the field in a collection.
- `defaultValue`: defines the default value for the field.

## Example: `fields/core/boolean`

Let's have a look at the `fields/core/boolean` folder, which defines boolean fields:

```Plaintext
fields/
├─ core/
│  ├─ boolean/
│  │  ├─ edit-component.tsx
│  │  ├─ index.tsx
│  │  ├─ view-component.tsx
```

### Edit component

`edit-component.tsx` is the React component used in the editor (for both creating or editing content). It is called by `components/entry/entry-form.tsx` via the `editComponents` registry.

In the case of the boolean field, it is a simple toggle switch:

```javascript
"use client";

import { forwardRef } from "react";
import { Switch } from "@/components/ui/switch";

const EditComponent = forwardRef((props: any, ref: React.Ref<HTMLInputElement>) => {
  return (
    <div>
      <Switch
        {...props}
        ref={ref}
        checked={props.value}
        onCheckedChange={props.onChange}
      />
    </div>
  );
});

export { EditComponent };
```

### View component

`view-component.tsx` is the React component used to display the field value in collections. It is called by `components/collection/collection-view.tsx` via the `viewComponents` registry.

For boolean fields, we displayed a colored chip with the labels "True" or "False" if the value is defined, or nothing otherwise (`undefined` or `null`):

```javascript
"use client";

const ViewComponent = ({ value }: { value: boolean}) => {
  return (
    <>
      {value == null
        ? null
        : value
          ? <span className="inline-block rounded-md bg-primary text-primary-foreground px-2 py-0.5 text-xs font-medium">True</span>
          : <span className="inline-block rounded-md border bg-muted px-2 py-0.5 text-xs font-medium">False</span>
      }
    </>
  );
};

export { ViewComponent };
```

### Field registration

`index.tsx` registers the field. **It is required for your field to work**.

For the boolean field, this means exporting the edit/view components, the default value and the schema:

```javascript
import { z } from "zod";
import { Field } from "@/types/field";
import { EditComponent } from "./edit-component";
import { ViewComponent } from "./view-component";

const defaultValue = false;

const schema = (field: Field) => {
  let zodSchema = z.coerce.boolean();

  return zodSchema;
};

export { EditComponent, ViewComponent, defaultValue, schema };
```

Notice that we define a default value (`false`) and coerce the field to a boolean in the schema function. This will ensure we're saving a boolean in the file, and not a string.

In some cases (e.g. the image field), we may also indicate support for lists with `supportsList`, and define `read` and `write` functions to convert the input and output values (when reading from or writing to the file).