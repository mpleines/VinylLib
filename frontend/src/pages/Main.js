import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import RecordList from "./Recordlist";
import AddRecord from "./AddRecord";
import Settings from "./Settings";
import RecordDetails from "./RecordDetails";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/all-records">
        <RecordList />
      </Route>
      <Route path="/record-details" component={RecordDetails} />
      <Route path="/add-record">
        <AddRecord />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
    </Switch>
  );
};

export default Main;
