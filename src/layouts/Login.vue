<template>
	<div>
    <q-input type="email" v-model="email" float-label="Email" autofocus :error="$v.email.$error" @blur="$v.email.$touch"/>
    <q-input v-model="password" type="password" float-label="Password" no-pass-toggle	:error="$v.password.$error" @blur="$v.password.$touch"/>
  </div>
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'

	import { mapGetters } from 'vuex'
	import { authen } from '../backend/services'

  export default {
    name: 'login',
		data: () => ({
      email: '',
      password: ''
    }),
    validations: {
      email: { required, email },
      password: {required}
    },
		updated () {
			this.checkCurrentLogin()
		},
		created () {
      this.checkCurrentLogin()
		},
    methods: {
      clear () {
        this.$refs.form.reset()
      },
			login() {
				authen(this.email, this.password).then((result)=> {
					if(result) this.loginSuccessful(result.token)
					else this.loginFailed()
				}).catch((err) => {
          console.log('err', err)
        })
			},
			loginSuccessful (token) {
				if (!token) {
					this.loginFailed()
					return
				}

				localStorage.token = token
				this.$store.dispatch('login')
				this.$router.replace(this.$route.query.redirect || '/home')
			},
			loginFailed () {
				this.form.error = 'Login failed!'
				this.$store.dispatch('logout')
				delete localStorage.token
			},
			checkCurrentLogin () {
				if (this.currentUser) this.$router.replace(this.$route.query.redirect || '/home')
			},
		},
		computed: {
			...mapGetters({ currentUser: 'currentUser'})
		}
  }
</script>

<style scoped>

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
