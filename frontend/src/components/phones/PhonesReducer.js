import { GET_PHONES, ADD_PHONE } from "./PhonesTypes";

const initialState = {
  phones: [],
  newVisits: 0,
  recurrentVisits: 0,
};

function getNewVisits(visits) {
  const newVisits = visits.filter(visit => {
    return visit.is_new === true
  });
  return Array.isArray(newVisits) ? newVisits.length : 0
}

function getRecurrentVisits(visits) {
  const recurrentVisits = visits.filter(visit => {
    return visit.is_new === false
  });
  return Array.isArray(recurrentVisits) ? recurrentVisits.length : 0
}

export const phonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHONES:
      return {
        ...state,
        phones: action.payload,
        newVisits: getNewVisits(action.payload),
        recurrentVisits: getRecurrentVisits(action.payload),
      };
    case ADD_PHONE:
      return {
        ...state,
        phones: [...state.phones, action.payload]
      };
    default:
      return state;
  }
};
