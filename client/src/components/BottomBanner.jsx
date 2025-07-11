import React from 'react';
import { assets, features } from '../assets/assets';

const BottomBanner = () => {
  return (
    <div className='relative mt-24'>
      <img
        src={assets.bottom_banner_image}
        alt="banner"
        className='w-full hidden md:block'
      />
      <img
        src={assets.bottom_banner_image_sm}
        alt="banner"
        className='w-full md:hidden'
      />

      <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24'>
        <h1 className='text-2xl md:text-3xl font-semibold text-primary mb-6 text-center md:text-right'>
          Why We Are The Best?
        </h1>

        <div className="p-8 bg-white">
  <h1 className="text-2xl font-bold mb-6">Why We Are The Best?</h1>
  {features.map((feature, index) => (
    <div
      key={index}
      className="flex items-start gap-4 mt-6 max-w-xl"
    >
      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
        <img
          src={feature.icon}
          alt={feature.title}
          className="w-10 h-10 object-contain"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-lg font-semibold leading-snug">
          {feature.title}
        </h3>
        <p className="text-gray-500 text-sm leading-snug">
          {feature.description}
        </p>
      </div>
    </div>
  ))}
</div>



      </div>
    </div>
  );
};

export default BottomBanner;
