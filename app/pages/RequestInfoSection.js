"use client";
import React from 'react';
import Image from 'next/image';  
import NavLogo from "../../public/assets/logo.webp";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaPinterest ,  FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const RequestInfoSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="py-12 px-5 text-center bg-white text-gray-800 flex flex-col items-center justify-center max-w-[992px] mx-auto">
      <div className="w-[250px] h-[100px] mb-16">
        <a href="/">
          <Image src={NavLogo} alt="Logo" width={250} height={100} priority />
        </a>
      </div>
      <h3 className="text-[#EF5226] uppercase mb-2.5 text-center font-poppins text-[14px] font-normal tracking-[2.8px] md:text-[12px] sm:text-[10px]">
        UPSKILL FOR A BETTER FUTURE
      </h3>
      <h1 className="text-[#EF5226] mb-5 font-poppins text-[40px] font-bold md:text-[30px] sm:text-[25px]">
        Request More Information
      </h1>
      <p className="text-[#0A142F] max-w-2xl mx-auto text-center font-poppins text-[15px] font-normal leading-[33px] md:text-[13px] sm:text-[12px] sm:leading-[28px]">
        Profit<sup className="text-[#05a7cc] text-[0.6em] font-bold align-super">b</sup> powered by 
        <a href="#" className="text-[#ff5a00] font-bold hover:underline"> Tech Cloud ERP</a>, ready to take your business to the next level. With Profit<sup className="text-[#05a7cc] text-[0.6em] font-bold align-super">b</sup>, success is just a step away. Join today and experience seamless growth with our powerful, user-friendly solutions tailored for small businesses. Let's build a brighter future together!
      </p>
      <div className="mt-5 flex flex-wrap gap-3 justify-center text-[#EF5226] text-sm">
        <p className="flex items-center gap-2"><FaEnvelope /> contact@profitpowerb.com</p>
        <p className="flex items-center gap-2"><FaPhoneAlt /> +91 8919439603, +91 7032803200</p>
      </div>
      <div className="mt-5 flex gap-3">
        <a href="https://www.facebook.com/profile.php?id=61572204759827" className="text-black text-2xl transition-colors duration-300 hover:text-[#ef5226]"><FaFacebookF /></a>
        <a href="https://x.com/Profitpower_b" className="text-black text-2xl transition-colors duration-300 hover:text-[#ef5226]"><FaXTwitter /></a>
        <a href="#" className="text-black text-2xl transition-colors duration-300 hover:text-[#ef5226]"><FaLinkedinIn /></a>
        <a href="https://www.instagram.com/profitpowerb/" className="text-black text-2xl transition-colors duration-300 hover:text-[#ef5226]"><FaInstagram /></a>
        <a href="https://www.youtube.com/@Profitpowerb" className="text-black text-2xl transition-colors duration-300 hover:text-[#ef5226]"><FaYoutube /></a>
        <a href="https://www.pinterest.com/profitb0167/" className="text-black text-2xl transition-colors duration-300 hover:text-[#ef5226]"><FaPinterest /></a>
      </div>
      <p className="mt-5 max-w-2xl mx-auto text-center leading-[1.8] text-black font-poppins text-sm font-normal">
        <span>
          © {currentYear} Profit<sup className="text-[#05a7cc] text-[0.6em] font-bold align-super">b</sup> 
          <span className="text-black">All Rights Reserved.</span>
        </span>
      </p>
    </section>
  );
};
export default RequestInfoSection;
