import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = props => (
  <React.Fragment>
    <CssBaseline />
    <div className="siteContainer">
      <div className="siteMain">{props.children}</div>
      <Footer />
    </div>
  </React.Fragment>
);

export default Layout;
