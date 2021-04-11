import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './Address.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const initialValues = {
  firstName: '',
  lastName: '',
  address1: '',
  address2:'',
  city:'',
  state:'',
  zip:'',
  country:'',
  useForBilling: false,
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'firstName is too short!')
    .required('firstName is required!'),
    lastName: Yup.string()
    .min(2, 'lastName is too short!')
    .required('lastName is required!'),
    address1: Yup.string()
    .min(5, 'address is too short!')
    .required('address1 is required!'),
    city: Yup.string()
    .min(2, 'city is too short!')
    .required('city is required!'),
    state: Yup.string()
    .min(1, 'state is too short!')
    .required('state is required!'),
    zip: Yup.string()
    .min(5, 'zip code is too short!')
    .required('zip code is required!'),
    country: Yup.string()
    .min(2, 'country is too short!')
    .required('country is required!'),
});



export default function Address() {

  return (
    <React.Fragment className = "address__Fragment">
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Formik
              //innerRef={ref}
              initialValues={initialValues}
              //onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
      <Form>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <Field as ={TextField}
          error
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            helperText="required*"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
        <Field as ={TextField}      
              required
            error
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            helperText="required*"
          />
        </Grid>
        <Grid item xs={12}>
        <Field as ={TextField}  
                  required
            error
            validate
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            helperText="required*"
          />
        </Grid>
        <Grid item xs={12}>
        <Field as ={TextField}   
                 id="address2"
            name="address2"
            label="Address line 2 (optional)"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Field as ={TextField}    
                required
            error
            id="city"
            name="city"
            label="City"
            fullWidth
            helperText="required*"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Field as ={TextField}      
          required
          error
          id="state"
           name="state" 
           label="State/Province/Region" 
           fullWidth
           helperText="required*"
           />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Field as ={TextField}      
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
        {/* <Grid item xs={12} sm={6}>
        <Field as ={TextField}      
            required
            error
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            helperText="This field is required"
          />
        </Grid> */}
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
      </Form>
      </Formik>
    </React.Fragment>
   
  );
}