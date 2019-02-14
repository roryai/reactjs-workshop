/* eslint
  react/destructuring-assignment: off,
  react/jsx-one-expression-per-line: off,
  react/prefer-stateless-function: off,
  react/require-default-props: off,
  react/no-unused-state: off,
  react/no-multi-comp: off,
  react/sort-comp: off,
  max-len: off,
*/
import { createStore } from 'redux';


// Exercise 09/01
// ===========
//
// Tasks
// --------
// ✅    Create an Action creator for indicating that we would like to make a request for data.
//        This should be assigned to the `fetchConsultantData` stub below.
//        This should have the type: CONSULTANTS_FETCH_REQUEST (already defined below).
//        This action creator will not accept any input args; the `payload` key should be null.
// ✅    Create an Action creator for indicating that we would like to provide data received from a network request.
//        This should be assigned to the `fetchConsultantComplete` stub below.
//        This should have the type: CONSULTANTS_FETCH_COMPLETE (already defined below).
//        This action creator should accept a single input arg, which will be an array of consultant data.
//        This input arg should be stored within the action at `payload.data`.
//        The action should indicate if an error occurred using the appropriate FSA key
//        The action should include the error within the payload object on `data` when one is passed.
//
// ✅    Unless instructed otherwise, All actions should default their unused object keys to null when they don't have any data.
// ✅    All actions should adhere to the FSA [1] object structure.
//
// ✅    Complete the `reducer` using the stub below.
// ✅    Your reducer should return the default store state when `prevState` is undefined.
// ✅    Your default store state should be an empty array.
// ✅    The reducer should return the payload data to the store when the `fetchConsultantComplete` action is dispatched
// ✅    The reducer should return the previous state if any other action is dispatched
//
// ✅    Create a single store for our 'app' using the `createStore` method (already imported above)
// ✅    The store should be created without a `preloaded state`, preloadedState (only call with 1 arg) [2]
// ✅    The store should be configured to use our reducer we created in the above tasks.
//
// Tips
// --------
// 🐨    Remember, FSA stands for "Flux Standard Action"
// 🐨   [1] https://github.com/redux-utilities/flux-standard-action#actions
// 🐨   [2] https://redux.js.org/api/createstore#createstorereducer-preloadedstate-enhancer

// Define our Action type constants
export const CONSULTANTS_FETCH_REQUEST = 'CONSULTANTS.FETCH.REQUEST';
export const CONSULTANTS_FETCH_COMPLETE = 'CONSULTANTS.FETCH.COMPLETE';

// Define our Action Creators. These are used
// to signal that we want an update made to our store.

// action creators create the boxes we put on the conveyor belt to send to the store. they are processed by reducers

export const fetchConsultantData = () => {
  return {
    type: CONSULTANTS_FETCH_REQUEST,
    payload: null,
    meta: null,
    error: false
  }
};

export const fetchConsultantComplete = consultantData => {
  return {
    type: CONSULTANTS_FETCH_COMPLETE,
    payload: {data: consultantData},
    meta: null,
    error: consultantData instanceof Error
  }
};

// Setup our reducer
export function reducer(prevState = [], action) { // the default value here guards against prevState being undefined
  switch (action.type){
    case CONSULTANTS_FETCH_COMPLETE:
      return Array.isArray(action.payload.data) ? [...action.payload.data] : [];
      // the ... unpacks the array contents and puts it into a new array. This is because you have to return something with a different object ID to what was passed in.
      // the empty array secondary option is defensive programming in case the primary option resolves to undefined- this causes a lot of pain if it happens.
    default:
      return prevState
  }
}

// Create our store
const store = createStore(reducer);

// Export the store to our test suite
export default store;
