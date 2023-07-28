'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { techStackItem } from '@/data/techStack';
import React from 'react';

const TechStackPill = ({ techStackArr }: { techStackArr: techStackItem[] }) => {
  return (
    <div className="flex flex-wrap flex justify-between text-xs">
      {techStackArr.map((el: { name: string; link?: string }) => (
        <motion.div
          key={el.name}
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
          className="bg-gray-50 p-4 mb-4 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
        >
          <Image alt="" src={el?.link} height={20} width={20} />
          <h4 className="text-md ml-4 dark:text-black">{el.name}</h4>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStackPill;
