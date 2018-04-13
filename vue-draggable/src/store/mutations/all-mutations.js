import * as types from '../mutation-types'

export const mutations = {
  // data = {element, newIndex}
  [types.UPDATE_FORM_LIST] (state, data) {
    var oldElement = data.data.element
    let newElement = JSON.parse(JSON.stringify(oldElement))
    var newIndex = data.data.newIndex
    console.log(data, 'mutations Update form list')
    state.formListState.splice(newIndex, 0, newElement)
  },
  [types.TEST_CHANGE_VALUE] (state, data) {
    state.formList[0].data.helpText = 'setw'
  }
}
