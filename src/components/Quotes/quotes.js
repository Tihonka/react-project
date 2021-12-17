import { CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getQuotes } from '../../store/quotes/actions';
import { selectQuotesError, selectQuotesList, selectQuotesLoading } from '../../store/quotes/selectors';

export const Quotes = () =>{
const dispatch = useDispatch();
const quotes = useSelector(selectQuotesList);
const isLoading = useSelector(selectQuotesLoading);
const error = useSelector(selectQuotesError);

const requestQuotes = async () => {
  dispatch(getQuotes());
};

useEffect( ()=>{
   requestQuotes();
},[])

return <>
<h3>Inspirational quotes</h3>

{isLoading ? <CircularProgress /> : <>

  <button onClick={requestQuotes}>Request</button>

  {!!error && <h4>ERROR: {error}</h4>}

  <ul>
      {quotes.map((quote) => (
          <li key= { quote._id }>{ quote.quoteText }</li>
      ))}
  </ul>
  
</>}
</>
};