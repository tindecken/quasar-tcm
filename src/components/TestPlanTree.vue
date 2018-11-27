<template>
  <div>
  <q-input
    color="secondary"
    stack-label="Filter"
    v-model="tickFilter"
    class="q-ma-none"
    clearable
  />
  <span>{{selected}}</span>
  <q-tree
    :nodes="tlTreeViewData"
    node-key="_id"
    label-key="name"
    tick-strategy="leaf"
    :ticked.sync="ticked"
    :filter="tickFilter"
    :selected.sync="selected"
    default-expand-all
  />
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState  } from "vuex"
import { getTestPlanTree, createCategory } from "../backend/testplan";

export default {
  name: "test-plan-tree",
  data() {
    return {
      ticked: [],
      tickFilter: '',
      selected: null
    };
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    }
  },
  created () {
    getTestPlanTree().then((result) => {
      this.tlTreeViewData = result
    })
  },
  computed: {
    tlTreeViewData:{
      get () {
        return this.$store.state.testplan.treeViewData
      },
      set(value) {
        this.$store.dispatch("testplan/changeTreeViewData", value);
      }
    },
  }      
};
</script>

<style scoped>
</style>
