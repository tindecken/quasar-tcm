<template>
  <q-layout view="hHh LpR fFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
      >
        <q-toolbar-title>
          <!-- Quasar App
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div> -->
        </q-toolbar-title>
        <span>Hi, {{ currentUser.name }}</span>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="mdi-settings" />
        </q-btn>
      </q-toolbar>
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
      <router-view />
    </q-page-container>
    <q-layout-footer>
      <q-toolbar color="primary">
        <q-toolbar-title>
          Footer
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-footer>
  </q-layout>
</template>

<script>
import { mapGetters } from 'vuex'

import { openURL } from 'quasar'

export default {
  name: 'home',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    openURL,
    logout () {
      this.$router.push('/logout')
    }
  },
  computed: {
			...mapGetters({ currentUser: 'currentUser' })
		}
}
</script>

<style>
</style>
