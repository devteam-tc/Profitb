"use client";

import React, { useState  } from 'react';
import * as Yup from 'yup';
import styled from 'styled-components';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import ContactImage from '../../public/assets/contactimg.webp';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db, addDoc, collection } from '../../app/firebase';  // Adjust the import based on your file structure
import { doc, getDoc } from 'firebase/firestore';  // Add this import
import emailjs from '@emailjs/browser';

export const StyledContainer = styled(Container)`
  // padding: 2px;
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px solid var(--Color-8-Color-8500, #A7A7A7);
   @media (max-width: 992px) {
    padding: 20px;  // Adjust padding for mobile
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
    padding: 5%;  // Reduce padding on mobile
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
  // max-width: 532px;
  width :75%;
  height: auto;
  margin-top: 1rem;
  border-radius: 15px;
    @media (max-width: 992px) {
    max-width: 90%;  // Make image responsive on smaller screens
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
    width: 100%;  // Make button full width on mobile
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
    font-size: 20px;  // Adjust title size for mobile
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
    font-size: 49px;  // Adjust subtitle size for mobile
  }
`;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  
  const fetchEmailKeys = async () => {
    const docRef = doc(db, "emailConfig", "emailKeys");
    const docSnap = await getDoc(docRef);
    
    console.log("Document exists:", docSnap.exists());  // Log existence check
    console.log("Document data:", docSnap.data());      // Log the fetched data
    
    if (docSnap.exists()) {
      const { service_id, template_id, public_key } = docSnap.data();
      return { service_id, template_id, public_key };
    } else {
      throw new Error("No email configuration found!");
    }
  };
  
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      companyName: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true); // Start submission

      try {
        // Add form data to Firestore
        const docRef = await addDoc(collection(db, "contactForm"), {
          
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
          companyName: values.companyName,
          timestamp: new Date(),
        });

        console.log("Document written with ID: ", docRef.id);

        const structuredData = {
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
          companyName: values.companyName,
        };
        await addDoc(collection(db, 'contactForm'), structuredData);

          // Send email via EmailJS
      const { service_id, template_id, public_key } = await fetchEmailKeys();
      const templateParams = { ...structuredData };
      await emailjs.send(service_id, template_id, templateParams, public_key);

        // Show success notification
        toast.success('Thankyou for submitting!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        // Reset form fields
        resetForm();
      } catch (e) {
        console.error("Error adding document: ", e);
        // Show error notification
        toast.error('Failed to send message. Please try again later.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } finally {
        setIsSubmitting(false); // End submission
      }
    },
  });

  return (
    <StyledContainer id="contact-form" className='mt-5'>
      <ToastContainer />
      <Row>
        <Col md={6} >
          <div  style={{  padding: '60px'  }}>
          <Subtitle>LET’S START WORKING</Subtitle>
          <Title>How About Starting a Chat?</Title>
          <StyledImage src="/assets/contactimg.webp" alt="Contact Us" />
          </div>
        </Col>
        <Col md={6} style={{ backgroundColor: '#ef5226', padding: '30px' , borderRadius : '0px 20px 20px 0px' }}>
         
            <StyledForm onSubmit={formik.handleSubmit}>
              <StyledFormGroup controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-danger">{formik.errors.name}</div>
                )}
              </StyledFormGroup>

              <StyledFormGroup controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger">{formik.errors.email}</div>
                )}
              </StyledFormGroup>

              <StyledFormGroup controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                  {...formik.getFieldProps('phone')}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <div className="text-danger">{formik.errors.phone}</div>
                )}
              </StyledFormGroup>

              <StyledFormGroup controlId="formCompanyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  name="companyName"
                  placeholder="Enter your company name"
                  {...formik.getFieldProps('companyName')}
                />
                {formik.touched.companyName && formik.errors.companyName && (
                  <div className="text-danger">{formik.errors.companyName}</div>
                )}
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
                {formik.touched.message && formik.errors.message && (
                  <div className="text-danger">{formik.errors.message}</div>
                )}
              </StyledFormGroup>

              <StyledButton variant="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Submit'}
              </StyledButton>
            </StyledForm>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default ContactForm;
