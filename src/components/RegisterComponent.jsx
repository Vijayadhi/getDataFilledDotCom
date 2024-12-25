import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';


// Validation schemas for Personal and Business Details
const personalDetailsSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    phoneNumber: Yup.string()
        .matches(/^\d{10}$/, 'Phone number must be 10 digits')
        .required('Phone number is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
});



const businessDetailsSchema = Yup.object().shape({
    businessTitle: Yup.string().required('Business Title is required'),
    businessLine1: Yup.string().required('Address Line 1 is required'),
    businessLine2: Yup.string().required('Address Line 2 is required'),
    registeredNumber: Yup.string().required('Government Registered Number is required'),
    buildingNumber: Yup.string().required('Building Number is required'),
    street: Yup.string().required('Street is required'),
    area: Yup.string().required('Area is required'),
    district: Yup.string().required('District is required'),
    pincode: Yup.string()
        .matches(/^\d{6}$/, 'Pincode must be 6 digits')
        .required('Pincode is required'),
    businessEmail: Yup.string()
        .email('Invalid email address')
        .required('Business Email is required'),
    businessPhoneNumber: Yup.string()
        .matches(/^\d{10}$/, 'Phone number must be 10 digits')
        .required('Business Phone number is required'),
    termsAccepted: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
});

function RegisterComponent() {
    const navigate = useNavigate();

    const location = useLocation();
    const [step, setStep] = useState(1); // Step tracker

    useEffect(() => {
        if (location.pathname === "/register") {
            import("../assets/css/register.css"
            )
                .then(() => {
                    console.log("register.css loaded for /register");
                })
                .catch((error) => {
                    console.error("Failed to load register.css", error);
                });
        }
    }, [location.pathname]);

    const [formValues, setFormValues] = useState({
        firstName: 'vignesh',
        lastName: 'lkfd',
        email: 'vignesh@email.com',
        phoneNumber: '6380661448',
        password: 'Admin12.@',
        confirmPassword: 'Admin12.@',
        businessTitle: 'lsfhs',
        businessLine1: 'ekjflke',
        businessLine2: 'wehr',
        registeredNumber: '23657345',
        buildingNumber: '23874',
        street: 'lkwehsl',
        area: 'oej;s',
        district: ';kkjs',
        pincode: '607401',
        businessEmail: 'nasf@gmail.com',
        businessPhoneNumber: '3946598435',
        termsAccepted: true
    });

    const handleTermsChange = () => {
        setFormValues({ ...formValues, termsAccepted: !formValues.termsAccepted })
    }

    const handleRegister = async () => {
        try {
            // 🛡️ Validation checks before proceeding
            if (!formValues.email || !formValues.phoneNumber || !formValues.password || !formValues.confirmPassword) {
                alert("Please fill all required user fields (Email, Phone, Password, Confirm Password).");
                return;
            }

            if (formValues.password !== formValues.confirmPassword) {
                alert("Passwords do not match!");
                return;
            }



            // 📤 User Registration API Call
            const userPayload = {
                email: formValues.email,
                phoneNumber: formValues.phoneNumber,
                name: `${formValues.firstName} ${formValues.lastName}`,
                password: formValues.password,
                confirmPassword: formValues.confirmPassword,
            };

            const userResponse = await axios.post(`${import.meta.env.VITE_BACKEND_API}/user/createUser`, userPayload);
            // console.log('User Response:', userResponse.data);

            // 🛡️ Check if business fields are filled before calling Business API
            if (formValues.businessTitle && formValues.businessEmail && formValues.businessPhoneNumber) {
                const businessPayload = {
                    userId: userResponse.data.data.userId,
                    bussiness_title: formValues.businessTitle,
                    bussiness_email: formValues.businessEmail,
                    bussiness_phone: formValues.businessPhoneNumber,
                    bussiness_building_num: formValues.buildingNumber,
                    bussiness_street: formValues.street,
                    bussiness_gov_reg_num: formValues.registeredNumber,
                    bussiness_area: formValues.area,
                    bussiness_district: formValues.district,
                    bussiness_pincode: formValues.pincode,
                };

                const businessResponse = await axios.post(`${import.meta.env.VITE_BACKEND_API}/bussiness/createBussiness`, businessPayload);
                // console.log('Business Response:', businessResponse.data);
            }

            // 🎯 Success Alert and Navigation
            alert("Registration Successful!");
            navigate('/getDataFilled');
        } catch (error) {
            console.error('Registration Error:', error.response?.data || error.message);
            alert(error.response?.data?.message || 'Registration failed. Please try again later.');
        }
    };

    return (
        <MDBContainer fluid className='p-4'>
            <MDBRow>
                <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
                    <h1 className="mt-1 mb-5 pb-1 text-light mx-5">getDataFilledDotCom<br /><span style={{ fontSize: 12 + 'px', fontWeight: 'bolder' }}>(A unit of Omega Computers and Software Solutions)</span></h1>
                    <p className='px-3' style={{ color: "#FFF8E1" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                        quibusdam tempora at cupiditate quis eum maiores libero
                        veritatis? Dicta facilis sint aliquid ipsum atque?
                    </p>
                </MDBCol>

                <MDBCol md='6'>
                    <MDBCard className='my-5'>
                        <MDBCardBody className='p-5'>
                            {step === 1 && (
                                <Formik
                                    initialValues={formValues}
                                    validationSchema={personalDetailsSchema}
                                    onSubmit={(values) => {
                                        setFormValues(values);
                                        setStep(2); // Move to the next step
                                    }}
                                >
                                    {({ isValid }) => (
                                        <Form action='/getDataFilled'>
                                            <h3 className='text-dark'>Personal Details</h3>
                                            <MDBRow>
                                                <MDBCol col='6'>
                                                    <Field as={MDBInput} wrapperClass='mb-4' label='First Name' name='firstName' type='text' />
                                                    <ErrorMessage name="firstName" component="div" className="text-danger small" />
                                                </MDBCol>
                                                <MDBCol col='6'>
                                                    <Field as={MDBInput} wrapperClass='mb-4' label='Last Name' name='lastName' type='text' />
                                                    <ErrorMessage name="lastName" component="div" className="text-danger small" />
                                                </MDBCol>
                                            </MDBRow>

                                            <MDBRow>
                                                <MDBCol col='6'>
                                                    <Field as={MDBInput} wrapperClass='mb-4' label='Email' name='email' type='email' />
                                                    <ErrorMessage name="email" component="div" className="text-danger small" />
                                                </MDBCol>
                                                <MDBCol col='6'>
                                                    <Field as={MDBInput} wrapperClass='mb-4' label='Phone Number' name='phoneNumber' type='text' />
                                                    <ErrorMessage name="phoneNumber" component="div" className="text-danger small" />
                                                </MDBCol>
                                            </MDBRow>

                                            <Field as={MDBInput} wrapperClass='mb-4' label='Password' name='password' type='password' />
                                            <ErrorMessage name="password" component="div" className="text-danger small" />

                                            <Field as={MDBInput} wrapperClass='mb-4' label='Confirm Password' name='confirmPassword' type='password' />
                                            <ErrorMessage name="confirmPassword" component="div" className="text-danger small" />

                                            <div className="text-center pt-1 mb-5 pb-1">
                                                <MDBBtn type="submit" className="mb-4 w-75 gradient-custom-2 but" disabled={!isValid}>
                                                    Next
                                                </MDBBtn>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            )}

                            {step === 2 && (
                                <Formik
                                    initialValues={formValues}
                                    validationSchema={businessDetailsSchema}
                                    onSubmit={(values) => handleRegister(values)}
                                >
                                    {({ isValid }) => (
                                        <Form>
                                            <h3 className='text-dark'>Business Details</h3>

                                            <Field as={MDBInput} wrapperClass='mb-3' label='Business Title' name='businessTitle' type='text' />
                                            <ErrorMessage name="businessTitle" component="div" className="text-danger small" />

                                            <MDBRow>
                                                <MDBCol col='6'>
                                                    <Field as={MDBInput} wrapperClass='mb-3' label='Address Line 1' name='businessLine1' type='text' />
                                                    <ErrorMessage name="businessLine1" component="div" className="text-danger small" />
                                                </MDBCol>
                                                <MDBCol col='6'>
                                                    <Field as={MDBInput} wrapperClass='mb-3' label='Address Line 2' name='businessLine2' type='text' />
                                                    <ErrorMessage name="businessLine2" component="div" className="text-danger small" />
                                                </MDBCol>
                                            </MDBRow>

                                            <Field as={MDBInput} wrapperClass='mb-3' label='Government Registered Number' name='registeredNumber' type='text' />
                                            <ErrorMessage name="registeredNumber" component="div" className="text-danger small" />

                                            <Field as={MDBInput} wrapperClass='mb-3' label='Building Number' name='buildingNumber' type='text' />
                                            <ErrorMessage name="buildingNumber" component="div" className="text-danger small" />

                                            <MDBRow>
                                                <MDBCol col='6'>
                                                    <Field as={MDBInput} wrapperClass='mb-3' label='Street' name='street' type='text' />
                                                    <ErrorMessage name="street" component="div" className="text-danger small" />
                                                </MDBCol>
                                                <MDBCol col='6'>
                                                    <Field as={MDBInput} wrapperClass='mb-3' label='Area' name='area' type='text' />
                                                    <ErrorMessage name="area" component="div" className="text-danger small" />
                                                </MDBCol>
                                            </MDBRow>

                                            <MDBRow>
                                                <MDBCol col='6'>
                                                    <Field as={MDBInput} wrapperClass='mb-3' label='District' name='district' type='text' />
                                                    <ErrorMessage name="district" component="div" className="text-danger small" />
                                                </MDBCol>
                                                <MDBCol col='6'>
                                                    <Field as={MDBInput} wrapperClass='mb-3' label='Pincode' name='pincode' type='text' />
                                                    <ErrorMessage name="pincode" component="div" className="text-danger small" />
                                                </MDBCol>
                                            </MDBRow>

                                            <MDBRow>
                                                <MDBCol col='6'>
                                                    <Field as={MDBInput} wrapperClass='mb-3' label='Business Email' name='businessEmail' type='email' />
                                                    <ErrorMessage name="businessEmail" component="div" className="text-danger small" />
                                                </MDBCol>
                                                <MDBCol col='6'>
                                                    <Field as={MDBInput} wrapperClass='mb-3' label='Business Phone Number' name='businessPhoneNumber' type='text' />
                                                    <ErrorMessage name="businessPhoneNumber" component="div" className="text-danger small" />
                                                </MDBCol>
                                            </MDBRow>
                                            <div className="mb-3">
                                                <Field
                                                    as={MDBCheckbox}
                                                    name='termsAccepted'
                                                    id='termsAccepted'
                                                    label={
                                                        <>
                                                            I accept the&nbsp;
                                                            <a href='/termsandconditions' target='_blank' rel='noopener noreferrer'>
                                                                terms and conditions
                                                            </a>
                                                        </>
                                                    }
                                                />
                                                <ErrorMessage name="termsAccepted" component="div" className="text-danger small" />
                                            </div>

                                            <div className="text-center pt-1 mb-5 pb-1">
                                                <MDBBtn type="submit" className="mb-4 w-75 gradient-custom-2 but" disabled={!isValid}>
                                                    Register
                                                </MDBBtn>
                                            </div>

                                            {/* <div className="text-center">
                                                <MDBBtn type="button" onClick={() => setStep(1)} className="btn-link">
                                                    Back
                                                </MDBBtn>
                                            </div> */}
                                        </Form>
                                    )}
                                </Formik>
                            )}
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default RegisterComponent;
