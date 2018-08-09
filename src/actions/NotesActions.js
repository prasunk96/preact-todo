import * as ENDPOINTS from '../constants/Endpoints';
import * as ACTIONS from '../constants/Actions';
import axios from 'axios';


export const getNotes = () => {
  return (dispatch, getState) => {
    axios.get(ENDPOINTS.BASE_URL + ENDPOINTS.NOTES)
    .then(response => {
      console.log(response.data);
      dispatch({
        type: ACTIONS.GET_NOTES,
        payload: response.data 
      });
    })
    .catch(error => console.log("HTTP call to get note is failed."))
  }
}