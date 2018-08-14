import * as ACTIONS from '../constants/Actions';
import {
  Map,
  List,
  fromJS,
  toJS
} from 'immutable';

const initState = Map({
  notes: List()
});

const reducer = (state = initState, action) => {
  let stateClone = null;
  let newState = null;
  let newNotes = null;
  let _notes = null;
  let index = null;

  switch (action.type) {
    case ACTIONS.GET_NOTES:
      _notes = fromJS(action.payload);
      newState = state.set('notes', _notes);
      return newState;
    case ACTIONS.ADD_NOTE:
      newState = state.update('notes', arr => arr.push(action.payload));
      return newState;
    case ACTIONS.SET_CHECKED:
      newState = state.updateIn(['notes'], list => {
        index = list.findIndex(itemToUpdate => itemToUpdate.get('id') === action.payload.id);
        return list.setIn([index, 'checked'], action.payload.checked);
      })
      return newState;
    case ACTIONS.DELETE_NOTE:
      index = state.get('notes').findIndex(itemToDelete => itemToDelete.get('id') === action.payload);
      newState = state.deleteIn(['notes', index]);
      return newState;
    default:
      return state;
  }
};

export default reducer;