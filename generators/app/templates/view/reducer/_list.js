import {ADD_LIST} from '../action/listAction';

const intialState = {
  list: []
}

const list = (state = intialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        list: [...state.list, action.item]
      }
    default:
      return state
  }
}

export default list
