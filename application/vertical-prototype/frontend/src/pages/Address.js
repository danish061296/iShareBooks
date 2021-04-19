import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from '@material-ui/core/Button';
import "./Address.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const initialValues = {
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  useForBilling: false,
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "firstName is too short!")
    .required("firstName is required!"),
  lastName: Yup.string()
    .min(2, "lastName is too short!")
    .required("lastName is required!"),
  address1: Yup.string()
    .min(5, "address is too short!")
    .required("address1 is required!"),
  city: Yup.string().min(2, "city is too short!").required("city is required!"),
  state: Yup.string()
    .min(1, "state is too short!")
    .required("state is required!"),
  zip: Yup.string()
    .min(5, "zip code is too short!")
    .required("zip code is required!"),
  country: Yup.string()
    .min(2, "country is too short!")
    .required("country is required!"),
});

const onSubmit = (values, props) => {
  const payload = {
    ...values,
  };

  setTimeout(() => {
    props.resetForm();
    // alert(JSON.stringify(payload, null, 2));

    props.setSubmitting(false);
  }, 2000);
  
};

// const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep(activeStep + 1);
//   };

export default function Address() {
  return (
    <React.Fragment className="address__Fragment">
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Formik
        //innerRef={ref}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={5}>
              <Field
                as={TextField}
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="First-name"
                helperText="required*"
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Field
                as={TextField}
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                autoComplete="Last-name"
                helperText="required*"
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                required
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
              <Field
                as={TextField}
                id="address2"
                name="address2"
                label="Address line 2 (optional)"
                fullWidth
                autoComplete="shipping address-line2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                as={TextField}
                required
                id="city"
                name="city"
                label="City"
                fullWidth
                helperText="required*"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                as={TextField}
                required
                id="state"
                name="state"
                label="State"
                fullWidth
                helperText="required*"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                as={TextField}
                required
                id="zip"
                name="zip"
                label="Zip"
                fullWidth
                autoComplete="shipping postal-code"
                helperText="required*"
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
                control={
                  <Checkbox color="secondary" name="saveAddress" value="yes" />
                }
                label="Use this address for payment details"
              />
            </Grid>
          </Grid>
          <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="next_btn"
                  //onClick={handleNext}
                >
                  NEXT
                </Button>
        </Form>
      </Formik>
    </React.Fragment>
  );
}
