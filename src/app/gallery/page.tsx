'use client';
import {
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
  Gallery9,
  Gallery10,
  Gallery11,
  Gallery12,
  Gallery13,
  Gallery14,
  Gallery15,
  Gallery16,
  Gallery17,
  Gallery18,
  Gallery19,
  Gallery20,
  Gallery21,
  Gallery22,
  Gallery23,
  Gallery24,
  Gallery25,
  Roller,
  FPV,
  Air,
  Ground,
} from '@Assets/images/image.barrel';
import Image, { StaticImageData } from 'next/image';
const page = () => {
  const images = [
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery7,
    Gallery8,
    Gallery9,
    Gallery10,
    Gallery11,
    Gallery12,
    Gallery13,
    Gallery14,
    Gallery15,
    Gallery16,
    Gallery17,
    Gallery18,
    Gallery19,
    Gallery20,
    Gallery21,
    Gallery22,
    Gallery23,
    Gallery24,
    Gallery25,
    Roller,
    FPV,
    Air,
    Ground,
  ];

  return (
    <div className=' flex flex-col items-center justify-center'>
      <div className='px-10'>
        <h1 className='text-lg font-medium my-5'>Gallery</h1>
        <div className=' columns-1 md:columns-4 lg:columns-6 gap-3 '>
          {images.map((img: StaticImageData) => {
            return <Image className='aspect-auto w-full object-cover mb-3' alt='photo' src={img} />;
          })}
          <video className=' h-auto mb-3' autoPlay loop>
            <source src='/videos/DJI.mp4' />
          </video>
          <video className=' h-auto mb-3' autoPlay loop>
            <source src='/videos/DJI2.mp4' />
          </video>
          <video className=' h-auto mb-3' autoPlay loop>
            <source src='/videos/DJI3.mp4' />
          </video>
        </div>
      </div>
    </div>
  );
};

export default page;
