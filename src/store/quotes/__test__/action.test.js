import { getQuotes, getQuotesFailure, getQuotesLoading, getQuotesSuccess, REQUEST_QUOTES_FAILURE, REQUEST_QUOTES_LOADING, REQUEST_QUOTES_SUCCESS } from '../actions';


describe('getQuotesLoading', () =>{
    it("should return obj with certain type", () =>{
        const expected = {
            type:REQUEST_QUOTES_LOADING,
        };
      
        const received = getQuotesLoading();
      
        expect(received).toEqual(expected);
      });
});

describe('getQuotesSuccess', () =>{
    it("should return obj with type and payload", () =>{
        const payload = [];
        const expected = {
            type:REQUEST_QUOTES_SUCCESS,
            payload
        };
      
        const received = getQuotesSuccess(payload);
      
        expect(received).toEqual(expected);
      });
});

describe('getQuotesFailure', () =>{
    it("should return obj with type and payload", () =>{
        const payload = [];
        const expected = {
            type:REQUEST_QUOTES_FAILURE,
            payload
        };
      
        const received = getQuotesFailure(payload);
      
        expect(received).toEqual(expected);
      });
});

describe("getQuotes", () => {
    it("dispatches getQuotesLoading", () => {
      const mockDispatch = jest.fn();
  
      getQuotes()(mockDispatch);
  
      expect(mockDispatch).toHaveBeenCalledWith(getQuotesLoading());
    });
  
    it.skip("dispatches success action on successfull fetch", async () => {
      const result = { quotes: [] };
      fetch.mockResponseOnce(JSON.stringify(result));
      const mockDispatch = jest.fn();
      await getQuotes()(mockDispatch);
  
      expect(mockDispatch).toHaveBeenLastCalledWith(getQuotesSuccess(result));
    });
  
    it.skip("dispatches failure action on error in fetch", async () => {
      fetch.mockRejectOnce(new Error('test'));
      const mockDispatch = jest.fn();
      await getQuotes()(mockDispatch);
  
      expect(mockDispatch).toHaveBeenLastCalledWith(getQuotesFailure('test'));
    });
  });