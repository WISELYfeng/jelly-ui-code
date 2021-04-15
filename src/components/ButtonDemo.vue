<template>
  <div>
    <Button>
      按钮
    </Button>
    <Button theme="info" size="big">
      按钮
    </Button>
    <Button theme="success">
      按钮
    </Button>
    <Button theme="warning">
      按钮
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