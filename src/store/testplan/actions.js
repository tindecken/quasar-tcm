/*
export function someAction (context) {
}
*/
export const changeOpenedTCs = ({commit}, payload) => {
  commit('changeOpenedTCs', payload)
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

export const changeDebug = ({commit}, payload) => {
  commit('changeDebug', payload)
}