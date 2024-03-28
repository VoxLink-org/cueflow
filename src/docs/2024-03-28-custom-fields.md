---
title: Custom fields
order: 4
---
Fields are at the center of everything in Pages CMS; they how we edit and display the content.

Pages CMS comes with a few built-in fields, but you can also add your own custom fields.

## The fields folder

All fields are saved in the `src/fields` folder:

```
src/
├─ fields/
│  ├─ core/
│  │  ├─ boolean/
│  │  ├─ code/
│  │  ├─ date/
│  │  ├─ image/
│  │  ├─ number/
│  │  ├─ ...
│  ├─ custom/
│  │  ├─ README.md
│  ├─ fieldRegistry.js
```

Let's look at what is sitting at the root of `src/fields`:

*   `core/` is where all the built-in fields are saved (e.g. boolean, code, date). The names of the fields subfolders match the types used in the configuration file (e.g. `type: boolean`).
    
*   `custom/` (empty by default) is used to host the subfolders for custom fields.
    
*   `fieldRegistry.js` is a helper function to register all the files declared in the various fields, core and custom, and make it available via a registry to Pages CMS (used in the collection and editor).
    

## An individual field folder

Let's have a look at the `src/fields/core/boolean` folder, which defines boolean fields:

```
src/
├─ fields/
│  ├─ core/
│  │  ├─ boolean/
│  │  │  ├─ Edit.vue
│  │  │  ├─ index.js
│  │  │  ├─ sort.js
│  │  │  ├─ View.vue
```

### Edit component

`Edit.vue` is the Vue component used in the editor (for both creating or editing content). It is called by `src/components/file/Editor.vue` via the `src/components/files/Field.vue` component.

In the case of the boolean field, it is a simple toggle switch:

```
<template>
  <div>
    <label class="relative inline-flex items-center cursor-pointer">
      <input
        class="sr-only peer"
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
      />
      <div class="w-11 h-6 bg-neutral-200 dark:bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white dark:peer-checked:after:border-neutral-950 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white dark:after:bg-neutral-950 after:border-neutral-100 dark:after:border-neutral-800 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-neutral-950 dark:peer-checked:bg-white transition-all"></div>
    </label>
  </div>
  
</template>

<script setup>
const props = defineProps({
  field: Object,
  modelValue: Boolean
});
</script>
```

The only requirement is that you must have exactly 2 props:

*   `field`: the field schema (e.g. `{ name: "published", label: "Published", type: "boolean" }`). This may include field options (`field.options`) if any are defined in the configuration file.
    
*   `value`: the value of the field (e.g. `true`).
    

Make sure to emit the updated modelValue with `update:modelValue` if needed.

### View component

`View.vue` is the Vue component used to display the field value in collections. It is called by `src/components/Collection.vue`.

For boolean fields, we displayed colored chips with the labels "True" or "False" depending on whether the value is truthy or falsy (which includes `undefined` and `null`):

```
<template>  
  <div class="!inline" :class="props.value ? 'chip-primary' : 'chip-secondary'">{{ props.value ? 'True' : 'False' }}</div>
</template>

<script setup>
const props = defineProps({
  field: Object,
  value: [String, Number, Boolean, Array, Object],
});
</script>
```

The only requirement is that you must have exactly 2 props:

*   `field`: the field schema (e.g. `{ name: "published", label: "Published", type: "boolean" }`). This may include field options (`field.options`) if any are defined in the configuration file.
    
*   `value`: the value of the field (e.g. `true`).
    

### Sort function

`sort.js` should returns a single function that helps us sorting values in a collection.

For boolean fields, we have to account for a few edge cases (value is `undefined`, `null`, not a boolean...):

```javascript
const sort = (a, b, fieldSchema = null) => {
  // Convert booleans to integers to help with comparison with null/undefined
  const valA = a ? 2 : 1;
  const valB = b ? 2 : 1;
  let comparison = 0;
  if (valA < valB) {
    comparison = -1;
  } else if (valA > valB) {
    comparison = 1;
  }
  return comparison;
};

export default sort;
```

### Field registration

`index.js` helps us add the files to the fields registry. **It is required for your field to work**.

For the boolean field, this means returning the Edit component as `EditComponent`, the View component as `ViewComponent` and the sort function as `sortFunction`:

```javascript
import EditComponent from './Edit.vue';
import ViewComponent from './View.vue';
import sortFunction from './sort.js';

export default {
  EditComponent,
  ViewComponent,
  sortFunction,
};
```

`EditComponent` is required (along with the `index.js` file), everything else is optional.

In some cases (e.g. the image field), we may also return `supportsList: true` to let Pages CMS know that the field will handle the case of `list: true` itself in the Edit component. This allows us to have a more elaborate strategy for certain cases.

## Creating your own field

1.  **Add the field subfolder**: assuming you want your field's type to be `my-field` (e.g. `type: my-field` in the configuration file), you would create a `src/fields/custom/my-field/` folder.
    
2.  **Add the Edit component and register the field**: the `index.js` file and the Edit component are the only mandatory pieces. You can name your Edit component whatever you like (as long as register it as `EditComponent` in the `index.js` file), but the convention would be to use `Edit.vue`.
    
3.  **(Optional) Add the View component and sort function**: again, you can name them whatever you want but you'll need to register them in `index.js` as `ViewCompoent` and `sortFunction`. If you do not provide either of these, your value will be treated as a string in collections:
    
    1.  The value will be displayed plain text (e.g. a boolean would display `true` or `false` as a string).
        
    2.  Sorting will be done as a string (e.g. `true` would come after `false`).