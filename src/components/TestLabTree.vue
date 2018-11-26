<template>
  <div>
    Test Lab Tree
  </div>
</template>

<script>
export default {
  name: "test-lab-tree",
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
