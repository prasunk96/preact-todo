import * as ACTIONS from '../constants/Actions';
import {
  ADD_NOTE
} from './../constants/Actions';

const initState = {
  notes: []
};

const reducer = (state = initState, action) => {
  let stateClone = null;
  let notesClone = null;

  let indexToUpdate = null;
  let noteToUpdate = null;

  switch (action.type) {
    case ACTIONS.GET_NOTES:

      return { ...state,
        notes: action.payload
      };
    case ACTIONS.ADD_NOTE:
      stateClone = JSON.parse(JSON.stringify(state));
      stateClone.notes.push(action.payload);
      return { ...stateClone,
        notes: stateClone.notes
      };
    case ACTIONS.TOGGLE_CHECKED:
      stateClone = JSON.parse(JSON.stringify(state));
      
      indexToUpdate = stateClone.notes.findIndex((item, index) => {
        return item.id === action.payload.id
      });
      noteToUpdate = { ...stateClone.notes[indexToUpdate]
      };
      noteToUpdate.checked = action.payload.checked;
      stateClone.notes[indexToUpdate] = noteToUpdate;
      
      return { ...stateClone,
        notes: stateClone.notes
      }
      case ACTIONS.DELETE_NOTE:
      stateClone = JSON.parse(JSON.stringify(state));
      indexToUpdate = stateClone.notes.findIndex((item, index) => {
        return item.id === action.payload
      });
      stateClone.notes.splice(indexToUpdate, 1);
      return { ...stateClone,
        notes: stateClone.notes
      }
      
    default:
      return state;
  }
};

export default reducer;