import React from 'react';
import PeopleList from '../components/PeopleList';

const HomePage = () => {
  return (
    <div className="row py-3 px-0 m-0">
      <PeopleList />
      <PeopleList />
    </div>
  );
};

export default HomePage;
