import React from 'react';
import Header from '../components/header/index';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import CreateVoteContainer from './create/index';
import VoteResultContainer from './result/index';
import VoteListContainer from './votesList/index';
import VoteContainer from './vote/index';

const RootContainer = () => {
  return (
    <div className={'container'}>
      <Header />
      <Router>
        <Route exact path="/">
          <Redirect to="/votes" />
        </Route>
        <Route path="/votes" component={votes} />
        <Route path="/create" component={CreateVoteContainer} />
        <Route path="/result/:id" component={VoteResultContainer} />
      </Router>
    </div>
  );
};

const votes = ({ match }) => {
  return (
    <>
      <Route exact path={match.path} component={VoteListContainer} />
      <Route path={`${match.path}/:id`} component={VoteContainer} />
    </>
  );
};

export default RootContainer;
