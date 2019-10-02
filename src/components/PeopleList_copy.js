import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPeople } from '../actions/peopleActions';

export class PeopleList extends Component {
  componentDidMount() {
    if (this.props.dispatch) {
      this.props.dispatch(fetchPeople());
      // console.log("I am people in DOM:", this.props)
    }
  }

  render() {
    const { error, loading, people } = this.props;

    if (error) {
      return <div>Error: {error.message}</div>
    }
    if (loading) {
      return <div>Loading ...</div>;
    }

    return (
      <div className="posts-list-current-user">
        HELLO FROM PEOPLE LIST
        <hr />
        {console.log("I AM PEOPLE IN RETURN:", people)}
        {people && people.map(person => (
          <div key={person.id} className="border my-1 p-2">
            <h4>By: {person.name}</h4>
            <p>{person.email}</p>
            <hr />
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  people: state.people.items,
  loading: state.people.loading,
  error: state.people.error
})

export default connect(mapStateToProps)(PeopleList);
