<template>
  <div>
  <q-input
    color="secondary"
    v-model="tickFilter"
    class="q-mb-sm"
    clearable
    type="text"
    autofocus
    placeholder="Type to search"
    :before="[{icon: 'mdi-magnify', handler () {}}]"
  />
  <q-btn outline dense color="primary" icon="mdi-arrow-collapse-all" size="md"  v-on:click="collapseAll()"/>
  <q-btn outline dense color="primary" icon="mdi-arrow-expand-all" size="md"  v-on:click="expandAll()"/>
  <q-tree
    default-expand-all
    :nodes="tlTreeViewData"
    node-key="_id"
    label-key="name"
    tick-strategy="leaf"
    :ticked.sync="ticked"
    :filter="tickFilter"
    :selected.sync="selectedNode"
    ref="tlTree"
  >
    <div slot="default-header" slot-scope="prop">
      <div v-on:click="selectNode(prop.node)">
        <q-icon name="mdi-folder-outline" v-if="prop.node.type === 'category'" size="18px" class="q-mr-sm" v-bind:class="prop.node.status"/>
        <q-icon name="mdi-file-document-box-outline" v-else-if="prop.node.type === 'testsuite'" size="18px" class="q-mr-sm"  v-bind:class="prop.node.status"/>
        <q-icon name="mdi-animation-outline" v-else-if="prop.node.type === 'testgroup'" size="18px" class="q-mr-sm" v-bind:class="prop.node.status"/>
        <q-icon name="mdi-format-list-bulleted" v-else-if="prop.node.type === 'testcase'" size="18px" class="q-mr-sm" v-bind:class="prop.node.status"/>
        <span>{{ prop.node.name }}</span>
      </div>
    </div>
  </q-tree>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState  } from "vuex"
import { getTestPlanTree, createCategory } from "../../backend/testplan"
import { isOpened } from "../../utils/index"

export default {
  name: "test-plan-tree",
  data() {
    return {
      ticked: [],
      tickFilter: '',
    };
  },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    },
    collapseAll: function () {
      this.$refs.tlTree.collapseAll()
    },
    expandAll: function () {
      this.$refs.tlTree.expandAll()
    },
    selectNode(node) {
      switch(node.type){
        case 'testcase':
          if(!isOpened(node._id, this.openedTCs)){
            this.$set(this.openedTCs, this.openedTCs.length, node)
          }
          this.focusTCTab(node._id)
          break
        default:
          this.debug = node
          this.focusTCTab('debug')
          break
      }
    },
    focusTCTab(tcID){
      this.activeTab = tcID
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
    selectedNode: {
      get () {
        return this.$store.state.testplan.selectedNode
      },
      set (val) {
        this.$store.commit('testplan/changeSelectedNode', val)
      }
    },
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
    debug: {
      set (value) {
        this.$store.dispatch('global/changeDebug', value)
      },
      get () {
        return this.$store.state.global.debug
      }
    },
  }      
};
</script>

<!-- Notice lang="stylus" -->
<style lang="stylus">
@import '~variables'

.q-icon {
  vertical-align: baseline;
}

.q-tree-node-header {
  padding: 0px
}

.pass {
  color: $positive;
}
.fail {
  color: $negative;
}
.partial {
  color: $warning;
}
.running {
  color: $info;
}
</style>
