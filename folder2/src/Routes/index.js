import { Switch, Route } from 'react-router-dom';
import DataSet from '../features/datasets/components/DataSet';

import Home from '../components/Home';
import Dashboard from '../components/Dashboard';
import DataSets from '../features/datasets/components';
import Layout from '../components/Layout';
const AppRoutes = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/datasets">
            <DataSets />
          </Route>
          <Route exact path="/datasets/:dataSetId">
            <DataSet />
          </Route>
          {/*<Route exact path="/datasets/update/:dataSetId">*/}
          {/*  <DataSet />*/}
          {/*</Route>*/}
        </Switch>
      </Layout>
    </>
  );
};

export default AppRoutes;
