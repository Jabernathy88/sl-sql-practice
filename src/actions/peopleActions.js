import * as actions from '../constants/appConstants'

function getPeople(dispatch) {
  return fetch(`https://jsonplaceholder.typicode.com/users?_limit=28`)
    .then(res => res.json())
    .then(people => {
      // console.log("I am people:", people)
      return { people }
    })
}

export function fetchPeople() {
  return dispatch => {
    dispatch(fetchPeopleBegin());
    return getPeople()
      .then(json => {
        dispatch(fetchPeopleSuccess(json.people));
        return json.people;
      })
      .catch(error =>
        dispatch(fetchPeopleFailure(error))
      );
  };
}

export const fetchPeopleBegin = () => ({
  type: actions.FETCH_PEOPLE_BEGIN
})

export const fetchPeopleSuccess = people => ({
  type: actions.FETCH_PEOPLE_SUCCESS,
  payload: { people }
})

export const fetchPeopleFailure = error => ({
  type: actions.FETCH_PEOPLE_FAILURE
})
