import {ADD_LIST} from '../action/listAction';

const intialState = {
  items: []
}

const list = (state = intialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        items: [...state.items, action.item]
      }
    default:
      return state
  }
}

export default list
