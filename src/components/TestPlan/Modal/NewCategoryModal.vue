<template>
  <q-modal v-model="newCategoryModal.isVisible" @escape-key="close()" no-backdrop-dismiss :content-css="{minWidth: '35vw', minHeight: '30vh'}" no-refocus>
    <q-modal-layout>
      <q-toolbar slot="header">
        <q-toolbar-title>
          Create New Category
        </q-toolbar-title>
      </q-toolbar>
      <div class="q-pa-sm">
        <div class="row gutter-xs">
          <div class="col-4"><q-input v-model="cat_name" float-label="Name *"/></div>
          <div class="col-5"><q-input v-model="cat_workitems" float-label="Work Items" placeholder="space separator, ex: 1001 1102" /></div>
          <div class="col-3"><q-input :value="currentUser.name" float-label="Author" readonly/></div>
        </div>
        <div class="row">
          <div class="col-12">
            <q-input
            v-model="cat_description"
            type="textarea"
            float-label="Description"
            :max-height="100"
            rows="2"
            class="q-mb-sm"
          />
          </div>
        </div>
        <div class="row justify-end">
          <div class="col-7">
            <q-btn
              outline 
              color="primary"
              label="Cancel"
              class="float-right"
              @click="cancel()"
            />
            <q-btn
              outline 
              color="primary"
              label="Create"
              class="float-right q-mr-sm"
              @click="create(close=false)"
              :disable="$v.$invalid"
            />
            <q-btn
              outline 
              color="primary"
              label="Create & Close"
              class="float-right q-mr-sm"
              @click="create(close=true)"
              :disable="$v.$invalid"
            />
          </div>
        </div>
      </div>
    </q-modal-layout>
  </q-modal>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import { mapGetters, mapActions, mapState  } from "vuex"
export default {
  name: "new-category-modal",
  data() {
    return {
      opened: true,
      cat_name: '',
      cat_workitems: '',
      cat_description: '',
    };
  },
  validations: {
    cat_name: { required }
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
    cancel () {
      this.$store.dispatch("testplan/hideNewCategoryModal");
    },
    create (close) {
      if(close) {
        console.log('Create and Close')
      }else{
        console.log(this.$v)
        console.log('Create')
      }
    }
  },
  computed: {
    newCategoryModal:{
      get () {
        return this.$store.state.testplan.newCategoryModal
      }
    },
    ...mapGetters({ currentUser: 'auth/currentUser' })
  }
}
</script>

<style scoped>
  .q-item-side {
    min-width: initial
  }
</style>
