<template>
  <el-scrollbar id="lotus-scroll">
    <router-view />
    <lotus-header></lotus-header>
  </el-scrollbar>
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  @include global_background-color("global-color");
  @include global_transition("global-transition");
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
