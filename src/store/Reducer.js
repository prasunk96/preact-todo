import * as ACTIONS from '../constants/Actions';
import { ADD_NOTE } from './../constants/Actions';

const initState = {
  notes:[]
};

const reducer = (state = initState, action) => {
  let stateClone = null;
  let notesClone = null;
  switch (action.type) {
    case ACTIONS.GET_NOTES:

      return {...state, notes: action.payload};
    case  ACTIONS.ADD_NOTE:
      stateClone = { ...state
      };
      notesClone = {...stateClone.notes};
      notesClone.push(action.payload);
      return {...stateClone, notes: notesClone};
    default:
      return state;
  }
};

export default reducer;