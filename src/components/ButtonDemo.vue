<template>
  <div>
    <Button>
      我是按钮
    </Button>
    <Button theme="info">
      我是按钮
    </Button>
    <Button theme="success">
      我是按钮
    </Button>
    <Button theme="warning">
      我是按钮
    </Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components:{
    Button
  }
}
</script>