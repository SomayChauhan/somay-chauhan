import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from './types';
import TechStackPill from '../TechStackPill';
import Link from 'next/link';

export default function ProjectItem({ title, description, techStack, live_links, image }: Project) {
  return (
    <motion.div
      // initial={{ scale: 0.8, opacity: 0 }}
      // animate={{ scale: 1, opacity: 1 }}
      // transition={{ duration: 0.6, delay: index / 10 }}
      initial="hidden"
      whileInView={'visible'}
      variants={{
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring',
          },
        },
        hidden: { opacity: 1, y: 80 },
      }}
    >
      <div className="border-b-black-900 lg:h-[450px] flex flex-col items-start space-y-4 border-b-2 pb-16 dark:border-b-white md:flex-row md:justify-between md:space-x-8 md:space-y-0">
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-l font-medium">{title}</h2>
          <p className="text-xs font-light">{description}</p>
          <TechStackPill techStackArr={techStack} />
          <div className="space-y-4">
            {live_links?.map((item) => (
              <a
                key={item.name}
                className="cursor-pointer flex flex-row justify-center p-2 space-x-4 border-2 rounded-lg	border-stone-800"
                href={item.url}
                target="_blank"
              >
                <p>{item.name}</p>
                <Image src={item.image} height={20} width={20} alt="logo-svg" />
                {/* <a target="_blank" href={item.url}></a> */}
              </a>
            ))}
          </div>
        </div>
        <div className="relative w-full lg:h-full lg:w-1/2 flex items-center justify-center">
          <Image
            src={image.url}
            alt="projectImage"
            height={image.height}
            width={image.width}
            priority={true}
            className="transition-all hover:-translate-x-3 hover:scale-110"
          />
          {/* <div className="cursor-pointer absolute inset-0 flex items-center justify-center text-white bg-black opacity-0 hover:opacity-80 active:opacity-80">
            <div className="w-1/2 flex flex-row justify-center items-center space-x-4">
              {live_links?.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-row p-2 space-x-4 border-2 rounded-lg	border-stone-800"
                >
                  <p>{item.name}</p>
                  <Image src={item.image} height={20} width={20} alt="logo-svg" />
                  <a target="_blank" href={item.url}></a>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
}
