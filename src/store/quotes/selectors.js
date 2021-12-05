import { REQUEST_STATUS } from '../../utils/constants';

export const selectQuotesList = state => state.quotes.quotesList;
export const selectQuotesLoading = state => state.quotes.request.status === REQUEST_STATUS.LOADING;
export const selectQuotesError = state => state.quotes.request.error;