"use client"
import { photoGalleryData } from '@/data/photoGalleryData';
import Image from 'next/image';
import { useState } from 'react';

const SubGallery = (props) => {

  const [data, set_data] = useState(photoGalleryData)
  return (
    <>
      {data?.map((image, index) => {
        const rotate = [
          '-rotate-[3deg]',
          '-rotate-[2deg]',
          '-rotate-[1deg]',
          'rotate-0',
          'rotate-[1deg]',
          'rotate-[2deg]',
          'rotate-[3deg]',
        ];
        const random = Math.floor(Math.random() * rotate.length);

        return (
          <div
            className={`sticky top-12 max-w-3xl transform rounded-sm bg-gray-200 p-1 shadow-xl first:top-12 ${rotate[random]} align grid justify-items-center md:p-2`}
          >
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt="projectImage"
              objectFit='cover'
              className="z-50"
              priority={index < 4}

            />
            {/* <div
              className={`absolute top-4 left-4 right-4 bottom-4 z-0 m-auto h-9/10 w-9/10 animate-pulse-slow bg-yellow-900`}
            >
              {image.name}
            </div> */}
          </div>
        );
      })}
    </>
  );
};

export default SubGallery;

// title={gallery.title}
// imagesCollection={gallery.imagesCollection.items}
