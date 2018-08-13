import * as ACTIONS from '../constants/Actions';
import * as NOTES_HELPER from '../helpers/NotesHelper';
import { Map, JS, List, fromJS } from 'immutable';

const initState = Map({
  notes: List()
});

const reducer = (state = initState, action) => {
  let stateClone = null;
  let notes = null;

  switch (action.type) {
    case ACTIONS.GET_NOTES:
      notes = fromJS(action.payload);
    return { ...state,
      notes: notes
    };
    case ACTIONS.ADD_NOTE:
    console.log(state.getIn(['notes']));
      stateClone = JSON.parse(JSON.stringify(state));
      notes = state.getIn(['notes']);
      notes.push(action.payload);
      stateClone.notes.push(action.payload);
      return { ...stateClone,
        notes: notes
      };
    case ACTIONS.SET_CHECKED:
      stateClone = JSON.parse(JSON.stringify(state));
      stateClone.notes = NOTES_HELPER.setCheckedStatusById(action.payload, stateClone.notes);
      return { 
        ...stateClone,
        notes: stateClone.notes
      }
      case ACTIONS.DELETE_NOTE:
      stateClone = JSON.parse(JSON.stringify(state));
      stateClone.notes = NOTES_HELPER.deleteNoteById(action.payload, stateClone.notes);
      return { ...stateClone,
        notes: stateClone.notes
      }
      
    default:
      return state;
  }
};

export default reducer;