<script setup>
import SideNavToggle from '@/components/SideNavToggle.vue';

import navLinks from '@/assets/data/nav-links.json';
</script>


<template>
  <nav id="side-nav" class="side-nav" role="navigation" :class="{ active : navOpen }" >
    <SideNavToggle 
      :nav-open="navOpen" 
      @toggleSideNav="(toggle) => navOpen = toggle" 
    />

    <ul id="nav-list" class="nav-list">
      <li v-for="link in navLinks">
        <RouterLink :to="link.path">{{ link.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>


<script>
  export default {
    data() {
      return {
        navOpen: false,
        navLinks: navLinks,
      }
    }, 
  }
</script>

<style lang="scss" scoped>

</style>