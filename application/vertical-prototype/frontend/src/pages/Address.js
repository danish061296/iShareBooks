import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './Address.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Address() {

  return (
    <React.Fragment className = "address__Fragment">
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <TextField
          error
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            helperText="This field is required"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <TextField
            required
            error
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            helperText="This field is required"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            error
            validate
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            helperText="This field is required"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2 (optional)"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            error
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            helperText="This field is required"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
          id="state"
           name="state" 
           label="State/Province/Region" 
           fullWidth
           helperText="This field is required"
           />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            error
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            helperText="This field is required"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            error
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            helperText="This field is required"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
   
  );
}