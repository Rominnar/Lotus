<template>
  <header class="lotus-header">
    <section class="lotus-drag-trigger">
      <div class="un-resize-zone"></div>
      <div class="resize-zone"></div>
    </section>
    <section class="lotus-header-content">
      <div class="user-ava">
        <a href=""><img src="./../../../assets/images/macos-big-sur.jpg" /></a>
      </div>
      <div class="handle-zone">
        <!-- <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg> -->
        <span class="divider"> |</span>
      </div>
      <div class="system-control">
        <span class="sc sc-min"></span>
        <span class="sc sc-max" ref="diff"></span>
        <span class="sc sc-close"></span>
      </div>
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
@import "./../../../assets/scss/_handle";
.lotus-header {
  width: 100%;
  position: relative;
  -webkit-app-region: drag;
  @include global_background-color("global-background-color");
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

  .lotus-header-content {
    display: flex;
    align-items: center;
    width: 100%;
    height: 56px;
    padding: 0 14px;
    font-size: 20px;
    box-sizing: border-box;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    @include global_border-color("global-border-color");
    .user-ava {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      overflow: hidden;
      -webkit-app-region: no-drag;
      transition: all 0.32s ease-in;
      a,
      img {
        width: 100%;
        height: 100%;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .handle-zone {
    flex: 1;
    align-items: center;
    height: 32px;
    line-height: 32px;
    margin-left: 240px;
    svg{
      height: 32px;
      width: 32px;
    }
    .divider{
      display: inline-block;
      margin-left: calc(100% - 20px);
      color:rgb(122, 125, 128);
    }
  }
  .system-control {
    width: 94px;

    .sc {
      display: inline-block;
      margin-left: 10px;
      border-radius: 50%;
      height: 18px;
      width: 18px;
      background-color: #ccc;
      -webkit-app-region: no-drag;
      transition: transform 0.38s ease, all 0.32s ease-in;
      cursor: pointer;
    }

    .sc:hover {
      transform: scale(1.16);
    }

    .sc.sc-min {
      background-color: #0077b6;
    }

    .sc.sc-max {
      background-color: #ffb703;
    }
    .sc.sc-normal {
      background-color: #06d6a0;
    }

    .sc.sc-close {
      background-color: #e63946;
    }
  }
}
</style>
