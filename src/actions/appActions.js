import * as actions from '../constants/appConstants'

export const fetchPeopleBegin = () => ({
  type: FETCH_PEOPLE_BEGIN
})

export const fetchPeopleSuccess = users => ({
  type: FETCH_PEOPLES_UCCESS,
  payload: { people }
})

export const fetchPeopleFailure = error => ({
  type: FETCH_PEOPLE_FAILURE
})
