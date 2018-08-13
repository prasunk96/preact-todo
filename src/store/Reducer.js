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
  switch (action.type) {
    case ACTIONS.GET_NOTES:

      return { ...state,
        notes: action.payload
      };
    case ACTIONS.ADD_NOTE:
      stateClone = { ...state
      };
      notesClone = { ...stateClone.notes
      };
      notesClone.push(action.payload);
      return { ...stateClone,
        notes: notesClone
      };
    case ACTIONS.TOGGLE_CHECKED:
      stateClone = JSON.parse(JSON.stringify(state));

      console.log(stateClone.notes);
      
      let indexToUpdate = stateClone.notes.findIndex((item, index) => {
        return item.id === action.payload.id
      });
      let noteToUpdate = { ...stateClone.notes[indexToUpdate] };
      noteToUpdate.checked = action.payload.checked;
      stateClone.notes[indexToUpdate] = noteToUpdate;
      console.log(stateClone.notes);


      return { ...stateClone,
        notes: stateClone.notes
      }
    default:
      return state;
  }
};

export default reducer;