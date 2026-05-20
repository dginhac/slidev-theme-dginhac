<!--
  Usage:

```md
---
layout: three-cols
---

First column content (default slot)

::center::

Middle column content

::right::

Right column content
```
-->

<script setup lang="ts">
const props = defineProps({
  class: { type: String },
  layoutClass: { type: String },
})
</script>

<template>
  <div
    class="slidev-layout three-columns w-full h-full grid grid-cols-3 gap-6"
    :class="props.layoutClass"
  >
    <div class="col-left" :class="props.class">
      <slot />
      <slot name="left" />
    </div>
    <div class="col-center" :class="props.class">
      <slot name="center" />
    </div>
    <div class="col-right" :class="props.class">
      <slot name="right" />
    </div>
  </div>
</template>
