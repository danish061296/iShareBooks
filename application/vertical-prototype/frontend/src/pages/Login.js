import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navigation from '../components/Navigation';
import { useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        iShareBooks
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.info.dark,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const username = useSelector((state) => state.userReducer.username);

  const initialValues = {
    email: '',
    password: '',
    remember: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Please enter a valid email!')
      .required('Email is required!'),
    password: Yup.string()
      .min(8, 'Password must contain at least 8 characters!')
      .required('Password is required!'),
  });

  const onSubmit = (values, props) => {
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  return (
    <div>
      <Navigation />
      <div className="login__Container">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5" style={{ fontWeight: 700 }}>
              Login
            </Typography>
            {/* <form className={classes.form} noValidate> */}
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(props) => (
                <Form>
                  <Field
                    as={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="email"
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    helperText={<ErrorMessage name="email" />}
                  />
                  <Field
                    as={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    helperText={<ErrorMessage name="password" />}
                  />
                  <Field
                    as={FormControlLabel}
                    name="remember"
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="signinButton"
                  >
                    Sign In
                  </Button>
                </Form>
              )}
            </Formik>
            <Grid container>
              <Grid item>
                <Link href="/registration" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            {/* </form> */}
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </div>
    </div>
  );
}
