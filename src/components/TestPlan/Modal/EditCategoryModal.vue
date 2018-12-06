<template>
  <q-modal v-model="editCategoryModal.isVisible" @escape-key="cancel()" no-backdrop-dismiss :content-css="{minWidth: '35vw', minHeight: '30vh'}" no-refocus>
    <q-modal-layout>
      <q-toolbar slot="header">
        <q-toolbar-title>
          Edit Category
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
              label="Save"
              class="float-right q-mr-sm"
              @click="edit(close=false)"
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
  name: "edit-category-modal",
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
    clearForm() {
      this.$v.$reset()
      this.cat_name = ''
      this.cat_workitems = ''
      this.cat_description = ''
    },
    open(link) {
      this.$electron.shell.openExternal(link);
    },
    cancel () {
      this.$store.dispatch("testplan/hideEditCategoryModal")
      this.clearForm()
    },
    create (close) {
      this.$store.dispatch('testplan/editCategory', { 
        name: this.cat_name, 
        description: this.cat_description, 
        user: this.currentUser.email, 
        type: 'category', 
        _id: this.cat_name, 
        testsuites: [], 
        status: '', 
        work_items: this.cat_workitems
      })
      if(close) {
        this.cancel()
      }else{
        console.log(this.$v)
        console.log('Create')
      }
      this.clearForm()
    }
  },
  computed: {
    ...mapGetters({ 
      editCategoryModal: 'testplan/editCategoryModal',
      currentUser: 'auth/currentUser',
      tlTreeViewData: 'testplan/treeViewData'
    })
  }
}
</script>

<style scoped>
  .q-item-side {
    min-width: initial
  }
</style>
