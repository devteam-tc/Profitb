"use client";

import React from 'react';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import ContactImage from '../../public/assets/contactimg.png';

export const StyledContainer = styled(Container)`
  padding: 40px;
  background-color: #ffffff;
  border-radius: 20px;
border: 1px solid var(--Color-8-Color-8500, #A7A7A7);
`;

export const IconContainer = styled.li`
  display: flex;
  align-items: center;
  margin: 15px 0;

  .icon {
    background-color: #EF5226;
    color: white;
    padding: 15px;
    height: 60px;
    width: 60px;
    border-radius: 12%;
    margin-right: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text-container {
    display: flex;
    flex-direction: column;
  }

  .label {
    font-weight: bold;
    font-size: 16px;
    color: #4B1C13;
  }

  .details {
    font-size: 14px;
    color: #555555;
    margin-top: 5px;
  }
`;

export const StyledForm = styled(Form)`
  background-color: #fff;
  padding: 10%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px;
`;

export const StyledFormGroup = styled(Form.Group)`
  margin-bottom: 20px;

  label {
    font-weight: bold;
    margin-bottom: 5px;
    display: block;
  }

  .form-control {
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 10px;
  }
`;

export const StyledImage = styled.img`
  max-width: 532px;
  height: auto;
  margin-top: 1rem;
  border-radius: 15px;

  @media (max-width: 992px) {
    max-width: 90%; /* Make image responsive */
    margin-top: 2rem;
  }
`;

export const StyledButton = styled(Button)`
  background-color: #EF5226;
  border: none;
  padding: 10px 20px;
  font-size: 16px;

  &:hover {
    background-color: #d14620;
  }
`;

const Title = styled.h1`
  margin-bottom: 10px;
  color: var(--Foundation-techcloud-Secondary-techcloud-secondary-900, #024656);
font-family: Poppins;
font-size: 24px;
font-weight: 400;
line-height: 120%; 
letter-spacing: -0.48px;
`;

const Subtitle = styled.h2`
  margin-bottom: 20px;
  color: var(--Primary-Primary1000, #5B1907);
font-size: 80px;
font-weight: 500;
line-height: 120%; 
letter-spacing: -1.92px;
`;

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, 'Name should only contain letters and spaces')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    phone: Yup.string()
      .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
      .required('Phone number is required'),
    message: Yup.string().required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      companyName: '', 
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <StyledContainer id="contact-form">
      <Row>
        <Col md={6}>
          <Subtitle>LET’S START WORKING</Subtitle>
          <Title>
            How About Starting a Chat?
          </Title>
          <StyledImage src="/assets/contactimg.png" />
        </Col>
        <Col md={6}>
          {/* Added a div around the form */}
          <div style={{ backgroundColor: '#ef5226', padding: '30px' }}>
          <StyledForm onSubmit={formik.handleSubmit}>
  <StyledFormGroup controlId="formName">
    <Form.Label>Your Name</Form.Label>
    <Form.Control
      type="text"
      name="name"
      placeholder="Enter your name"
      {...formik.getFieldProps('name')}
    />
    {formik.touched.name && formik.errors.name ? (
      <div className="text-danger">{formik.errors.name}</div>
    ) : null}
  </StyledFormGroup>

  <StyledFormGroup controlId="formEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control
      type="email"
      name="email"
      placeholder="Enter your email"
      {...formik.getFieldProps('email')}
    />
    {formik.touched.email && formik.errors.email ? (
      <div className="text-danger">{formik.errors.email}</div>
    ) : null}
  </StyledFormGroup>

  <StyledFormGroup controlId="formPhone">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control
      type="text"
      name="phone"
      placeholder="Enter your phone number"
      {...formik.getFieldProps('phone')}
    />
    {formik.touched.phone && formik.errors.phone ? (
      <div className="text-danger">{formik.errors.phone}</div>
    ) : null}
  </StyledFormGroup>

  {/* Add Company Name field */}
  <StyledFormGroup controlId="formCompanyName">
    <Form.Label>Company Name</Form.Label>
    <Form.Control
      type="text"
      name="companyName"
      placeholder="Enter your company name"
      {...formik.getFieldProps('companyName')}
    />
    {formik.touched.companyName && formik.errors.companyName ? (
      <div className="text-danger">{formik.errors.companyName}</div>
    ) : null}
  </StyledFormGroup>

  <StyledFormGroup controlId="formMessage">
    <Form.Label>Your Message</Form.Label>
    <Form.Control
      as="textarea"
      name="message"
      rows={4}
      placeholder="Enter your message"
      {...formik.getFieldProps('message')}
    />
    {formik.touched.message && formik.errors.message ? (
      <div className="text-danger">{formik.errors.message}</div>
    ) : null}
  </StyledFormGroup>

  <StyledButton variant="primary" type="submit">
    Send Message
  </StyledButton>
</StyledForm>

          </div>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default ContactForm;
