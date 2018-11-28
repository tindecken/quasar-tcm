/*
export function someAction (context) {
}
*/

export const changeTab = ({commit}, payload) => {
  commit('changeTab', payload)
}

export const changeOpenedTCs = ({commit}, payload) => {
  commit('changeOpenedTCs', payload)
}

export const changeSelectedNode = ({commit}, payload) => {
  commit('changeSelectedNode', payload)
}

export const changeTreeViewData = ({commit}, payload) => {
  commit('changeTreeViewData', payload)
}

