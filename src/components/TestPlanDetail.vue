<template>
  <div>
    Test Plan Detail
  </div>
</template>

<script>
export default {
  name: "test-plan-detail",
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
