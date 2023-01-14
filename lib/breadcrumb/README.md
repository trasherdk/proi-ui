---

[proi-ui](https://github.com/specialdoom/proi-ui)

##### Breadcrumb component

### Usage

```sveltehtml
<script>
  import {Breadcrumb, BreadcrumbItem} from "@specialdoom/proi-ui";
</script>

<Breadcrumb>
  <BreadcrumbItem href="href" text="text" />
</Breadcrumb>
```

### Properties

#### BreadcrumbItem

| Property    | Description                                         | Type      | Default     |
| ----------- | --------------------------------------------------- | --------- | ----------- |
| `href`      | Set the `href` attribute for anchor tag. (required) | `string`  | `undefined` |
| `text`      | Inner text of anchor tag element. (required)        | `string`  | `undefined` |
| `isCurrent` | Whether the anchor tag represents current page .    | `boolean` | `false`     |
