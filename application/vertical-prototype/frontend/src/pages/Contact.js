import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import './Contact.css';
import { Box } from '@material-ui/core';

export default function AboutUs() {
  return (
    <div>
      <Navigation />
      <div className="container">
        <h1 className="main_header">Contact</h1>
        <Box mt={10} />

        <div className="sub_container bold">
          <p>For General Questions or Complaints:</p>
          <p>ykc@isharebooks.org - (415) 555-5000</p>

          <Box mt={3} />
          <hr></hr>
          <Box mt={3} />

          <p>For Billing:</p>
          <p>billing@isharebooks.org - (415) 555-6000</p>

          <Box mt={3} />
          <hr></hr>
          <Box mt={3} />

          <p>For UI and UX Issues:</p>
          <p>frontend@isharebooks.org - (415) 555-5001</p>

          <Box mt={3} />
          <hr></hr>
          <Box mt={3} />

          <p>For Connection and Database Issues:</p>
          <p>backend@isharebooks.org - (415) 555-5002</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
