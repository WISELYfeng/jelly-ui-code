<template>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="visible"></Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
export default {  
  components:{
    Dialog,
    Button
  },
  setup(){
    const visible = ref(false)
    const toggle = () =>{
      visible.value = !visible.value
    }
    return {
      visible,
      toggle
    }
  }
}
</script>