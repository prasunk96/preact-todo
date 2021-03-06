import * as ENDPOINTS from '../constants/Endpoints';
import * as ACTIONS from '../constants/Actions';
import axios from 'axios';


export const getNotes = () => {
  return (dispatch, getState) => {
    axios.get(ENDPOINTS.BASE_URL + ENDPOINTS.NOTES)
    .then(response => {
      dispatch({
        type: ACTIONS.GET_NOTES,
        payload: response.data 
      });
    })
    .catch(error => console.log(error))
  }
}

export const addNote = (note) => {
  return (dispatch, getState) => {
    axios.post(ENDPOINTS.BASE_URL + ENDPOINTS.NOTES, note)
    .then(response => {
      dispatch({
        type: ACTIONS.ADD_NOTE,
        payload: response.data
      });
    })
    .catch(error => console.log(error))
  }
}

export const setChecked = (data) => {
  return (dispatch, getState) => {
    axios.put(ENDPOINTS.BASE_URL + ENDPOINTS.NOTES + data.id, data)
    .then(response => {
      dispatch({
        type: ACTIONS.SET_CHECKED,
        payload: response.data
      });
    })
    .catch(error => console.log(error))
  }
}

export const deleteNote = (id) => {
  return (dispatch, getState) => {
    axios.delete(ENDPOINTS.BASE_URL + ENDPOINTS.NOTES + id)
      .then(response => {
        dispatch({
          type: ACTIONS.DELETE_NOTE,
          payload: id
        });
      })
      .catch(error => console.log(error))
  }
}