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
  Vue.set(state.openedTCs, state.openedTCs.length, payload);
}

export const deleteOpenedTCs = (state, payload) => {
  Vue.delete(state.openedTCs, state.openedTCs.findIndex((tc)=> tc._id === payload));
}

export const showNewCategoryModal = (state, payload) => {
  state.newCategoryModal.isVisible = true
}

export const hideNewCategoryModal = (state, payload) => {
  state.newCategoryModal.isVisible = false
}

export const toogleNewCategoryModal = (state) => {
  state.newCategoryModal.isVisible = !state.newCategoryModal.isVisible
}

export const createCategory = (state, payload) => {
  Vue.set(state.treeViewData, state.treeViewData.length, payload)
}