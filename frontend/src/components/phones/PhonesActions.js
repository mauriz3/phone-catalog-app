import axios from "axios";
import { toastOnError } from "../../utils/Utils";
import { GET_PHONES, ADD_PHONE } from "./PhonesTypes";

export const getPhones = (brand = "", os = "", hasOffer = "") => dispatch => {
  axios
    .get(`/api/v1/phones/?brand=${brand}&os=${os}&hasOffer=${hasOffer}`)
    .then(response => {
      dispatch({
        type: GET_PHONES,
        payload: response.data
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};

export const addPhone = phone => dispatch => {
  axios
    .post("/api/v1/phones/", phone)
    .then(response => {
      dispatch({
        type: ADD_PHONE,
        payload: response.data
      });
    })
    .catch(error => {
      toastOnError(error);
    });
};
