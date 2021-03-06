import React from 'react';
import Header from '../components/header/index';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import CreateVoteContainer from './create/index';
import VoteResultContainer from './result/index';
import VoteListContainer from './votesList/index';
import VoteContainer from './vote/index';
import LoginContainer from './login/LoginContainer';
import styled from 'styled-components';
import EditVoteContainer from './edit/EditVoteContainer';

const RootContainer = () => {
  return (
    <Container>
      <Router basename={process.env.REACT_APP_PUBLIC_URL}>
        <Header />
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Switch>
          <Route path="/login" component={LoginContainer} />
          <Route path="/votes" component={votes} />
          <Route path="/create" component={CreateVoteContainer} />
          <Route path="/edit/:id" component={EditVoteContainer} />
          <Route
            path="/result/:id"
            component={VoteResultContainer}
          />
          <Route>
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    </Container>
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

const Container = styled.div`
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
  background-color: white;
`;

export default RootContainer;
