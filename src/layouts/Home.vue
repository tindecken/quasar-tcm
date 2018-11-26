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
          d  
        </SplitArea>
        <SplitArea :size="75">
          b
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

import { mapGetters } from 'vuex'

import { openURL } from 'quasar'

export default {
  name: 'home',
  components: { AppFooter, AppHeader },
  data () {
    return {
      leftDrawerOpen: false
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
}
</script>

<style scoped>
  .q-layout-footer {
    height: 22px;
  }
</style>
