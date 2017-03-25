const REQUEST_STARTED='awesomeProject/albums/REQUEST_STARTED'
const REQUEST_SUCCESS='awesomeProject/albums/REQUEST_SUCCESS'
const REQUEST_FAILURE='awesomeProject/albums/REQUEST_FAILURE'

const initialState = {isFetching:false,albums:[]};

export function requestStarted () {
  return {
    type: REQUEST_STARTED
  }
}

export function requestSuccess (data) {
  return {
    type: REQUEST_SUCCESS,
    data
  }
}

export function requestFailure (error) {
  return {
    type: REQUEST_FAILURE,
    error
  }
}

export function albumsRequest (dispatch) {
  dispatch(requestStarted())
  return fetchGet(`/login?email=${email}&password=${password}`)
  .then(json => {
    if (json.success) { // SUCCESS
      dispatch(requestSuccess(json))
    }
  }).catch(json => {
    dispatch(requestFailure(json))
  })
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return Object.assign({isFetching:true},state)
    default:
      return state;
  }
}