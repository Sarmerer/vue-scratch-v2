<template>
  <pre class="scratch__code-preview" v-text="code"></pre>
</template>

<script>
import { Scratch } from '../types/scratch'

export default {
  name: 'ScratchCodePreview',

  props: {
    scratch: {
      type: Scratch,
      required: true,
    },
  },

  computed: {
    code() {
      return this.scratch.generator.code
    },
  },
}
</script>

<style lang="scss" scoped>
.scratch__code-preview {
  flex: 0 0 200px;
  padding-left: 10px;
  background-color: ghostwhite;
  font-size: 12px;
}
</style>
