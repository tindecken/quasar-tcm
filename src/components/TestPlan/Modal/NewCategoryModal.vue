<template>
  <q-modal v-model="newCategoryModal.isVisible" @escape-key="close()" no-backdrop-dismiss>
    <h4>Basic Modal</h4>
    <q-btn
      color="primary"
      @click="close()"
      label="Close"
    />
  </q-modal>
</template>

<script>
import { mapGetters, mapActions, mapState  } from "vuex"
export default {
  name: "new-category-modal",
  data() {
    return {
      opened: true
    };
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
    close () {
      this.$store.dispatch("testplan/hideNewCategoryModal");
    }
  },
  computed: {
    newCategoryModal:{
      get () {
        return this.$store.state.testplan.newCategoryModal
      }
    }
  } 
}
</script>

<style scoped>
  .q-item-side {
    min-width: initial
  }
</style>
