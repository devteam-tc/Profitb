"use client";

import React, { useState } from "react";
import * as Yup from "yup";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { db, addDoc, collection } from "../../app/firebase";
import styles from "./Form.module.css"; // Importing CSS Module

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[a-zA-Z\s]+$/, "Name should only contain letters and spaces")
      .required("Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      companyName: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);

      try {
        const docRef = await addDoc(collection(db, "contactForm"), {
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
          companyName: values.companyName,
          timestamp: new Date(),
        });

        console.log("Document written with ID: ", docRef.id);
        toast.success("Thank you for submitting!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        resetForm();
      } catch (e) {
        console.error("Error adding document: ", e);
        toast.error("Failed to send message. Please try again later.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <Container  className={`${styles.container} mt-5`}>
      <ToastContainer />
      <Row>
        <Col md={6}>
          <div style={{ padding: "60px" }}>
            <h2 className={styles.subtitle}>LET’S START WORKING</h2>
            <h1 className={styles.title}>How About Starting a Chat?</h1>
            <img src="/assets/contactimg.webp" alt="Contact Us" className={styles.image} />
          </div>
        </Col>
        <Col md={6} className={styles.contactCol}>
          <Form onSubmit={formik.handleSubmit} className={styles.form}>
            <Form.Group controlId="formName" className={styles.formGroup}>
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                className={styles.formControl}
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-danger">{formik.errors.name}</div>
              ) : null}
            </Form.Group>

            <Form.Group controlId="formEmail" className={styles.formGroup}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                className={styles.formControl}
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </Form.Group>

            <Form.Group controlId="formPhone" className={styles.formGroup}>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className={styles.formControl}
                {...formik.getFieldProps("phone")}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-danger">{formik.errors.phone}</div>
              ) : null}
            </Form.Group>
            <Form.Group controlId="formCompanyName">
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                  type="text"
                  name="companyName"
                  placeholder="Enter your company name"
                  className={styles.formControl}
                  {...formik.getFieldProps('companyName')}
                />
                {formik.touched.companyName && formik.errors.companyName && (
                  <div className="text-danger">{formik.errors.companyName}</div>
                )}
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Enter your message"
                  className={styles.formControl}
                  {...formik.getFieldProps('message')}
                />
                {formik.touched.message && formik.errors.message && (
                  <div className="text-danger">{formik.errors.message}</div>
                )}
              </Form.Group>
              <Button type="submit" className={`${styles.button} mt-3`} disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
