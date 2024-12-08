"use client";
import React, { FormEvent } from "react";
import { NewsImage } from "./newsImage";
import Image from "next/image";
import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState(false);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!email) {
      setError("Valid Email required");
    }
    if (error.length === 0) {
      setStatus(true);
    }
  };
  return (
    <div>
      <div className='flex flex-col md:flex-row-reverse md:justify-between md:p-2 bg-white rounded-xl'>
        <div className=''>
          <NewsImage />
        </div>
        <div className='p-8 md:w-3/5'>
          <div className=''>
            <h1 className='text-4xl md:text-[50px] my-4 font-robotoBold'>
              Stay updated!
            </h1>
            <p className='my-2'>
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className=''>
              <li className='flex gap-3 my-2'>
                <Image
                  src={"/images/icon-list.svg"}
                  width={21}
                  height={21}
                  alt='check'
                />{" "}
                Product discovery and building what matters
              </li>
              <li className='flex gap-3 my-2'>
                <Image
                  src={"/images/icon-list.svg"}
                  width={21}
                  height={21}
                  alt='check'
                />
                Measuring to ensure updates are a success
              </li>
              <li className='flex gap-3 my-2'>
                <Image
                  src={"/images/icon-list.svg"}
                  width={21}
                  height={21}
                  alt='check'
                />
                And much more!
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className='mt-5'>
            <div className='my-2'>
              <div className='font-robotoBold flex justify-between my-1'>
                <h6 className='text-[12px]'>Email address</h6>
                {error && <p className='text-red-500 text-[12px]'>{error}</p>}
              </div>
              <input
                type='email'
                name='email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder='email@company.com'
                className={`${
                  error
                    ? "border-red-500 bg-red-100 text-red-600"
                    : "border-gray-300"
                } border py-4 px-5 rounded-lg w-full outline-none focus:border-Neutral-dark_slate_gray`}
              />
            </div>
            <button
              type='submit'
              className='font-robotoBold text-white w-full rounded-lg px-5 py-4 bg-Neutral-dark_slate_gray mt-4 hover:bg-tomato'
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
      <div
        className={`md:hidden ${
          status == true
            ? "fixed top-0 left-0 h-screen z-40  w-full bg-white "
            : "hidden"
        }`}
      >
        <div className='py-10 px-5 relative h-screen'>
          <div className='max-w-[64px] max-h-[64px] my-20'>
            <Image
              src={"/images/icon-success.svg"}
              width={64}
              height={64}
              alt='check'
              className='w-full'
            />
          </div>
          <h2 className='font-robotoBold text-4xl my-5'>
            Thanks for subscribing!
          </h2>
          <p className=''>
            A confirmation email has been sent to{" "}
            <span className='font-robotoBold'>{email}</span>. Please open it and
            click the button inside to confirm your subscription
          </p>
          <button
            type='button'
            className='absolute bottom-4 font-robotoBold text-white bg-Neutral-dark_slate_gray my-4 px-4 py-2 hover:bg-tomato hover:text-Neutral-dark_slate_gray rounded-lg w-[93%]'
            onClick={() => {
              setStatus(false);
              setEmail("");
            }}
          >
            Dismiss message
          </button>
        </div>
      </div>
      <div
        className={`${
          status == true
            ? "hidden md:flex fixed top-0 left-0 h-screen z-40  w-full bg-Neutral-dark_slate_gray"
            : "hidden"
        }`}
      >
        <div className='bg-white rounded-xl w-[350px] h-[350px] m-auto py-2 px-7'>
          <div className='max-w-[50px] max-h-[50px] my-2'>
            <Image
              src={"/images/icon-success.svg"}
              width={64}
              height={64}
              alt='check'
              className='w-full'
            />
          </div>
          <h2 className='font-robotoBold text-4xl my-4'>
            Thanks for subscribing!
          </h2>
          <p>
            A confirmation email has been sent to{" "}
            <span className='font-robotoBold'>{email}</span>. Please open it and
            click the button inside to confirm your subscription
          </p>
          <button
            type='button'
            className='font-robotoBold text-white bg-Neutral-dark_slate_gray my-3 mt-4 px-4 py-2 hover:bg-tomato hover:text-Neutral-dark_slate_gray rounded-lg w-full'
            onClick={() => {
              setStatus(false);
              setEmail("");
            }}
          >
            Dismiss message
          </button>
        </div>
      </div>
    </div>
  );
}
