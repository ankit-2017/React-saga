import { useFormik } from 'formik'
import { Container, Grid, Paper, TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { SignupValidationSchema } from '../../Validations/AuthValidator'
import {SignUpInit} from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'


function SignUp() {
  const dispatch = useDispatch()
  const props = useSelector(state=>state)
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      location: '',
      password: ''
    },
    validationSchema: SignupValidationSchema,
    onSubmit: (values) => {
      console.log("signup values", values);
      dispatch(SignUpInit(values))
      // alert(JSON.stringify(values, null, 2));
    },
  });
  const classes = useStyles();
  
  return (
    <Container maxWidth="sm">
      <Grid>
        <Paper className={classes.paper} >Sign Up</Paper>
        <form className={classes.root} onSubmit={formik.handleSubmit} autoComplete="off">
          <TextField
            fullWidth
            name="name"
            label="Full Name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            variant="outlined"
          />
          <TextField
            fullWidth
            name="email"
            label="Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            variant="outlined"
          />
          <TextField
            fullWidth
            name="location"
            label="location"
            type="text"
            value={formik.values.location}
            onChange={formik.handleChange}
            error={formik.touched.location && Boolean(formik.errors.location)}
            variant="outlined"
          />
          <TextField
            fullWidth
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            variant="outlined"
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Grid>


    </Container>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1)
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default SignUp