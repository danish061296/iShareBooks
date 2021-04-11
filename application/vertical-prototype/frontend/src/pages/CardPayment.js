import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  cardName: "",
  cardNumber: "",
  cvv: "",
  expDate: "",
};

const validationSchema = Yup.object().shape({
  caardName: Yup.string()
    .min(5, "Card name is too short!")
    .required("Card number is required!"),
  cardNumber: Yup.string()
    .min(16, "Card number is too short!")
    .max(16, "invalid card number!")
    .required("Card number is required!"),
  cvv: Yup.string()
    .min(3, "cvv is too short!")
    .max(4, "cvv is invalid")
    .required("cvv is required!"),
  expDate: Yup.string()
    .min(5, "expiray date is too short!")
    .required("Expiry date is required!"),
});

export default function CardPayment() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>

      <Formik
        //innerRef={ref}
        initialValues={initialValues}
        //onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Field
                as={TextField}
                error
                required
                id="cardName"
                label="Name on card"
                fullWidth
                autoComplete="cc-name"
                helperText="required*"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Field
                as={TextField}
                error
                required
                id="cardNumber"
                label="Card number"
                fullWidth
                autoComplete="cc-number"
                helperText="required*"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Field
                as={TextField}
                error
                required
                id="expDate"
                label="Expiry date"
                fullWidth
                autoComplete="cc-exp"
                helperText="required*"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Field
                as={TextField}
                required
                error
                id="cvv"
                label="CVV"
                helperText="Last three digits on signature strip"
                fullWidth
                autoComplete="cc-csc"
                helperText="required*"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="saveCard" value="yes" />
                }
                label="Remember credit card details for next time"
              />
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </React.Fragment>
  );
}
