/*
export function someMutation (state) {
}
*/
import Vue from 'vue'
export const changeOpenedTCs = (state, payload) => {
  state.openedTCs = payload
}

export const changeSelectedNode = (state, payload) => {
  state.selectedNode = payload
}

export const changeTreeViewData = (state, payload) => {
  state.treeViewData = payload
}

export const changeActiveTab = (state, payload) => {
  state.activeTab = payload
}

export const pushOpenedTCs = (state, payload) => {
  console.log('state', state)
  console.log('payload', payload)
  Vue.set(state.openedTCs, state.openedTCs.length, payload);
}
