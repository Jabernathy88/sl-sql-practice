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
        {/* {myPosts && myPosts.map(post => (
            <div key={post.id} className="border my-1 p-2">
              <div><small>By: {currentUser.name}</small></div>
              <h5><strong>{post.title}</strong></h5>
              <div>{post.body}</div>
            </div>
          )
        )} */}
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
