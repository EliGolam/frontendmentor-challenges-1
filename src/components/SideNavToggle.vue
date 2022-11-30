<template>
  <div class="side-nav-toggle">
    <button v-if="navOpen" @click="toggleSideNav()">
      <font-awesome-icon icon="fa-solid fa-angle-left" />
    </button>

    <button v-else @click="toggleSideNav()">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },

  props: {
    navOpen: Boolean,
  },

  methods: {
    toggleSideNav() {
      this.$emit('toggleSideNav', !this.navOpen); 
    }
  }
}
</script>

