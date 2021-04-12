// import {Container, Row, Col, Button} from 'react-bootstrap'
import { useFormik } from 'formik'
import { Container, Grid, Paper, TextField, Button, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { LoginValidationSchema } from '../../Validations/AuthValidator'
import { LoginInit } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'




function Login(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: LoginValidationSchema,
        onSubmit: (values) => {
            console.log("values", values)
            dispatch(LoginInit(values))
        },
    });
    
    const classes = useStyles();
    console.log(props.auth)
    if(props.auth.user && props.auth.user.status === 200){
        console.log("dashboard")
        history.push("/dashboard")
    }
    return (
        <Container maxWidth="sm">
            <Grid >
                <Paper className={classes.paper} >Login</Paper>
                <form className={classes.root} onSubmit={formik.handleSubmit} autoComplete="off">
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        variant="outlined"
                    />
                    <Button color="primary" variant="contained" fullWidth type="submit">
                        Submit
                </Button>
                    <div>
                        <Link to="/signup">Create Account</Link>
                    </div>

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

function mapStateToProps(state) {
    return {
        state,
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Login)