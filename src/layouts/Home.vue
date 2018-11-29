<template>
  <q-layout view="hHh LpR fFf">
    <q-layout-header>
      <app-header></app-header>
    </q-layout-header>

    <q-layout-drawer
      side="right"
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-item>
          <q-item-side icon="mdi-theme-light-dark" />
          <q-item-main label="Switch Theme"/>
        </q-item>
        <q-item @click.native="logout">
          <q-item-side icon="mdi-power" />
          <q-item-main label="Logout"/>
        </q-item>
      </q-list>
    </q-layout-drawer>
    <q-page-container>
      <Split :gutterSize="4">
        <SplitArea :size="25">
          <q-tabs class="shadow-1" animated align="justify" color="primary" v-model="selectedTab">
            <q-tab name="testplan" slot="title" label="Test Plan" />
            <q-tab name="testlab" slot="title" color="secondary" label="Test Lab" />
            <q-tab-pane keep-alive name="testplan"><test-plan-tree></test-plan-tree></q-tab-pane>
            <q-tab-pane keep-alive name="testlab"><test-lab-tree></test-lab-tree></q-tab-pane>
          </q-tabs>
        </SplitArea>
        <SplitArea :size="75">
          <keep-alive>
            <component v-bind:is="currentTabComponent"></component>
          </keep-alive>
        </SplitArea>
      </Split>
    </q-page-container>
    <q-layout-footer>
      <app-footer></app-footer>
    </q-layout-footer>
  </q-layout>
</template>

<script>
import AppFooter from '../components/AppFooter'
import AppHeader from '../components/AppHeader'
import TestPlanTree from '../components/TestPlan/TestPlanTree'
import TestPlanDetail from '../components/TestPlan/TestPlanDetail'
import TestLabTree from '../components/TestLab/TestLabTree'
import TestLabDetail from '../components/TestLab/TestLabDetail'
import { mapGetters } from 'vuex'

import { openURL } from 'quasar'

export default {
  name: 'home',
  components: { AppFooter, AppHeader, TestPlanTree, TestLabTree, TestPlanDetail, TestLabDetail },
  data () {
    return {
      leftDrawerOpen: false,
    }
  },
  methods: {
    openURL,
    logout () {
      this.$router.push('/logout')
    },
    openLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    }
  },
  created(){
    this.$root.$on("openLeftDrawer", this.openLeftDrawer);
  },
  computed: {
    currentTabComponent: function () {
      if(this.$store.state.global.selectedTab === 'testplan'){
        return TestPlanDetail
      }else if(this.$store.state.global.selectedTab === 'testlab'){
        return TestLabDetail
      }
    },
    selectedTab: {
      get () {
        return this.$store.state.global.selectedTab
      },
      set (val) {
        this.$store.commit('global/changeTab', val)
      }
    }
  }      
}
</script>

<style scoped>
  .q-layout-footer {
    height: 22px;
  }
  .q-layout-page-container {
    height: 100vh;
  }
  
</style>
