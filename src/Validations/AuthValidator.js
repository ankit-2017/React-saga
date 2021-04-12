import * as yup from 'yup';

export const LoginValidationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .required('Password is required'),
});


export const SignupValidationSchema = yup.object({
    name: yup
        .string('Enter your full name')
        .required("Name is required"),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    location: yup
        .string('Enter your location i.e city')
        .required('location is required')
});