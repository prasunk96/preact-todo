import * as ACTIONS from '../constants/Actions';
import * as NOTES_HELPER from '../helpers/NotesHelper';

const initState = {
  notes: []
};

const reducer = (state = initState, action) => {
  let stateClone = null;

  switch (action.type) {
    case ACTIONS.GET_NOTES:
      stateClone = JSON.parse(JSON.stringify(state));
      return { ...state,
        notes: action.payload
      };
    case ACTIONS.ADD_NOTE:
      stateClone = JSON.parse(JSON.stringify(state));
      stateClone.notes.push(action.payload);
      return { ...stateClone,
        notes: stateClone.notes
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