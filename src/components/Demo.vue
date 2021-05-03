<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
      <Button @click="showCode" v-else>查看代码</Button>
    </div>
      <div class="demo-code" v-if="codeVisible" :class="{ shake: noActivated }">
        <pre
          class="language-html"
          v-html="
            Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')
          "
        />
      </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import "prismjs";
import "prismjs/themes/prism.css";
const Prism = (window as any).Prism;
import {
  computed,
  ref
} from 'vue';
export default {
 
  components: {
    Button,
  },
  props: {
    component: Object,
  },
  setup(props) {
    const html = computed(() => {
      return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
    })
    const showCode = () => {
      codeVisible.value = true
      noActivated.value = true
      }
    const hideCode = () => { 
      codeVisible.value = false
      noActivated.value = false
    }
    const codeVisible = ref(false)
    const noActivated = ref(false)
    return {
      Prism,
      html,
      codeVisible,
      showCode,
      hideCode,
      noActivated
    }
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
.shake {
  animation: fade .5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

@keyframes fade {
  0%{
    opacity: 0%;
  }
  50%{
    opacity: 50%;
  }
  100%{
    opacity: 1;
  }
}
</style>