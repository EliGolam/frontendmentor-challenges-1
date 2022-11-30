<script setup>
import SideNavToggle from '@/components/SideNavToggle.vue';
</script>


<template>
  <nav id="side-nav" class="side-nav" role="navigation" :class="{ active : navOpen }" >
    <SideNavToggle 
      :nav-open="navOpen" 
      @toggleSideNav="(toggle) => navOpen = toggle" 
    />

    <ul id="nav-list" class="nav-list">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
    </ul>
  </nav>
</template>


<script>
  export default {
    data() {
      return {
        navOpen: false,
      }
    }, 
  }
</script>

<style lang="scss" scoped>

</style>