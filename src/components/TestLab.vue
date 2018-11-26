<template>
  <div>
    Test Plan
  </div>
</template>

<script>
export default {
  name: "test-lab",
  data() {
    return {};
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    }
  },
  created () {
  },   
};
</script>

<style scoped>
  
</style>
