import Image from 'next/image';
import NextLink from 'next/link';

const CardGallery = () => {
  return (
    <div className="py-16 group flex items-center justify-center">
      {/* Main picture frame */}
      <div className="z-20 max-w-2xl transform rounded-sm bg-gray-200 p-2 shadow-2xl transition-transform duration-500 ease-in-out group-hover:scale-105">
        <NextLink href={`/about/photo-gallery`}>
          <div className="relative max-w-max cursor-pointer">
            <div className="relative flex">
              <Image
                src="/static/images/photo-gallery/cover_image.webp"
                alt="projectImage"
                objectFit="cover"
                priority={true}
                width={540}
                height={440}
                layout="intrinsic"
              />
            </div>

            <div className="absolute top-0 h-full w-full flex items-center justify-center bg-black opacity-0 transition-opacity duration-400 hover:opacity-80">
              <h2 className="text-3xl text-white text-center font-extrabold">
                A Photo Dump of my Life so far
              </h2>
            </div>
          </div>
        </NextLink>
      </div>

      {/* 2nd frame */}
      <div className="group-hover:rotate-4 absolute z-10 rotate-2 scale-100 transform rounded-sm border-8 border-gray-300 shadow-xl transition-all duration-500 ease-in-out group-hover:scale-115 sm:scale-110">
        <div className="bg-yellow-900 opacity-90 h-max1 w-max12 md:h-max2 md:w-max3 block"></div>
      </div>

      {/* 3rd frame */}
      <div className="group-hover:-rotate-4 absolute z-0 -rotate-3 scale-100 transform rounded-sm border-8 border-gray-300 shadow-xl transition-all duration-500 ease-in-out group-hover:scale-115 sm:scale-110">
        <div className="bg-yellow-900 opacity-90 block h-max1 w-max12 md:h-max2 md:w-max3"></div>
      </div>
    </div>
  );
};

export default CardGallery;
