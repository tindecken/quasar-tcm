<template>
  <div>
    {{testcase}}
  </div>
</template>

<script>
export default {
  name: "test-plan-tab",
  props: ['testcase'],
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
