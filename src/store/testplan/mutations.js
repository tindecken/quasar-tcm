/*
export function someMutation (state) {
}
*/
import Vue from 'vue'
import * as utils from '../../utils/index'

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

export const createCategory = (state, payload) => {
  Vue.set(state.treeViewData, state.treeViewData.length, payload)
}

//START - show/hidden dialogs

//New Category Modal
export const showNewCategoryModal = (state, payload) => {
  state.newCategoryModal.isVisible = true
}

export const hideNewCategoryModal = (state, payload) => {
  state.newCategoryModal.isVisible = false
}

export const toogleNewCategoryModal = (state) => {
  state.newCategoryModal.isVisible = !state.newCategoryModal.isVisible
}

//Edit Category Modal
export const showEditCategoryModal = (state, payload) => {
  state.editCategoryModal.isVisible = true
}

export const hideEditCategoryModal = (state, payload) => {
  state.editCategoryModal.isVisible = false
}

export const toogleEditCategoryModal = (state) => {
  state.editCategoryModal.isVisible = !state.editCategoryModal.isVisible
}

//END - show/hidden dialogs
