<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import * as Database from './backend/Database'
import { mapGetters } from 'vuex'
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
      }else if(this.currentUser){
        this.$router.push('/home')
      }
    }
  },
  computed: {
    ...mapGetters({ 
      currentUser: 'auth/currentUser',
    })
  },
  created () {

  }
}
</script>

<style>
  #q-app { height: 100% }
</style>
