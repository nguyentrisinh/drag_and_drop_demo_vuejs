import * as types from '../mutation-types'
// import { axiosApi } from '../../axios/axios-config'

export const actions = {
  // data = { data: {element, newIndex} }
  update_form_list (context, data) {
    console.log(data, 'actions update form list')
    const payload = {
      type: types.UPDATE_FORM_LIST,
      data: {
        element: data.data.element,
        newIndex: data.data.newIndex
      }
    }
    context.commit(payload)
  },
  test_update_element (context, data) {
    console.log(data, 'actions update form list')
    const payload = {
      type: types.TEST_CHANGE_VALUE,
      data: 'test test'
    }
    context.commit(payload)
  }
}
