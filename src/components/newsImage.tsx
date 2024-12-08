import React from "react";
import Image from "next/image";

export const NewsImage = () => {
  return (
    <div className='md:flex justify-end'>
      <div className='hidden md:flex w-full md:h-[500px]'>
        <Image
          src={"/images/illustration-sign-up-desktop.svg"}
          width={400}
          height={593}
          alt='news'
          className='w-full rounded-xl'
        />
      </div>
      <div className='md:hidden w-full'>
        <Image
          src={"/images/illustration-sign-up-mobile.svg"}
          width={375}
          height={284}
          alt='news'
          className='w-full rounded-xl'
        />
      </div>
    </div>
  );
};
