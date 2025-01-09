// WhatsApp Button Component
import React from 'react';
import styled from 'styled-components';

const WhatsapppButton = styled.a`
  position: fixed;
  bottom: 130px;
  left: 7px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: bounce 2s infinite;

  @media screen and (max-width: 992px) {
    bottom: 10px;
    left: 10px;
    width: 45px;
    height: 45px;
  }
`;

const WhatsappIcon = styled.img`
  width: 55px;
  height: 55px;

  @media screen and (max-width: 992px) {
    width: 45px;
    height: 45px;
  }
`;

const WhatsappButton = () => {
  return (
    <WhatsapppButton
      href="https://api.whatsapp.com/send?phone=+918886606458&text=Hi"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
    <WhatsappIcon
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </WhatsapppButton>
  );
};

export default WhatsappButton;
