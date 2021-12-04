import { REQUEST_STATUS } from '../../utils/constants';
import { REQUEST_QUOTES_FAILURE, REQUEST_QUOTES_LOADING, REQUEST_QUOTES_SUCCESS } from './actions';

const initialState = {
  quotesList: [],
  request: {
      status: REQUEST_STATUS.IDLE,
      error: "",
  }
}

export const quotesReducer = (state = initialState, { type, payload }) => {
  switch(type){
      case REQUEST_QUOTES_LOADING:
          return{
              ...state,
              request: {
                  ...state.request,
                  status: REQUEST_STATUS.LOADING
              }
          };
      case REQUEST_QUOTES_SUCCESS:
          return{
              ...state,
              quotesList: payload,
              request: {
                error: '',
                status: REQUEST_STATUS.SUCCESS
              }
          };
      case REQUEST_QUOTES_FAILURE:
         return{
             ...state,
             request: {
               error: payload,
               status: REQUEST_STATUS.FAILURE
             }
         };
      default:
          return state;
  }
};