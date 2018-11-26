<template>
  <q-toolbar color="primary">
    <span>Tindecken &copy; 2018</span>
  </q-toolbar>
</template>

<script>
export default {
  name: "app-footer",
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
