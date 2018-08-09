import * as ACTIONS from '../constants/Actions';

const initState = {
  notes: [{
    text: "First item",
    checked: false
  }]
};

const reducer = (state = initState, action) => {
  let stateClone = null;
  switch (action.type) {
    case ACTIONS.GET_NOTES:
      return { ...state,
        notes: action.payload
      };
    case 'ADD_ITEM':
      stateClone = { ...state
      };
      stateClone.notes = [
        ...stateClone.notes,
        {
          text: 'New item',
          checked: false
        }
      ];
      return { ...stateClone
      };
    default:
      return state;
  }
};

export default reducer;