/*
export function someMutation (state) {
}
*/

export const changeTab = (state, payload) => {
  state.selectedTab = payload
}

export const changeOpenedTCs = (state, payload) => {
  state.openedTCs = payload
}

export const changeSelectedTC = (state, payload) => {
  state.selectedTC = payload
}

export const changeTreeViewData = (state, payload) => {
  state.treeViewData = payload
}