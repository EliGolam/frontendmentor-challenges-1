<script setup>
import AppSideNav from './components/AppSideNav.vue';
import SideNavToggle from './components/SideNavToggle.vue';
</script>

<template>

  <div class="flex row-reverse content-between">
    <!-- Router Views -->
    <RouterView class="flex-grow page-view" />

    <!-- Side Nav -->
    <SideNavToggle :nav-open="navOpen" @toggleSideNav="(toggle) => navOpen = toggle" />
    <AppSideNav :class="{ active : navOpen }" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      navOpen: false,
    }
  }, 

  // methods: {
  //   toggleSideNav() {
  //     this.navOpen = !this.navOpen;
  //   }
  // }
}
</script>

<style lang="scss" scoped>

</style>