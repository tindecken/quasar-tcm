<template>
  <div>
    Test Plan Tree
  </div>
</template>

<script>
export default {
  name: "test-plan-tree",
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
