"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
const ContactPage = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);
  const [emailError, setEmailError] = useState("");
  const text = "SAY HELLO";
  const form = useRef();

  const handleEmailChange = (e) => {
    const email = e.target.value.trim();
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  useEffect(() => {
    // Clear email error when the component mounts or unmounts
    return () => setEmailError("");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    setSuccess(false);
    console.log(process.env.NEXT_PUBLIC_SERVICE_ID);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);

          form.current.reset();
        },
        (error) => {
          setError(true);
          console.log(error);
        }
      );
    setSending(false);
  };

  return (
    <motion.div
      className="h-full  overflow-y-auto"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-6">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.05,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-full lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center py-4 px-12"
        >
          <span>Dear Khanh Nguyen,</span>
          <textarea
            rows={3}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          />
          <span>My email address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
            onChange={handleEmailChange}
          />
          {emailError && (
            <span className="text-red-600 font-semibold">{emailError}</span>
          )}
          <button
            disabled={sending || emailError}
            className="relative flex h-[50px] w-40 rounded items-center justify-center overflow-hidden bg-black text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white  before:duration-500 before:ease-out hover:shadow-white  hover:before:h-56 hover:before:w-56 group"
          >
            {!sending ? (
              <span className="relative z-2 group-hover:hidden">Send</span>
            ) : (
              <span className="relative z-2">Sending ...</span>
            )}
            <Image
              src={"/3106794.png"}
              alt="JavaScript image"
              width={50}
              height={50}
              className="relative z-2 ml-2 group-hover:block hidden"
            ></Image>
          </button>
          {success && (
            <span className="text-green-600 font-semibold ">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
