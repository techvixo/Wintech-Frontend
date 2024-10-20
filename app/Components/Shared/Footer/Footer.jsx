"use client";
import logo from "@@/logo/logo.png";
import shap from "@@/footer-img/footer-top-shap.png";
import m1 from "@@/footer-img/peyment-mathod/1.png";
import m2 from "@@/footer-img/peyment-mathod/2.png";
import m3 from "@@/footer-img/peyment-mathod/3.png";
import m4 from "@@/footer-img/peyment-mathod/4.png";
import m5 from "@@/footer-img/peyment-mathod/5.png";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BASEURL } from "@/Constant";
import axios from "axios";

const Footer = () => {
  const [inputValue, setInputValue] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true); // State to track if email is valid
  const paymentMathod = [
    {
      id: 1,
      name: "",
      mathod: m1,
      link: "/",
    },
    {
      id: 2,
      name: "",
      mathod: m2,
      link: "/",
    },
    {
      id: 3,
      name: "",
      mathod: m3,
      link: "/",
    },
    {
      id: 4,
      name: "",
      mathod: m4,
      link: "/",
    },
    {
      id: 5,
      name: "",
      mathod: m5,
      link: "/",
    },
  ];
  const handleSubscribe = async () => {
    console.log(inputValue);
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(inputValue)) {
      // If email is valid, perform subscription logic
      // console.log("Email is valid:", inputValue);
      const data = {
        email: inputValue,
      };
      try {
        const response = await axios.post(`${BASEURL}/user/subscribe`, data, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
        });
        // console.log(response)
        console.log(response?.data);
        if (response?.data?.success) {
          window.alert(response?.data?.message);
          setInputValue("");
        }
      } catch (error) {
        console.error("Booking cancel error:", error);
      }
      setIsValidEmail(true);
      // Add your subscription logic here
    } else {
      // If email is not valid, set isValidEmail state to false
      console.log("Invalid email:", inputValue);
      setIsValidEmail(false);
    }
  };
  return (
    <section
      id="footer"
      className="bg-[#252B42] text-xs md:text-base mt-6  md:mt-12 relative  md:mb-0"
    >
      <div className="shap relative top-[-2px]  left-0 w-full">
        <Image src={shap} alt="logo" width={800} className="w-full" />
      </div>
      <div className="main_container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 lg:gap-4 pt-12 text-[#FFFFFFE5] capitalize">
          <div className=" flex flex-col gap-3">
            <Image src={logo} alt="logo" width={200} className="w-24" />
            <div className="mt-2 flex flex-col gap-3">
              {/* <p className='flex items-start gap-3 text-[#FFFFFFE5]'><span className="text-xl font-semibold text-primary"><FaLocationDot /></span><span>House 04, Road 15, Block-D, (2nd floor), banani, dhaka-1213</span></p> */}
              <p className="flex items-center gap-3 text-[#FFFFFFE5]">
                <span className="text-xl font-semibold text-secondary">
                  <MdOutlinePhonelinkRing />
                </span>
                <span className="text-sm md:text-base">+880 9617 888 555</span>
              </p>
              <p className="flex items-center gap-3 text-[#FFFFFFE5]">
                <span className="text-xl font-semibold text-secondary">
                  <MdOutlinePhonelinkRing />
                </span>
                <span className="text-sm md:text-base">+880 1844 522 115</span>
              </p>
              <p className="flex items-center gap-3 text-[#FFFFFFE5]">
                <span className="text-xl font-semibold text-secondary">
                  <MdOutlineEmail />
                </span>
                <span className="lowercase text-sm md:text-base">info@wintech.com</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 font-normal">
            <p className="text-white font-bold  mb-3">COMPANY</p>
            <Link href="/about-us">
              <span>About Wintech</span>
            </Link>
            <Link href="/mission-vision">
              <span>Mission & vission</span>
            </Link>
            <Link href="/">
              <span>Career & Opportunity</span>
            </Link>
          </div>
          <div className="flex flex-col gap-2  font-normal">
            <p className="text-white font-bold  mb-3">QUICK LINKS</p>
            <Link href="/terms-conditions">
              <span>Terms And Conditions</span>
            </Link>
            <Link href="/refund-policy">
              <span>Refund policy</span>
            </Link>
            {/* <Link href="/cencellation-policy"><span>cancellation policy</span></Link> */}
            <Link href="/privacy-policy">
              <span>Privacy & Policy</span>
            </Link>
            <Link href="/faq">
              <span>FAQS</span>
            </Link>
          </div>
          <div className=" flex flex-col gap-3">
            <p className="text-white font-bold uppercase mb-2">Stay in touch</p>
            <div className="w-full">
              <div className="join text-black w-full">
                <input
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                  type="email"
                  required
                  placeholder="Type your email"
                  className={`input input-sm input-bordered join-item w-full ${
                    isValidEmail ? "" : "border-red-500"
                  }`} // Add red border when email is not valid
                />
                <button
                  onClick={handleSubscribe}
                  className="btn btn-sm btn-secondary join-item text-white"
                >
                  Subscribe
                </button>
              </div>
            </div>
            {!isValidEmail && (
              <p className="text-red-500 text-sm">
                Please enter a valid email address.
              </p>
            )}{" "}
            {/* Display error message when email is not valid */}
            <p className="text-[#FFFFFFE5] normal-case">
              Enter your email address for get promotions and news.
            </p>
          </div>
        </div>
        <div className="footer_border py-2 md:py-4 w-full text-[#939393] flex flex-col-reverse md:flex-row justify-between items-center gap-3 mt-4 ">
          <div className="md:w-1/2 md:flex flex-col items-start">
            <div className=" flex items-center justify-center md:justify-start gap-3">
              <Link
                href={"https://www.facebook.com/fare.com.bd"}
                target="blank"
              >
                <span className="flex items-center justify-center bg-secondary text-white h-8 w-8 text-lg rounded-full font-bold shadow">
                  <FaFacebookF />
                </span>
              </Link>
              <span className="flex items-center justify-center bg-secondary text-white h-8 w-8 text-lg rounded-full font-bold shadow">
                <FaLinkedinIn />
              </span>
              <span className="flex items-center justify-center bg-secondary text-white h-8 w-8 text-lg rounded-full font-bold shadow">
                <FaSquareXTwitter />
              </span>
              <span className="flex items-center justify-center bg-secondary text-white h-8 w-8 text-lg rounded-full font-bold shadow">
                <FaYoutube />
              </span>
            </div>
            <p className="text-sm text-center text-white mt-4">
              {" "}
              © Copyright 2024 - WinTech Bangladesh Ltd. All Rights Reserved.
            </p>
          </div>
          <div className="md:flex justify-end w-full md:w-1/2">
            <div className="flex justify-center md:justify-end gap-2 items-center md:gap-3">
              <p className="text-sm text-center md:text-base md:text-end md:tracking-[3px] text-white">
                We Accept
              </p>
              {paymentMathod.map((mathod, i) => {
                return (
                  <div key={i} className="l">
                    <Image
                      src={mathod?.mathod}
                      alt="logo"
                      width={100}
                      className="w-12 md:w-16"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
