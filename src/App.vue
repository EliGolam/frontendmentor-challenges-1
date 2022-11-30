<script setup>
import AppSideNav from '@/components/AppSideNav.vue';
</script>

<template>
  <div class="flex row-reverse content-between">
    <!-- Router Views -->
    <RouterView class="flex-grow page-view container" />

    
    <!-- Side Nav -->
    <!-- <SideNavToggle 
      :nav-open="navOpen" 
      @toggleSideNav="(toggle) => navOpen = toggle" 
    /> -->
    
    <AppSideNav />
  </div>
</template>



<style lang="scss" scoped>

</style>