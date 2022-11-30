<template>
  <div class="side-nav-toggle">
    <font-awesome-icon icon="fa-solid fa-angle-left" v-if="navOpen" />
    <font-awesome-icon icon="fa-solid fa-bars" v-else />
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
  }
}
</script>

