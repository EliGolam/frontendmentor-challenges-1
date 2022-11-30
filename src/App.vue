<script setup>
import AppSideNav from './components/AppSideNav.vue';
</script>

<template>

  <div class="flex row-reverse content-between">
    <!-- Router Views -->
    <RouterView class="flex-grow page-view" />

    <!-- Side Nav -->
    
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

  methods: {
    toggleNav() {
      this.navOpen = !this.navOpen;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>