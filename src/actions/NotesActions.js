import * as ENDPOINTS from '../constants/Endpoints';
import * as ACTIONS from '../constants/Actions';
import axios from 'axios';
import { ADD_NOTE, GET_NOTES } from './../constants/Actions';


export const getNotes = () => {
  return (dispatch, getState) => {
    axios.get(ENDPOINTS.BASE_URL + ENDPOINTS.NOTES)
    .then(response => {
      dispatch({
        type: ACTIONS.GET_NOTES,
        payload: response.data 
      });
    })
    .catch(error => console.log("HTTP call to get note is failed."))
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
    .catch(error => console.log("HTTP call to post note is failed."))
  }
}