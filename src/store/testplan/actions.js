/*
export function someAction (context) {
}
*/
export const changeOpenedTCs = ({commit, state}, newValue) => {
  commit('changeOpenedTCs', newValue)
  return state.openedTCs
}

export const changeSelectedNode = ({commit}, payload) => {
  commit('changeSelectedNode', payload)
}

export const changeTreeViewData = ({commit}, payload) => {
  commit('changeTreeViewData', payload)
}

export const changeActiveTab = ({commit}, payload) => {
  commit('changeActiveTab', payload)
}
