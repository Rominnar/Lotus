<template>
  <section id="lotus-scroll">
    <el-scrollbar style="width: 100%">
      <lotus-header class="lotus-header"></lotus-header>
      <router-view />
    </el-scrollbar>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import lotusHeader from './components/lotusHeader.vue';

export default defineComponent({
  name: 'App',
  components: {
    lotusHeader,
  },
});
</script>

<style lang="scss">
@import "../../assets/scss/_handle";
#app {
  @include global_transition("global-transition");
  height: 100%;
  width: 100%;
  -webkit-app-region: no-drag;
  background: url("./../../assets/images/macos-big-sur.jpg");
  background-size: 100% 100%;
  background-position: left center;
}

[data-theme="light"] #app:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  border-radius: 12px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.72) 0%,
    rgba(255, 255, 255, 0.45) 100%
  );
  -webkit-backdrop-filter: saturate(3);
  backdrop-filter: saturate(3);
}

#app #lotus-scroll {
  min-height: 100vh;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}
#app #lotus-header{
  position: sticky;
  top: 0;
}
</style>
