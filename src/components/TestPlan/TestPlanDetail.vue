<template>
  <q-tabs v-model="activeTab" animated align="justify" color="transparent" text-color="primary" class="q-py-none">
    <q-tab v-for="testcase in openedTCs" :key="testcase._id" :name="testcase._id" slot="title" :label="testcase.name">
      <q-btn flat round dense icon="close" class="float-right"/>
    </q-tab>
    <q-tab-pane v-for="testcase in openedTCs" :key="testcase._id" :name="testcase._id" keep-alive>
      <test-plan-tab :testcase="testcase"></test-plan-tab>
    </q-tab-pane>
  </q-tabs>
</template>

<script>
import TestPlanTab from './TestPlanTab'
export default {
  name: "test-plan-detail",
  components: { TestPlanTab },
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
  computed: {
    openedTCs: {
      set (value) {
        this.$store.dispatch('testplan/changeOpenedTCs', value)
      },
      get () {
        return this.$store.state.testplan.openedTCs
      }
    },
    activeTab: {
      set (value) {
        this.$store.dispatch('testplan/changeActiveTab', value)
      },
      get () {
        return this.$store.state.testplan.activeTab
      }
    },
  }   
};
</script>

<style scoped>
  
</style>
