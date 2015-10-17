import 'babel/polyfill';
import createHashHistory from 'history/lib/createHashHistory'
import {Redirect, Route, Router} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouterRelay from 'react-router-relay';
import Relay from 'react-relay';
import {Dashboard} from './components/Dashboard'
import {GroupCallInvitationListRelay} from './components/GroupCallInvitationList'

const GroupCallInvitationListQueries = {
  groupCallInvitationList: () => Relay.QL`
    query {
      groupCallInvitationList
    }`,
};
ReactDOM.render(
  <Router
    createElement={ReactRouterRelay.createElement}
    history={createHashHistory({queryKey: false})}
  >
    <Redirect from="/" to="/group-calls" />
    <Route
      path="/" component={Dashboard}
    >
      <Route
        path="group-calls"
        component={GroupCallInvitationListRelay}
        queries={GroupCallInvitationListQueries} />
    </Route>
  </Router>,
  document.getElementById('root')
);