"use client";

import React, { useState } from 'react';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db, addDoc, collection } from '../../app/firebase';
import emailjs from '@emailjs/browser';
import { doc, getDoc } from "firebase/firestore";
import { Formik, Field, ErrorMessage } from 'formik';

export const StyledContainer = styled(Container)`
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px solid var(--Color-8-Color-8500, #A7A7A7);
  @media (max-width: 992px) {
    padding: 20px;  
  }
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
  @media (max-width: 992px) {
    padding: 5%;  
  }
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
  width :75%;
  height: auto;
  margin-top: 1rem;
  border-radius: 15px;
  @media (max-width: 992px) {
    max-width: 90%;  
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
  @media (max-width: 992px) {
    width: 100%;  
    padding: 12px;
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
  @media (max-width: 992px) {
    font-size: 20px;  
  }
`;

const Subtitle = styled.h2`
  margin-bottom: 20px;
  color: var(--Primary-Primary1000, #5B1907);
  font-size: 80px;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -1.92px;
  @media (max-width: 992px) {
    font-size: 49px;  
  }
`;
const ButtonStyled = styled(Button)`
  background-color: #ef5226 !important;
  color: white;
  border: none !important;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #e14a1a;
  }

  &:disabled {
    background-color: #ff6f5e;
    cursor: not-allowed;
  }
`;
const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().matches(/^[a-zA-Z\s]+$/, 'Name should only contain letters and spaces').required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().matches(/^\d{10}$/, 'Phone number must be exactly 10 digits').required('Phone number is required'),
    message: Yup.string().required('Message is required'),
    companyName: Yup.string(),
  });

  const fetchEmailKeys = async () => {
    const docRef = doc(db, "emailConfig", "emailKeys");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const { service_id, template_id, public_key } = docSnap.data();
      return { service_id, template_id, public_key };
    } else {
      console.error('Email configuration not found:', docSnap);
      throw new Error("No email configuration found!");
    }
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await addDoc(collection(db, 'contactForm'), {
        ...values,
        timestamp: new Date(),
      });
      resetForm();
      const structuredData = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        message: values.message,
        companyName: values.companyName,
      };
      const { service_id, template_id, public_key } = await fetchEmailKeys();
      const templateParams = { ...structuredData };
      await emailjs.send(service_id, template_id, templateParams, public_key);

      toast.success('Message sent successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form. Please try again later.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <StyledContainer id="contact-form" className='mt-5'>
      <ToastContainer />
      <Row>
        <Col md={6}>
          <div style={{ padding: '60px' }}>
            <Subtitle>LET’S START WORKING</Subtitle>
            <Title>How About Starting a Chat?</Title>
            <StyledImage src="/assets/contactimg.webp" alt="Contact Us" />
          </div>
        </Col>
        <Col md={6} style={{ backgroundColor: '#ef5226', padding: '30px', borderRadius: '0px 20px 20px 0px' }}>

          <Formik
            initialValues={{ name: '', email: '', phone: '', message: '', companyName: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, handleChange, handleBlur, values, errors, touched }) => (
              <StyledForm>
                <StyledFormGroup controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Enter your name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                  {touched.name && errors.name && <div className="text-danger">{errors.name}</div>}
                </StyledFormGroup>

                <StyledFormGroup controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Enter your email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                  {touched.email && errors.email && <div className="text-danger">{errors.email}</div>}
                </StyledFormGroup>

                <StyledFormGroup controlId="formPhone">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" name="phone" placeholder="Enter your phone number" value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                  {touched.phone && errors.phone && <div className="text-danger">{errors.phone}</div>}
                </StyledFormGroup>

                <StyledFormGroup controlId="formCompanyName">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type="text" name="companyName" placeholder="Enter your company name" value={values.companyName} onChange={handleChange} onBlur={handleBlur} />
                  {touched.companyName && errors.companyName && <div className="text-danger">{errors.companyName}</div>}
                </StyledFormGroup>

                <StyledFormGroup controlId="formMessage">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control as="textarea" name="message" rows={4} placeholder="Enter your message" value={values.message} onChange={handleChange} onBlur={handleBlur} />
                  {touched.message && errors.message && <div className="text-danger">{errors.message}</div>}
                </StyledFormGroup>

                <ButtonStyled type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </ButtonStyled>
              </StyledForm>
            )}
          </Formik>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default ContactForm;


