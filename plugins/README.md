# PLUGINS

* This directory contains Javascript plugins that you want to run before mounting the root Vue.js application.

## API

```javascript
// READ - Items
this.$readItems('model')

// READ - Item
this.$readItem('model', 'id')

// CREATE - Item
this.$createItem('model', { data })

// UPDATE - Item
this.$updateItem('model', 'id', { data })

// DELETE - Item
this.$deleteItem('model', 'id')
```


## Icons

```html
<v-icon name="icon-name" />
```

[Nuxt.js - Plugins](https://nuxtjs.org/guide/plugins)
