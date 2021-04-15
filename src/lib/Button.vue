<template>
  <button class="jellyfish-btn" :class="`theme-${theme}`">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    theme:{
        type:String,
        default:'default'
    }
  },
};
</script>

<style lang="scss" scoped>

</style>