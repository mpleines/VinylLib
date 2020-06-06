import React from "react";
import { Switch, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import RecordList from "./pages/Recordlist";
import AddRecord from "./pages/AddRecord";

const Main = () => {
  return (
    <Switch>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/all-records">
        <RecordList />
      </Route>
      <Route path="/add-record">
        <AddRecord />
      </Route>
    </Switch>
  );
};

export default Main;
