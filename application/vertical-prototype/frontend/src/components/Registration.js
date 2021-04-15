// import React from 'react';
// import ReactDOM from 'react-dom';
// import './Registration.css';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   setUsername,
//   setEmail,
//   setPassword,
//   setIsLoggedIn,
// } from '../redux/actions/userActions';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));


//   export default function Register() {
//     const classes = useStyles();
//     const validationSchema = yup.object({
//       username: yup
//         .string('Enter your username')
//         .min(3, 'Username must be at least 3 characters'),
//       email: yup
//         .string('Enter your email')
//         .email('Enter a valid email')
//         .required('Email is required'),
//       password: yup
//         .string('Enter your password')
//         .min(8, 'Password should be of minimum 8 characters length')
//         .required('Password is required'),
//     });

//       const formik = useFormik({
//         initialValues: {
//           username: '',
//           email: ' ',
//           password: '',
//         },
//         validationSchema: validationSchema,
//         onSubmit: (values) => {
//           JSON.stringify(values, null, 2);
//         },
//       });
  
//     return (
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <div className={classes.paper}>
//           <Typography component="h1" variant="h5">
//             Sign Up
//           </Typography>
//           <form onSubmit={formik.handleSubmit}>
//             <Grid container spacing={1}>
//               <Grid item xs={12} >
//                 <TextField
//                   autoComplete="fname"
//                   name="username"
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="username"
//                   label="Username"
//                   value={formik.values.username}
//                   onChange={formik.handleChange}
//                   error={formik.touched.username && Boolean(formik.errors.username)}
//                   helperText={formik.touched.username && formik.errors.username}
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   value={formik.values.email}
//                   onChange={formik.handleChange}
//                   error={formik.touched.email && Boolean(formik.errors.email)}
//                   helperText={formik.touched.email && formik.errors.email}
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   variant="outlined"
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   value={formik.values.password}
//                   onChange={formik.handleChange}
//                   error={formik.touched.password && Boolean(formik.errors.password)}
//                   helperText={formik.touched.password && formik.errors.password}
//                   autoComplete="current-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="color: #28918a" />}
//                   label="I want to receive fun updates about books via email."
//                 />
//               </Grid>
// export default function Register() {
//   const classes = useStyles();

//   const dispatch = useDispatch();

//   const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
//   const username = useSelector((state) => state.userReducer.username);

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Typography component="h1" variant="h5" style={{ fontWeight: 700 }}>
//           Sign Up
//         </Typography>
//         <form className={classes.form} noValidate>
//           <Grid container spacing={1}>
//             <Grid item xs={12}>
//               <TextField
//                 autoComplete="uname"
//                 name="username"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="username"
//                 label="Username"
//                 autoFocus
//                 onChange={(e) => dispatch(setUsername(e.target.value))}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 onChange={(e) => dispatch(setEmail(e.target.value))}
//               />
//             </Grid>
// <<<<<<< HEAD
//           </form>
//         </div>
//         <Box mt={5}>
//         </Box>
//       </Container>
//     )};

// ReactDOM.render(<Register />, document.getElementById('root'));
// =======
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 onChange={(e) => dispatch(setPassword(e.target.value))}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <FormControlLabel
//                 control={
//                   <Checkbox value="allowExtraEmails" color="color: #28918a" />
//                 }
//                 // label="I want to receive fun updates about books via email."
//                 label={
//                   <Typography variant="body2" color="textSecondary">
//                     By clicking sign up, you agree to our Terms and Privacy
//                     Policy.
//                   </Typography>
//                 }
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="color:#28918a !important;"
//             className="signup__btn"
//             // className={classes.submit}
//           >
//             Sign Up
//           </Button>
//           <Grid container justify="flex-end">
//             <Grid item>
//               <Link href="/login" variant="body2">
//                 Already have an account? Log in
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       <Box mt={5}></Box>
//     </Container>
//   );
// }
// >>>>>>> origin/Danish
