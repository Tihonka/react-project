import { apiUrl } from '../../utils/constants';

export const REQUEST_QUOTES_LOADING = "QUOTES::REQUEST_LOADING";
export const REQUEST_QUOTES_FAILURE = "QUOTES::REQUEST_FAILURE";
export const REQUEST_QUOTES_SUCCESS = "QUOTES::REQUEST_SUCCESS";

export  const getQuotesLoading = () => ({
  type:REQUEST_QUOTES_LOADING
});
export  const getQuotesSuccess = (quotes) => ({
  type:REQUEST_QUOTES_SUCCESS,
  payload: quotes
  });
export  const getQuotesFailure = (err) => ({
    type:REQUEST_QUOTES_FAILURE,
    payload:err
});

export const getQuotes = () => async (dispatch) => {
    dispatch(getQuotesLoading());
    const response = await fetch(apiUrl)
    try {
        console.log(response);
        if(!response.ok){
            throw new Error('Error!');
        }
       const result = await response.json();
   
        dispatch(getQuotesSuccess(result.data));
    }
      catch(err) {
      console.warn(err);
      dispatch(getQuotesFailure(err.message));
      }
};