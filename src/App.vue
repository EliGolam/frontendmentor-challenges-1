<script setup>
import AppSideNav from '@/components/AppSideNav.vue';
</script>

<template>
  <div class="flex row-reverse content-between gap-3">
    <!-- Router Views -->
    <RouterView class="flex-grow page-view container" />
    
    <AppSideNav />
  </div>
</template>



<style lang="scss" scoped>

</style>