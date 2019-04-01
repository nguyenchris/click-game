import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from '../Footer/Footer';

const Layout = props => (
  <React.Fragment>
    <CssBaseline />
    {props.children}
    <Footer />
  </React.Fragment>
);

export default Layout;
