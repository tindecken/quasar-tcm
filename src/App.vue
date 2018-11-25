<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import * as Database from './backend/Database'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'App',
  updated () {
    this.checkCurrentLogin()
  },
  async created () {
    await Database.get().then(() => {
    })  
    this.checkCurrentLogin()
  },
  methods: {
    checkCurrentLogin(){
      if(!this.currentUser && this.$router.path !== '/'){
        this.$router.push('/login')
      }
    }
  },
  computed: {
    ...mapGetters({ 
        currentUser: 'currentUser',
        theme: 'theme'
      })
  }
}
</script>

<style>
  #q-app { height: 100% }
</style>
