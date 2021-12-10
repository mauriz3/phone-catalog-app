import { GET_PHONES, ADD_PHONE } from "./PhonesTypes";

const initialState = {
  phones: []
};

export const phonesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHONES:
      return {
        ...state,
        phones: action.payload
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
