import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'materialize-css';
import useRoutes from '../../pages/routes.js';

const App = () => {
  const routes = useRoutes(false);
  return (
    <Router>
      <div className="container">
        { routes }
      </div>
    </Router>
  );
}

export default App;
