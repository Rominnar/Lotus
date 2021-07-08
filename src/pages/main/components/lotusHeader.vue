<template>
  <header class="lotus-header">
    <section class="lotus-drag-trigger">
      <div class="un-resize-zone"></div>
      <div class="resize-zone"></div>
    </section>
    <section class="lotus-header-content">

    </section>
  </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'lotusHeader',
});
</script>

<style lang="scss" scoped>
.lotus-header {
  width: 100%;
  position: relative;

  .lotus-drag-trigger {
    .un-resize-zone {
      width: 200px;
      height: 4px;
    }
    .resize-zone {
      flex: 1;
      height: 4px;
    }
    width: 100%;
    display: flex;
    overflow: hidden;
    -webkit-app-region: no-drag;
  }
}
</style>
